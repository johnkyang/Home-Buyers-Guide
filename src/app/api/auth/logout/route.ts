import { NextRequest, NextResponse } from 'next/server';

const SESSION_COOKIE = 'homeready_session';

export async function GET(request: NextRequest) {
  const url = new URL('/login', request.url);
  const response = NextResponse.redirect(url);

  // Clear the session cookie without domain (new cookies)
  response.cookies.set({
    name: SESSION_COOKIE,
    value: '',
    path: '/',
    maxAge: 0,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  // Also clear old cookies that were set with explicit domain
  response.headers.append(
    'Set-Cookie',
    `${SESSION_COOKIE}=; Path=/; Domain=homereadyca.com; Max-Age=0; HttpOnly; SameSite=Lax${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
  );
  response.headers.append(
    'Set-Cookie',
    `${SESSION_COOKIE}=; Path=/; Domain=.homereadyca.com; Max-Age=0; HttpOnly; SameSite=Lax${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
  );

  return response;
}

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Clear the session cookie without domain (new cookies)
  response.cookies.set({
    name: SESSION_COOKIE,
    value: '',
    path: '/',
    maxAge: 0,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  // Also clear old cookies that were set with explicit domain
  response.headers.append(
    'Set-Cookie',
    `${SESSION_COOKIE}=; Path=/; Domain=homereadyca.com; Max-Age=0; HttpOnly; SameSite=Lax${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
  );
  response.headers.append(
    'Set-Cookie',
    `${SESSION_COOKIE}=; Path=/; Domain=.homereadyca.com; Max-Age=0; HttpOnly; SameSite=Lax${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
  );

  return response;
}
