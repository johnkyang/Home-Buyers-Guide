// Main site contact information (John Yang)
export const MAIN_CONTACT = {
  name: 'John Yang',
  phone: '(818) 445-6354',
  email: 'jyang@loandepot.com',
  nmls: '242839',
  headshotUrl: '/john-yang-headshot.png',
  scheduleUrl: process.env.MAIN_SCHEDULE_URL || 'https://calendly.com/thejohnyangteam/30min',
  preApprovedUrl: process.env.MAIN_PREAPPROVED_URL || 'https://www.loandepot.com/jyang',
  applyUrl: process.env.MAIN_APPLY_URL || 'https://www.loandepot.com/jyang',
};

// Site metadata
export const SITE_NAME = 'HomeReadyCA';
export const SITE_DESCRIPTION = 'Your complete guide to buying a home in California';
export const SITE_CONTACT_EMAIL = 'admin@homereadyca.com';

// Footer branding
export const POWERED_BY = 'Powered by Kailei Media';

// Consent language
export const CONSENT_VERSION = 'v1.0';
export const CONSENT_TEXT = `I agree to the Terms of Service and Privacy Policy. By checking this box, I acknowledge and consent to the following:

• This course provides general educational information only and does not constitute financial, legal, or real estate advice.
• I consent to receive calls, text messages, and emails from HomeReadyCA.com and my affiliated real estate professional (if applicable) for educational purposes and follow-up.
• My registration information may be shared with my referring real estate professional.`;

// Course structure
export const MODULES = [
  { number: 0, id: 'start-here', title: 'Start Here', description: 'Your 7-day action plan to get started' },
  { number: 1, id: 'budget-buying-power', title: 'Budget + Buying Power', description: 'Understanding your true buying capacity' },
  { number: 2, id: 'mortgage-basics', title: 'Mortgage Basics (CA)', description: 'California-specific loan options explained' },
  { number: 3, id: 'documents-underwriting', title: 'Documents + Underwriting', description: 'Getting your paperwork ready' },
  { number: 4, id: 'down-payment-assistance', title: 'Down Payment Assistance', description: 'California DPA programs and eligibility' },
  { number: 5, id: 'home-search-offers', title: 'Home Search + Offer Strategy', description: 'Finding and winning your dream home' },
  { number: 6, id: 'escrow-process', title: 'Escrow Process', description: 'Navigating from contract to close' },
  { number: 7, id: 'inspections-negotiation', title: 'Inspections + Negotiation', description: 'Protecting your investment' },
  { number: 8, id: 'insurance', title: 'Insurance (CA)', description: 'California homeowners insurance essentials' },
  { number: 9, id: 'closing-first-30-days', title: 'Closing + First 30 Days', description: 'Final steps and new homeowner checklist' },
];

// Password requirements
export const PASSWORD_MIN_LENGTH = 8;

// Root domain for subdomain detection
export const ROOT_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'homereadyca.com';
