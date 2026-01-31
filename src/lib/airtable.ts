import { Realtor, Buyer, CourseProgress } from '@/types';

const AIRTABLE_API_URL = 'https://api.airtable.com/v0';

function getHeaders() {
  const token = process.env.AIRTABLE_API_TOKEN;
  if (!token) {
    throw new Error('AIRTABLE_API_TOKEN is not configured');
  }
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
}

function getBaseUrl() {
  const baseId = process.env.AIRTABLE_BASE_ID;
  if (!baseId) {
    throw new Error('AIRTABLE_BASE_ID is not configured');
  }
  return `${AIRTABLE_API_URL}/${baseId}`;
}

// ============ REALTOR FUNCTIONS ============

export async function getRealtorBySubdomain(subdomain: string): Promise<Realtor | null> {
  const tableId = process.env.REALTORS_TABLE_ID;
  if (!tableId) throw new Error('REALTORS_TABLE_ID is not configured');

  const filterFormula = encodeURIComponent(`{Subdomain} = '${subdomain}'`);
  const url = `${getBaseUrl()}/${tableId}?filterByFormula=${filterFormula}`;

  const response = await fetch(url, {
    headers: getHeaders(),
    next: { revalidate: 60 }, // Cache for 60 seconds
  });

  if (!response.ok) {
    console.error('Airtable error:', await response.text());
    return null;
  }

  const data = await response.json();
  if (!data.records || data.records.length === 0) {
    return null;
  }

  const record = data.records[0];
  return mapRealtorRecord(record);
}

export async function getRealtorById(id: string): Promise<Realtor | null> {
  const tableId = process.env.REALTORS_TABLE_ID;
  if (!tableId) throw new Error('REALTORS_TABLE_ID is not configured');

  const url = `${getBaseUrl()}/${tableId}/${id}`;

  const response = await fetch(url, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    return null;
  }

  const record = await response.json();
  return mapRealtorRecord(record);
}

export async function createRealtor(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  headshotUrl: string;
  websiteUrl: string;
  companyName: string;
  licenseNumber: string;
}): Promise<Realtor> {
  const tableId = process.env.REALTORS_TABLE_ID;
  if (!tableId) throw new Error('REALTORS_TABLE_ID is not configured');

  // Generate subdomain from last name
  let subdomain = generateSubdomain(data.lastName);

  // Check if subdomain exists, if so append first name
  const existing = await getRealtorBySubdomain(subdomain);
  if (existing) {
    subdomain = generateSubdomain(data.lastName, data.firstName);
  }

  const url = `${getBaseUrl()}/${tableId}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({
      fields: {
        'First Name': data.firstName,
        'Last Name': data.lastName,
        'Subdomain': subdomain,
        'Email': data.email,
        'Phone': data.phone,
        'Headshot URL': data.headshotUrl,
        'Website URL': data.websiteUrl,
        'Company Name': data.companyName,
        'License Number': data.licenseNumber,
        'Status': 'Pending',
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('Airtable create error:', error);
    throw new Error('Failed to create realtor record');
  }

  const record = await response.json();
  return mapRealtorRecord(record);
}

export async function checkSubdomainExists(subdomain: string): Promise<boolean> {
  const realtor = await getRealtorBySubdomain(subdomain);
  return realtor !== null;
}

function generateSubdomain(lastName: string, firstName?: string): string {
  const cleanLastName = lastName.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (firstName) {
    const cleanFirstName = firstName.toLowerCase().replace(/[^a-z0-9]/g, '');
    return `${cleanLastName}-${cleanFirstName}`;
  }
  return cleanLastName;
}

function mapRealtorRecord(record: { id: string; fields: Record<string, unknown> }): Realtor {
  return {
    id: record.id,
    firstName: (record.fields['First Name'] as string) || '',
    lastName: (record.fields['Last Name'] as string) || '',
    subdomain: (record.fields['Subdomain'] as string) || '',
    email: (record.fields['Email'] as string) || '',
    phone: (record.fields['Phone'] as string) || '',
    headshotUrl: (record.fields['Headshot URL'] as string) || '',
    websiteUrl: (record.fields['Website URL'] as string) || '',
    companyName: (record.fields['Company Name'] as string) || '',
    licenseNumber: (record.fields['License Number'] as string) || '',
    status: (record.fields['Status'] as Realtor['status']) || 'Pending',
    approvedAt: record.fields['Approved At'] as string | undefined,
  };
}

// ============ BUYER FUNCTIONS ============

export async function getBuyerByEmail(email: string): Promise<Buyer | null> {
  const tableId = process.env.BUYERS_TABLE_ID;
  if (!tableId) throw new Error('BUYERS_TABLE_ID is not configured');

  const filterFormula = encodeURIComponent(`{Email} = '${email}'`);
  const url = `${getBaseUrl()}/${tableId}?filterByFormula=${filterFormula}`;

  const response = await fetch(url, {
    headers: getHeaders(),
    cache: 'no-store',
  });

  if (!response.ok) {
    console.error('Airtable error:', await response.text());
    return null;
  }

  const data = await response.json();
  if (!data.records || data.records.length === 0) {
    return null;
  }

  const record = data.records[0];
  return mapBuyerRecord(record);
}

export async function getBuyerById(id: string): Promise<Buyer | null> {
  const tableId = process.env.BUYERS_TABLE_ID;
  if (!tableId) throw new Error('BUYERS_TABLE_ID is not configured');

  const url = `${getBaseUrl()}/${tableId}/${id}`;

  const response = await fetch(url, {
    headers: getHeaders(),
    cache: 'no-store',
  });

  if (!response.ok) {
    return null;
  }

  const record = await response.json();
  return mapBuyerRecord(record);
}

export async function createBuyer(data: {
  fullName: string;
  email: string;
  phone: string;
  passwordHash: string;
  source: 'Partner Subdomain' | 'Direct';
  subdomainCaptured?: string;
  referredRealtorId?: string;
  consentLanguageVersion: string;
}): Promise<Buyer> {
  const tableId = process.env.BUYERS_TABLE_ID;
  if (!tableId) throw new Error('BUYERS_TABLE_ID is not configured');

  const now = new Date().toISOString();

  const fields: Record<string, unknown> = {
    'Full Name': data.fullName,
    'Email': data.email,
    'Phone': data.phone,
    'Password Hash': data.passwordHash,
    'Source': data.source,
    'Registered At': now,
    'Consent Timestamp': now,
    'Consent Language Version': data.consentLanguageVersion,
    'Status': 'New',
    'Progress': JSON.stringify({ completedLessons: [] }),
  };

  if (data.subdomainCaptured) {
    fields['Subdomain Captured'] = data.subdomainCaptured;
  }

  if (data.referredRealtorId) {
    fields['Referred Realtor'] = [data.referredRealtorId];
  }

  const url = `${getBaseUrl()}/${tableId}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ fields }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('Airtable create buyer error:', error);
    throw new Error(`Failed to create buyer record: ${error}`);
  }

  const record = await response.json();
  return mapBuyerRecord(record);
}

