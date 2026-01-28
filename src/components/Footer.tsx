import Link from 'next/link';
import { POWERED_BY, SITE_CONTACT_EMAIL, MAIN_CONTACT } from '@/lib/constants';

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
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#1E3A5F] rounded flex items-center justify-center text-white font-bold text-sm">
                H
              </div>
              <span className="text-lg font-bold tracking-tight text-[#1E3A5F] uppercase">
                HomeReadyCA
              </span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Your premium guide to navigating the California housing market.
              Education first, transparency always.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-slate-900">Quick Links</h4>
            <ul className="space-y-4 text-slate-500">
              <li>
                <Link
                  href="/course"
                  className="hover:text-[#D4A853] transition-colors"
                >
                  Course Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="hover:text-[#D4A853] transition-colors"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-[#D4A853] transition-colors"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  className="hover:text-[#D4A853] transition-colors"
                >
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-6 text-slate-900">Legal</h4>
            <ul className="space-y-4 text-slate-500">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#D4A853] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#D4A853] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONTACT_EMAIL}`}
                  className="hover:text-[#D4A853] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partner Attribution */}
        {isPartnerPortal && realtorName && realtorWebsite && (
          <div className="mb-10 pb-10 border-b border-slate-100">
            <p className="text-center text-slate-500 text-sm">
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
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} HomeReadyCA. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm text-slate-400">
            <span>NMLS #{MAIN_CONTACT.nmls}</span>
            <span className="text-slate-200">|</span>
            <span>Equal Housing Opportunity</span>
            <span className="text-slate-200">|</span>
            <span>{POWERED_BY}</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-[10px] text-slate-400 leading-relaxed text-center max-w-4xl mx-auto">
          This course provides general educational information only and does not
          constitute financial, legal, or real estate advice. Information may not
          reflect current rates, programs, or guidelines. Always verify with a
          licensed professional before making financial decisions.
        </div>
      </div>
    </footer>
  );
}
