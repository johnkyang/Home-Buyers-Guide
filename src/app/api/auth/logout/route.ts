import { NextRequest, NextResponse } from 'next/server';
import { clearSessionCookie } from '@/lib/auth';

export async function GET(request: NextRequest) {
  await clearSessionCookie();

  // Get the origin from the request to handle both localhost and production
  const url = new URL('/', request.url);
  return NextResponse.redirect(url);
}

export async function POST() {
  await clearSessionCookie();

  return NextResponse.json({ success: true });
}
