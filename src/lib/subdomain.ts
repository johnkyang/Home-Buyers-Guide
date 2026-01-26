import { headers, cookies } from 'next/headers';
import { getRealtorBySubdomain } from './airtable';
import { SiteContext, Realtor } from '@/types';
import { MAIN_CONTACT } from './constants';

export async function getSubdomain(): Promise<string | null> {
  const headersList = await headers();
  const subdomain = headersList.get('x-subdomain');

  // Also check for dev subdomain cookie in development
  if (!subdomain && process.env.NODE_ENV === 'development') {
    const cookieStore = await cookies();
    return cookieStore.get('dev_subdomain')?.value || null;
  }

  return subdomain;
}

export async function getSiteContext(): Promise<SiteContext> {
  const subdomain = await getSubdomain();

  // Default context for main site
  const defaultContext: SiteContext = {
    isPartnerPortal: false,
    mainContact: MAIN_CONTACT,
  };

  if (!subdomain) {
    return defaultContext;
  }

  // Look up realtor by subdomain
  try {
    const realtor = await getRealtorBySubdomain(subdomain);

    // If realtor not found or not approved, show main site
    if (!realtor || realtor.status !== 'Approved') {
      return defaultContext;
    }

    // Partner portal context
    return {
      isPartnerPortal: true,
      realtor,
      mainContact: {
        name: `${realtor.firstName} ${realtor.lastName}`,
        phone: realtor.phone,
        email: realtor.email,
        nmls: '', // Realtors don't have NMLS
        headshotUrl: realtor.headshotUrl,
        scheduleUrl: realtor.websiteUrl,
        preApprovedUrl: realtor.websiteUrl,
        applyUrl: realtor.websiteUrl,
      },
    };
  } catch (error) {
    console.error('Error fetching realtor for subdomain:', subdomain, error);
    return defaultContext;
  }
}

export async function getRealtorForRegistration(): Promise<{
  realtor: Realtor | null;
  subdomain: string | null;
}> {
  const subdomain = await getSubdomain();

  if (!subdomain) {
    return { realtor: null, subdomain: null };
  }

  try {
    const realtor = await getRealtorBySubdomain(subdomain);

    // Only return realtor if approved
    if (realtor && realtor.status === 'Approved') {
      return { realtor, subdomain };
    }

    return { realtor: null, subdomain };
  } catch (error) {
    console.error('Error fetching realtor for registration:', error);
    return { realtor: null, subdomain };
  }
}
