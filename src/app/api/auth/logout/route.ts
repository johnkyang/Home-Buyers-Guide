import { NextRequest, NextResponse } from 'next/server';

const SESSION_COOKIE = 'homeready_session';

export async function GET(request: NextRequest) {
  const url = new URL('/login', request.url);
  const response = NextResponse.redirect(url);

  // Clear the session cookie on the response
  response.cookies.set({
    name: SESSION_COOKIE,
    value: '',
    path: '/',
    maxAge: 0,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  return response;
}

export async function POST() {
  const response = NextResponse.json({ success: true });

  response.cookies.set({
    name: SESSION_COOKIE,
    value: '',
    path: '/',
    maxAge: 0,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  return response;
}
