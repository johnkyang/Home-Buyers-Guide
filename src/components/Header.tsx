'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface HeaderProps {
  isPartnerPortal: boolean;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  headshotUrl?: string;
  scheduleUrl: string;
  nmls?: string;
  isLoggedIn?: boolean;
  userName?: string;
}

export default function Header({
  isPartnerPortal,
  contactName,
  contactPhone,
  contactEmail,
  headshotUrl,
  scheduleUrl,
  nmls,
  isLoggedIn = false,
  userName,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-bold text-[#1E3A5F]">HomeReadyCA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/course" className="text-gray-600 hover:text-[#1E3A5F] font-medium">
              Course
            </Link>
            {isPartnerPortal && (
              <Link href="/about" className="text-gray-600 hover:text-[#1E3A5F] font-medium">
                About Your Agent
              </Link>
            )}
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className="text-gray-600 hover:text-[#1E3A5F] font-medium">
                  My Progress
                </Link>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-500">Hi, {userName?.split(' ')[0]}</span>
                  <Link
                    href="/api/auth/logout"
                    className="text-sm text-[#1E3A5F] hover:underline"
                  >
                    Logout
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-[#1E3A5F] font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="btn-primary text-sm"
                >
                  Get Started
                </Link>
              </>
            )}
          </nav>

          {/* Contact Info (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            {headshotUrl && (
              <Image
                src={headshotUrl}
                alt={contactName}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            )}
            <div className="text-right">
              <p className="text-sm font-semibold text-[#1E3A5F]">{contactName}</p>
              <p className="text-xs text-gray-500">{contactPhone}</p>
              {nmls && <p className="text-xs text-gray-400">NMLS #{nmls}</p>}
            </div>
            <a
              href={scheduleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-sm"
            >
              {isPartnerPortal ? 'Contact' : 'Schedule Call'}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/course"
                className="text-gray-600 hover:text-[#1E3A5F] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Course
              </Link>
              {isPartnerPortal && (
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-[#1E3A5F] font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Your Agent
                </Link>
              )}
              {isLoggedIn ? (
                <>
                  <Link
                    href="/dashboard"
                    className="text-gray-600 hover:text-[#1E3A5F] font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    My Progress
                  </Link>
                  <Link
                    href="/api/auth/logout"
                    className="text-[#1E3A5F] font-medium"
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-gray-600 hover:text-[#1E3A5F] font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="btn-primary text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </nav>

            {/* Contact Info (Mobile) */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                {headshotUrl && (
                  <Image
                    src={headshotUrl}
                    alt={contactName}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold text-[#1E3A5F]">{contactName}</p>
                  <p className="text-sm text-gray-500">{contactPhone}</p>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-sm text-[#2AA89A]"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
