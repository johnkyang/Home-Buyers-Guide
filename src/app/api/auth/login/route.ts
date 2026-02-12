import { NextRequest, NextResponse } from 'next/server';
import { verifyPassword, createSession } from '@/lib/auth';
import { getBuyerByEmail } from '@/lib/airtable';

const SESSION_COOKIE = 'homeready_session';
const SESSION_DURATION = 7 * 24 * 60 * 60; // 7 days in seconds

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find buyer by email
    const buyer = await getBuyerByEmail(email);
    if (!buyer) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Verify password
    const isValid = await verifyPassword(password, buyer.passwordHash);
    if (!isValid) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Create session token
    const token = await createSession({
      id: buyer.id,
      email: buyer.email,
      fullName: buyer.fullName,
    });

    // Create response
    const response = NextResponse.json({
      success: true,
      data: {
        id: buyer.id,
        fullName: buyer.fullName,
        email: buyer.email,
      },
    });

    // Set cookie using Next.js cookies API (most compatible method)
    // Get the domain from the request for proper cookie scoping
    const host = request.headers.get('host') || '';
    const isLocalhost = host.includes('localhost');

    response.cookies.set({
      name: SESSION_COOKIE,
      value: token,
      path: '/',
      maxAge: SESSION_DURATION,
      httpOnly: true,
      secure: !isLocalhost, // Only secure on production (HTTPS)
      sameSite: 'lax',
      // Set domain for production to ensure cookie works across the site
      ...(isLocalhost ? {} : { domain: 'homereadyca.com' }),
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, error: 'Login failed. Please try again.' },
      { status: 500 }
    );
  }
}
