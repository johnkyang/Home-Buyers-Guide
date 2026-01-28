import Link from 'next/link';
import Image from 'next/image';
import { getSiteContext } from '@/lib/subdomain';
import { MODULES } from '@/lib/constants';
import {
  Compass,
  BarChart3,
  ShieldCheck,
  FolderOpen,
  Umbrella,
  Search,
  ClipboardList,
  FileText,
  Home,
  PenTool,
} from 'lucide-react';

// Icon mapping for each module
const moduleIconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  'start-here': Compass,
  'budget-buying-power': BarChart3,
  'mortgage-basics': ShieldCheck,
  'documents-underwriting': FolderOpen,
  'down-payment-assistance': Umbrella,
  'home-search-offers': Search,
  'escrow-process': ClipboardList,
  'inspections-negotiation': Home,
  'insurance': FileText,
  'closing-first-30-days': PenTool,
};

export default async function HomePage() {
  const siteContext = await getSiteContext();
  const { isPartnerPortal, realtor, mainContact } = siteContext;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background gradients */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#D4A853]/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#10B981]/10 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A853]/10 text-[#D4A853] font-semibold text-xs tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-[#D4A853] animate-pulse" />
                Trusted by California Homebuyers
              </div>

              {/* Partner Attribution */}
              {isPartnerPortal && realtor && (
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  {realtor.headshotUrl ? (
                    <Image
                      src={realtor.headshotUrl}
                      alt={`${realtor.firstName} ${realtor.lastName}`}
                      width={56}
                      height={56}
                      className="rounded-xl border-2 border-[#D4A853]"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-xl bg-[#1E3A5F] flex items-center justify-center text-white font-bold text-xl">
                      {realtor.firstName[0]}
                      {realtor.lastName[0]}
                    </div>
                  )}
                  <div>
                    <p className="text-[#D4A853] font-medium text-sm">Presented by</p>
                    <p className="text-xl font-bold text-[#1E3A5F]">
                      {realtor.firstName} {realtor.lastName}
                    </p>
                    <p className="text-sm text-slate-500">{realtor.companyName}</p>
                  </div>
                </div>
              )}

              {/* Headline */}
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                Your Complete Guide to Buying a Home in{' '}
                <br className="hidden lg:block" />
                <span className="text-[#D4A853] italic font-medium">California.</span>
              </h1>

              {/* Description */}
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                A premium educational masterclass designed for first-time buyers.
                Navigate budgets, mortgages, and DPA programs with expert precision.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/register"
                  className="bg-[#D4A853] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-[#D4A853]/20"
                >
                  Start Free Course
                </Link>
                <Link
                  href="/course"
                  className="bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg border border-slate-200 hover:bg-white transition-all"
                >
                  View Curriculum
                </Link>
              </div>
            </div>

            {/* Right Content - Advisor Card */}
            <div className="relative">
              <div className="glass-card wallet-shadow rounded-3xl overflow-hidden max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
                <div className="flex flex-col">
                  {/* Advisor Header */}
                  <div className="p-8 flex items-center gap-6">
                    <div className="relative">
                      {mainContact.headshotUrl ? (
                        <Image
                          src={mainContact.headshotUrl}
                          alt={mainContact.name}
                          width={96}
                          height={96}
                          className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-lg"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-2xl bg-[#1E3A5F] flex items-center justify-center text-white text-3xl font-bold border-4 border-white shadow-lg">
                          JY
                        </div>
                      )}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#10B981] border-4 border-white rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#1E3A5F]">
                        {mainContact.name}
                      </h3>
                      <p className="text-sm text-slate-500 font-medium">
                        Mortgage Advisor
                      </p>
                      <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">
                        NMLS #{mainContact.nmls}
                      </p>
                    </div>
                  </div>

                  {/* Quote + CTAs */}
                  <div className="p-8 pt-0 space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed italic">
                      &quot;Ready to help you navigate your California home purchase
                      with transparency and expert guidance.&quot;
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={mainContact.scheduleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#10B981] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        Schedule Call
                      </a>
                      <a
                        href={mainContact.applyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1E3A5F] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                      >
                        Apply Now
                      </a>
                    </div>
                    <a
                      href={mainContact.preApprovedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full border border-slate-200 text-slate-600 font-bold py-3 rounded-xl hover:bg-slate-50 transition-colors block text-center"
                    >
                      Get Pre-Approved
                    </a>
                  </div>

                  {/* Gradient bar */}
                  <div className="h-2 bg-gradient-to-r from-[#D4A853] via-[#10B981] to-[#1E3A5F]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-slate-200 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold text-[#1E3A5F]">10</div>
              <div className="text-slate-500 font-medium uppercase tracking-widest text-xs">
                Expert Modules
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-[#1E3A5F]">30+</div>
              <div className="text-slate-500 font-medium uppercase tracking-widest text-xs">
                Lessons
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-[#1E3A5F]">100%</div>
              <div className="text-slate-500 font-medium uppercase tracking-widest text-xs">
                Free Access
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-[#1E3A5F]">CA</div>
              <div className="text-slate-500 font-medium uppercase tracking-widest text-xs">
                Market Focused
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules Section - Redesigned with Premium Icons */}
      <section className="py-24 bg-[#F0F2F5]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#1E3A5F] font-semibold tracking-wide mb-2">HomeReadyCA</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] italic">
              Course Curriculum
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              A comprehensive journey through the California homebuying process,
              from understanding your budget to getting your keys.
            </p>
          </div>

          {/* Module Grid - Matching Reference Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MODULES.map((module) => {
              const Icon = moduleIconMap[module.id] || Compass;
              return (
                <Link
                  key={module.id}
                  href={`/course/${module.id}`}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
                >
                  {/* Icon + Badge Container */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-[#FDFAF3] flex items-center justify-center flex-shrink-0">
                      <Icon
                        className="w-8 h-8 text-[#D4AF37]"
                        strokeWidth={1.5}
                      />
                    </div>
                    {/* Number Badge */}
                    <div className="w-6 h-6 rounded-full bg-[#1E3A5F] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">{module.number}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[#1E3A5F] text-lg leading-tight mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {module.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {module.description}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <Link
              href="/register"
              className="inline-block bg-[#1E3A5F] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-[#152d4a] transition-colors shadow-lg"
            >
              Start Learning Now
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1E3A5F] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D4A853] opacity-10 blur-[120px] rounded-full translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
            {isPartnerPortal && realtor
              ? `Join the course and work with ${realtor.firstName} ${realtor.lastName} to make your homeownership dreams a reality.`
              : 'Join thousands of Californians who have mastered the home buying process. Register for free and get instant access to all modules.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/register"
              className="bg-[#D4A853] text-white px-10 py-5 rounded-xl font-bold text-lg hover:brightness-110 transition-all"
            >
              Create Free Account
            </Link>
            {isPartnerPortal && realtor ? (
              <a
                href={realtor.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                Visit {realtor.firstName}&apos;s Website
              </a>
            ) : (
              <a
                href={mainContact.scheduleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                Schedule Advisor Call
              </a>
            )}
          </div>
        </div>
      </section>

      {/* John Yang Section (Main Site Only) */}
      {!isPartnerPortal && (
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-[#F9FAFB] rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-10 shadow-2xl shadow-[#1E3A5F]/5">
              {mainContact.headshotUrl ? (
                <Image
                  src={mainContact.headshotUrl}
                  alt={mainContact.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full object-cover shrink-0"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-[#1E3A5F] flex items-center justify-center text-4xl font-bold text-white shrink-0">
                  JY
                </div>
              )}
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-extrabold text-slate-900">
                  {mainContact.name}
                </h2>
                <p className="text-[#D4A853] font-bold tracking-widest uppercase text-xs mt-1 mb-4">
                  NMLS #{mainContact.nmls}
                </p>
                <p className="text-lg text-slate-600 mb-8">
                  &quot;Ready to help you navigate your California home purchase.
                  Whether you&apos;re a first-time buyer or looking for down payment
                  assistance, I&apos;m here to guide you every step of the way.&quot;
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a
                    href={mainContact.scheduleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1E3A5F] text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
                  >
                    Schedule Call
                  </a>
                  <a
                    href={mainContact.preApprovedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#10B981] text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
                  >
                    Get Pre-Approved
                  </a>
                  <a
                    href={mainContact.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
