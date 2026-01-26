import nodemailer from 'nodemailer';
import { Realtor, Buyer } from '@/types';

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtpout.secureserver.net',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

const FROM_EMAIL = process.env.EMAIL_FROM || 'admin@homereadyca.com';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'johnkaiyang@gmail.com';

// ============ ADMIN NOTIFICATIONS ============

export async function sendRealtorSignupNotification(realtor: Realtor): Promise<void> {
  const transporter = getTransporter();

  const html = `
    <h2>New Realtor Partner Application</h2>
    <p>A new realtor has submitted an application to become a partner:</p>
    <table style="border-collapse: collapse; margin: 20px 0;">
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${realtor.firstName} ${realtor.lastName}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${realtor.email}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${realtor.phone}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company:</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${realtor.companyName}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">License #:</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${realtor.licenseNumber}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Website:</td>
        <td style="padding: 8px; border: 1px solid #ddd;"><a href="${realtor.websiteUrl}">${realtor.websiteUrl}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Proposed Subdomain:</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${realtor.subdomain}.homereadyca.com</td>
      </tr>
    </table>
    <p><strong>To approve this partner:</strong></p>
    <ol>
      <li>Go to Airtable</li>
      <li>Find this record in the Realtors table</li>
      <li>Change Status from "Pending" to "Approved"</li>
      <li>Set "Approved At" to the current date/time</li>
    </ol>
    <p style="color: #666; font-size: 12px;">This is an automated notification from HomeReadyCA.com</p>
  `;

  try {
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Realtor Application: ${realtor.firstName} ${realtor.lastName}`,
      html,
    });
  } catch (error) {
    console.error('Failed to send realtor signup notification:', error);
    // Don't throw - email failure shouldn't break the signup flow
  }
}

export async function sendBuyerRegistrationToAdmin(
  buyer: Buyer,
  realtor?: Realtor
): Promise<void> {
  const transporter = getTransporter();

  const source = realtor
    ? `Partner Subdomain (${realtor.firstName} ${realtor.lastName})`
    : 'Direct';

  const html = `
    <h2>New Buyer Registration</h2>
    <p>A new buyer has registered for the HomeReadyCA course:</p>
    <table style="border-collapse: collapse; margin: 20px 0;">
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${buyer.fullName}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${buyer.email}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${buyer.phone}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Source:</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${source}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Registered At:</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${new Date(buyer.registeredAt).toLocaleString()}</td>
      </tr>
    </table>
    <p style="color: #666; font-size: 12px;">This is an automated notification from HomeReadyCA.com</p>
  `;

  try {
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Buyer Registration: ${buyer.fullName}`,
      html,
    });
  } catch (error) {
    console.error('Failed to send buyer registration notification to admin:', error);
  }
}

// ============ REALTOR NOTIFICATIONS ============

export async function sendBuyerRegistrationToRealtor(
  buyer: Buyer,
  realtor: Realtor
): Promise<void> {
  const transporter = getTransporter();

  const html = `
    <h2>New Lead from HomeReadyCA</h2>
    <p>Hi ${realtor.firstName},</p>
    <p>Great news! A new buyer has registered for the California homebuyer course through your partner portal:</p>
    <table style="border-collapse: collapse; margin: 20px 0;">
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${buyer.fullName}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
        <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${buyer.email}">${buyer.email}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
        <td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${buyer.phone}">${buyer.phone}</a></td>
      </tr>
    </table>
    <p>This buyer has consented to receive calls, texts, and emails for educational purposes and follow-up related to their homebuying journey.</p>
    <p>We recommend reaching out within 24 hours to introduce yourself and offer assistance.</p>
    <p>Best regards,<br>HomeReadyCA Team</p>
    <p style="color: #666; font-size: 12px;">This is an automated notification from HomeReadyCA.com</p>
  `;

  try {
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: realtor.email,
      subject: `New Lead: ${buyer.fullName} registered for HomeReadyCA`,
      html,
    });
  } catch (error) {
    console.error('Failed to send buyer registration notification to realtor:', error);
  }
}

// ============ BUYER NOTIFICATIONS ============

export async function sendPasswordResetEmail(
  email: string,
  resetToken: string
): Promise<void> {
  const transporter = getTransporter();

  const resetUrl = `${process.env.NEXTAUTH_URL || 'https://homereadyca.com'}/reset-password?token=${resetToken}`;

  const html = `
    <h2>Reset Your Password</h2>
    <p>You requested to reset your password for your HomeReadyCA account.</p>
    <p>Click the button below to reset your password:</p>
    <p style="margin: 30px 0;">
      <a href="${resetUrl}"
         style="background-color: #1E3A5F; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
        Reset Password
      </a>
    </p>
    <p>Or copy and paste this link into your browser:</p>
    <p style="word-break: break-all; color: #666;">${resetUrl}</p>
    <p>This link will expire in 1 hour.</p>
    <p>If you didn't request this, you can safely ignore this email.</p>
    <p style="color: #666; font-size: 12px;">This is an automated notification from HomeReadyCA.com</p>
  `;

  try {
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: email,
      subject: 'Reset Your HomeReadyCA Password',
      html,
    });
  } catch (error) {
    console.error('Failed to send password reset email:', error);
    throw new Error('Failed to send password reset email');
  }
}

export async function sendWelcomeEmail(buyer: Buyer): Promise<void> {
  const transporter = getTransporter();

  const html = `
    <h2>Welcome to HomeReadyCA!</h2>
    <p>Hi ${buyer.fullName.split(' ')[0]},</p>
    <p>Thank you for registering for the California Homebuyer Course. You're taking an important step toward homeownership!</p>
    <p>Here's what you can expect:</p>
    <ul>
      <li><strong>10 comprehensive modules</strong> covering everything from budgeting to closing</li>
      <li><strong>California-specific guidance</strong> including down payment assistance programs</li>
      <li><strong>Track your progress</strong> and pick up where you left off</li>
    </ul>
    <p style="margin: 30px 0;">
      <a href="${process.env.NEXTAUTH_URL || 'https://homereadyca.com'}/login"
         style="background-color: #1E3A5F; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
        Start Learning
      </a>
    </p>
    <p>If you have any questions, feel free to reach out.</p>
    <p>Best of luck on your homebuying journey!</p>
    <p>The HomeReadyCA Team</p>
    <p style="color: #666; font-size: 12px;">This is an automated notification from HomeReadyCA.com</p>
  `;

  try {
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: buyer.email,
      subject: 'Welcome to HomeReadyCA - Start Your Homebuying Journey',
      html,
    });
  } catch (error) {
    console.error('Failed to send welcome email:', error);
    // Don't throw - email failure shouldn't break the registration flow
  }
}
