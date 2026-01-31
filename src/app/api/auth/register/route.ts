import { NextRequest, NextResponse } from 'next/server';
import { hashPassword, createSession, setSessionCookie, validatePassword, validateEmail, validatePhone } from '@/lib/auth';
import { createBuyer, getBuyerByEmail, getRealtorBySubdomain } from '@/lib/airtable';
import { sendBuyerRegistrationToAdmin, sendBuyerRegistrationToRealtor, sendWelcomeEmail } from '@/lib/email';
import { CONSENT_VERSION } from '@/lib/constants';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, password, consent, subdomain } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !password) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate consent
    if (!consent) {
      return NextResponse.json(
        { success: false, error: 'You must agree to the terms and consent' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone
    if (!validatePhone(phone)) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Validate password
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      return NextResponse.json(
        { success: false, error: passwordValidation.error },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingBuyer = await getBuyerByEmail(email);
    if (existingBuyer) {
      return NextResponse.json(
        { success: false, error: 'An account with this email already exists' },
        { status: 400 }
      );
    }

    // Check for realtor attribution
    let realtor = null;
    let source: 'Partner Subdomain' | 'Direct' = 'Direct';

    if (subdomain) {
      realtor = await getRealtorBySubdomain(subdomain);
      if (realtor && realtor.status === 'Approved') {
        source = 'Partner Subdomain';
      }
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Create buyer in Airtable
    const buyer = await createBuyer({
      fullName,
      email,
      phone,
      passwordHash,
      source,
      subdomainCaptured: subdomain || undefined,
      referredRealtorId: realtor?.id,
      consentLanguageVersion: CONSENT_VERSION,
    });

    // Send notifications (async, don't block response)
    Promise.all([
      sendBuyerRegistrationToAdmin(buyer, realtor || undefined),
      realtor ? sendBuyerRegistrationToRealtor(buyer, realtor) : Promise.resolve(),
      sendWelcomeEmail(buyer),
    ]).catch((error) => {
      console.error('Error sending registration emails:', error);
    });

    // Create session
    const token = await createSession({
      id: buyer.id,
      email: buyer.email,
      fullName: buyer.fullName,
    });

    // Set session cookie
    await setSessionCookie(token);

    return NextResponse.json({
      success: true,
      data: {
        id: buyer.id,
        fullName: buyer.fullName,
        email: buyer.email,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { success: false, error: `Registration failed: ${errorMessage}` },
      { status: 500 }
    );
  }
}
