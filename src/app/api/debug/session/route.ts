import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getSession } from '@/lib/auth';
import { jwtVerify } from 'jose';

export async function GET(request: NextRequest) {
  try {
    // Get cookie from request directly
    const requestCookie = request.cookies.get('homeready_session');

    // Get cookie via next/headers
    const cookieStore = await cookies();
    const headersCookie = cookieStore.get('homeready_session');

    // Check JWT_SECRET
    const jwtSecret = process.env.JWT_SECRET;
    const hasJwtSecret = !!jwtSecret;
    const jwtSecretLength = jwtSecret?.length || 0;
    const jwtSecretPrefix = jwtSecret?.substring(0, 5) || 'none';

    // Try to verify the token if it exists
    let verificationResult = 'no token';
    let sessionData = null;

    if (requestCookie?.value) {
      try {
        const secret = new TextEncoder().encode(
          jwtSecret || 'default-secret-change-in-production'
        );
        const { payload } = await jwtVerify(requestCookie.value, secret);
        verificationResult = 'valid';
        sessionData = payload;
      } catch (error) {
        verificationResult = `invalid: ${error instanceof Error ? error.message : 'unknown error'}`;
      }
    }

    // Try getSession()
    let getSessionResult = null;
    try {
      getSessionResult = await getSession();
    } catch (error) {
      getSessionResult = { error: error instanceof Error ? error.message : 'unknown' };
    }

    return NextResponse.json({
      environment: process.env.NODE_ENV,
      requestCookie: {
        exists: !!requestCookie,
        length: requestCookie?.value?.length || 0,
      },
      headersCookie: {
        exists: !!headersCookie,
        length: headersCookie?.value?.length || 0,
      },
      jwtSecret: {
        exists: hasJwtSecret,
        length: jwtSecretLength,
        prefix: jwtSecretPrefix,
      },
      verification: verificationResult,
      sessionData: sessionData ? {
        user: sessionData.user,
        exp: sessionData.exp,
      } : null,
      getSession: getSessionResult ? {
        hasUser: !!getSessionResult.user,
        email: getSessionResult.user?.email || null,
      } : null,
      headers: {
        host: request.headers.get('host'),
        cookie: request.headers.get('cookie')?.substring(0, 100) || 'none',
      },
    });
  } catch (error) {
    return NextResponse.json({
      error: String(error),
    }, { status: 500 });
  }
}
