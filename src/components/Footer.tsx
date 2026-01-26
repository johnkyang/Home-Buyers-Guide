import Link from 'next/link';
import { POWERED_BY, SITE_CONTACT_EMAIL } from '@/lib/constants';

interface FooterProps {
  isPartnerPortal: boolean;
  realtorName?: string;
  realtorWebsite?: string;
}

export default function Footer({
  isPartnerPortal,
  realtorName,
  realtorWebsite,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#1E3A5F] font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold">HomeReadyCA</span>
            </div>
            <p className="text-gray-300 text-sm max-w-md">
              Your complete guide to buying a home in California. Free educational
              course covering everything from budgeting to closing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/course" className="hover:text-white">
                  Course Overview
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-white">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-white">
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONTACT_EMAIL}`}
                  className="hover:text-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partner Attribution */}
        {isPartnerPortal && realtorName && realtorWebsite && (
          <div className="mt-8 pt-8 border-t border-gray-600">
            <p className="text-center text-gray-300 text-sm">
              This course is brought to you by{' '}
              <a
                href={realtorWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4A853] hover:underline font-medium"
              >
                {realtorName}
              </a>
            </p>
          </div>
        )}

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-600 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} HomeReadyCA. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">{POWERED_BY}</p>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400 max-w-3xl mx-auto">
            This course provides general educational information only and does not
            constitute financial, legal, or real estate advice. Information may not
            reflect current rates, programs, or guidelines. Always verify with a
            licensed professional before making financial decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
