import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ROOT_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'homereadyca.com';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // Extract subdomain
  let subdomain: string | null = null;

  // Handle localhost development
  if (hostname.includes('localhost')) {
    // In development, use query param or cookie to simulate subdomain
    subdomain = request.nextUrl.searchParams.get('subdomain') ||
      request.cookies.get('dev_subdomain')?.value ||
      null;
  } else {
    // Production: extract subdomain from hostname
    // e.g., "smith.homereadyca.com" -> "smith"
    const hostParts = hostname.replace(`.${ROOT_DOMAIN}`, '').split('.');

    // Check if we have a subdomain (not just the root domain)
    if (hostname !== ROOT_DOMAIN && hostname !== `www.${ROOT_DOMAIN}`) {
      subdomain = hostParts[0];
    }
  }

  // Store subdomain in header for use in pages
  const response = NextResponse.next();

  if (subdomain && subdomain !== 'www') {
    response.headers.set('x-subdomain', subdomain);
  }

  // Handle www redirect to root
  if (hostname === `www.${ROOT_DOMAIN}`) {
    return NextResponse.redirect(new URL(url.pathname, `https://${ROOT_DOMAIN}`));
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes (API routes handle their own logic)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*$).*)',
  ],
};
