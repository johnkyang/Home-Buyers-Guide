// Realtor types
export interface Realtor {
  id: string;
  firstName: string;
  lastName: string;
  subdomain: string;
  email: string;
  phone: string;
  headshotUrl: string;
  websiteUrl: string;
  companyName: string;
  licenseNumber: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  approvedAt?: string;
}

export interface RealtorFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  headshotUrl: string;
  websiteUrl: string;
  companyName: string;
  licenseNumber: string;
}

// Buyer types
export interface Buyer {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  passwordHash: string;
  source: 'Partner Subdomain' | 'Direct';
  subdomainCaptured?: string;
  referredRealtorId?: string;
  registeredAt: string;
  consentTimestamp: string;
  consentLanguageVersion: string;
  status: 'New' | 'Active' | 'Completed';
  progress: CourseProgress;
}

export interface BuyerRegistrationData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  consent: boolean;
}

// Course types
export interface CourseProgress {
  completedLessons: string[];
  lastLessonId?: string;
  lastAccessedAt?: string;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  moduleId: string;
  number: number;
  title: string;
  slug: string;
  content: string;
  worksheetPlaceholder?: boolean;
}

// Site context types
export interface SiteContext {
  isPartnerPortal: boolean;
  realtor?: Realtor;
  mainContact: {
    name: string;
    phone: string;
    email: string;
    nmls: string;
    headshotUrl?: string;
    scheduleUrl: string;
    preApprovedUrl: string;
    applyUrl: string;
  };
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

// Session types
export interface SessionUser {
  id: string;
  email: string;
  fullName: string;
}

export interface Session {
  user: SessionUser;
  expires: string;
}
