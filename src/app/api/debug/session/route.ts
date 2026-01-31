import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getSession } from '@/lib/auth';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('homeready_session');

    const hasJwtSecret = !!process.env.JWT_SECRET;
    const session = await getSession();

    return NextResponse.json({
      hasCookie: !!sessionCookie,
      cookieLength: sessionCookie?.value?.length || 0,
      hasJwtSecret,
      hasSession: !!session,
      sessionUser: session?.user?.email || null,
    });
  } catch (error) {
    return NextResponse.json({
      error: String(error),
    }, { status: 500 });
  }
}
