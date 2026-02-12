import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ROOT_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'homereadyca.com';

// Simplified middleware - only handles subdomain routing
// Authentication is handled by individual pages
export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // Extract subdomain
  let subdomain: string | null = null;

  // Handle localhost development
  if (hostname.includes('localhost')) {
    subdomain = request.nextUrl.searchParams.get('subdomain') ||
      request.cookies.get('dev_subdomain')?.value ||
      null;
  } else {
    // Production: extract subdomain from hostname
    const hostParts = hostname.replace(`.${ROOT_DOMAIN}`, '').split('.');
    if (hostname !== ROOT_DOMAIN && hostname !== `www.${ROOT_DOMAIN}`) {
      subdomain = hostParts[0];
    }
  }

  // Handle www redirect to root
  if (hostname === `www.${ROOT_DOMAIN}`) {
    return NextResponse.redirect(new URL(url.pathname, `https://${ROOT_DOMAIN}`));
  }

  // Continue with request
  const response = NextResponse.next();

  if (subdomain && subdomain !== 'www') {
    response.headers.set('x-subdomain', subdomain);
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*$).*)',
  ],
};