export async function updateBuyerProgress(
  buyerId: string,
  progress: CourseProgress
): Promise<void> {
  const tableId = process.env.BUYERS_TABLE_ID;
  if (!tableId) throw new Error('BUYERS_TABLE_ID is not configured');

  const url = `${getBaseUrl()}/${tableId}/${buyerId}`;

  const response = await fetch(url, {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify({
      fields: {
        'Progress': JSON.stringify(progress),
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('Airtable update progress error:', error);
    throw new Error('Failed to update buyer progress');
  }
}

export async function updateBuyerStatus(
  buyerId: string,
  status: Buyer['status']
): Promise<void> {
  const tableId = process.env.BUYERS_TABLE_ID;
  if (!tableId) throw new Error('BUYERS_TABLE_ID is not configured');

  const url = `${getBaseUrl()}/${tableId}/${buyerId}`;

  const response = await fetch(url, {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify({
      fields: {
        'Status': status,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('Airtable update status error:', error);
    throw new Error('Failed to update buyer status');
  }
}

function mapBuyerRecord(record: { id: string; fields: Record<string, unknown> }): Buyer {
  let progress: CourseProgress = { completedLessons: [] };
  try {
    const progressStr = record.fields['Progress'] as string;
    if (progressStr) {
      progress = JSON.parse(progressStr);
    }
  } catch {
    // Use default empty progress
  }

  const referredRealtor = record.fields['Referred Realtor'] as string[] | undefined;

  return {
    id: record.id,
    fullName: (record.fields['Full Name'] as string) || '',
    email: (record.fields['Email'] as string) || '',
    phone: (record.fields['Phone'] as string) || '',
    passwordHash: (record.fields['Password Hash'] as string) || '',
    source: (record.fields['Source'] as Buyer['source']) || 'Direct',
    subdomainCaptured: record.fields['Subdomain Captured'] as string | undefined,
    referredRealtorId: referredRealtor?.[0],
    registeredAt: (record.fields['Registered At'] as string) || '',
    consentTimestamp: (record.fields['Consent Timestamp'] as string) || '',
    consentLanguageVersion: (record.fields['Consent Language Version'] as string) || '',
    status: (record.fields['Status'] as Buyer['status']) || 'New',
    progress,
  };
}
