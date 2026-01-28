'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Logo from './Logo';

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

  // Get initials from name
  const initials = contactName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo size="md" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="/course"
            className="text-sm font-medium text-slate-600 hover:text-[#D4A853] transition-colors"
          >
            Course
          </Link>
          {isPartnerPortal && (
            <Link
              href="/about"
              className="text-sm font-medium text-slate-600 hover:text-[#D4A853] transition-colors"
            >
              About Your Agent
            </Link>
          )}
          {isLoggedIn ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm font-medium text-slate-600 hover:text-[#D4A853] transition-colors"
              >
                My Progress
              </Link>
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-500">
                  Hi, {userName?.split(' ')[0]}
                </span>
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
                className="text-sm font-medium text-slate-600 hover:text-[#D4A853] transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-[#1E3A5F] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all"
              >
                Get Started
              </Link>
            </>
          )}
        </nav>

        {/* Advisor Info + CTA (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="h-6 w-px bg-slate-200" />
          <div className="flex items-center gap-3">
            {headshotUrl ? (
              <Image
                src={headshotUrl}
                alt={contactName}
                width={40}
                height={40}
                className="rounded-full object-cover border-2 border-white shadow-md"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center border-2 border-white shadow-md">
                <span className="text-xs font-bold text-white">{initials}</span>
              </div>
            )}
            <div className="text-xs">
              <p className="font-bold text-[#1E3A5F]">{contactName}</p>
              {nmls && <p className="text-slate-400">NMLS #{nmls}</p>}
            </div>
          </div>
          <a
            href={scheduleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#10B981] hover:bg-[#10B981]/90 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all"
          >
            Schedule Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-slate-600"
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
        <div className="md:hidden py-4 px-6 border-t border-slate-200 bg-white">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/course"
              className="text-slate-600 hover:text-[#1E3A5F] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Course
            </Link>
            {isPartnerPortal && (
              <Link
                href="/about"
                className="text-slate-600 hover:text-[#1E3A5F] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Your Agent
              </Link>
            )}
            {isLoggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-slate-600 hover:text-[#1E3A5F] font-medium"
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
                  className="text-slate-600 hover:text-[#1E3A5F] font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-[#1E3A5F] text-white px-6 py-3 rounded-lg font-semibold text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </nav>

          {/* Contact Info (Mobile) */}
          <div className="mt-6 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-3">
              {headshotUrl ? (
                <Image
                  src={headshotUrl}
                  alt={contactName}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-[#1E3A5F] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">{initials}</span>
                </div>
              )}
              <div>
                <p className="font-semibold text-[#1E3A5F]">{contactName}</p>
                <p className="text-sm text-slate-500">{contactPhone}</p>
                {nmls && <p className="text-xs text-slate-400">NMLS #{nmls}</p>}
              </div>
            </div>
            <a
              href={scheduleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block bg-[#10B981] text-white px-6 py-3 rounded-lg font-semibold text-center"
            >
              Schedule Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
