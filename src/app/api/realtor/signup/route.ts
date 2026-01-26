import { NextRequest, NextResponse } from 'next/server';
import { createRealtor } from '@/lib/airtable';
import { sendRealtorSignupNotification } from '@/lib/email';
import { validateEmail, validatePhone } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      headshotUrl,
      websiteUrl,
      companyName,
      licenseNumber,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !headshotUrl || !websiteUrl || !companyName || !licenseNumber) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
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

    // Validate URL format
    try {
      new URL(headshotUrl);
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid headshot URL format' },
        { status: 400 }
      );
    }

    try {
      new URL(websiteUrl);
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid website URL format' },
        { status: 400 }
      );
    }

    // Create realtor in Airtable
    const realtor = await createRealtor({
      firstName,
      lastName,
      email,
      phone,
      headshotUrl,
      websiteUrl,
      companyName,
      licenseNumber,
    });

    // Send admin notification (async, don't block response)
    sendRealtorSignupNotification(realtor).catch((error) => {
      console.error('Error sending realtor signup notification:', error);
    });

    return NextResponse.json({
      success: true,
      data: {
        id: realtor.id,
        firstName: realtor.firstName,
        lastName: realtor.lastName,
        subdomain: realtor.subdomain,
        status: realtor.status,
      },
      message: `Thank you for applying! Your partner portal will be available at ${realtor.subdomain}.homereadyca.com once approved.`,
    });
  } catch (error) {
    console.error('Realtor signup error:', error);
    return NextResponse.json(
      { success: false, error: 'Registration failed. Please try again.' },
      { status: 500 }
    );
  }
}
