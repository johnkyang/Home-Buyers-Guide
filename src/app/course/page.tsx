import Link from 'next/link';
import { getSession } from '@/lib/auth';
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

export const metadata = {
  title: 'Course Overview - HomeReadyCA',
  description: 'Complete California homebuyer education course covering budgeting, mortgages, DPA programs, and more.',
};

export default async function CoursePage() {
  const session = await getSession();

  return (
    <div className="py-20 bg-[#F0F2F5] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#1E3A5F] font-semibold tracking-wide mb-2">HomeReadyCA</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] italic mb-4">
            Course Curriculum
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            A comprehensive education program designed specifically for California
            homebuyers. Learn everything from budgeting to closing.
          </p>
          {!session && (
            <div className="pt-6">
              <Link
                href="/register"
                className="inline-block bg-[#D4A853] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-all shadow-xl shadow-[#D4A853]/20"
              >
                Register for Free Access
              </Link>
            </div>
          )}
        </div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((module) => {
            const Icon = moduleIconMap[module.id] || Compass;
            return (
              <div
                key={module.id}
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
                <h3 className="font-bold text-[#1E3A5F] text-lg leading-tight mb-2">
                  {module.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {module.description}
                </p>

                {/* Topics */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Topics covered:
                  </p>
                  <ul className="space-y-2">
                    {getModuleTopics(module.id).map((topic, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-slate-600"
                      >
                        <svg
                          className="w-4 h-4 text-[#D4AF37] mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  {session ? (
                    <Link
                      href={`/course/${module.id}`}
                      className="inline-flex items-center text-[#1E3A5F] font-semibold text-sm group-hover:text-[#D4AF37] transition-colors"
                    >
                      Start Module
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  ) : (
                    <span className="text-sm text-slate-400">
                      Register to access
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        {!session && (
          <div className="mt-16">
            <div className="bg-[#1E3A5F] rounded-3xl p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D4A853] opacity-10 blur-[100px] rounded-full translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-slate-300 mb-8 max-w-lg mx-auto">
                  Create your free account and get instant access to all course
                  materials. Track your progress and learn at your own pace.
                </p>
                <Link
                  href="/register"
                  className="inline-block bg-[#D4A853] text-white px-10 py-5 rounded-full font-bold text-lg hover:brightness-110 transition-all"
                >
                  Create Free Account
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function getModuleTopics(moduleId: string): string[] {
  const topics: Record<string, string[]> = {
    'start-here': [
      'Your first steps as a homebuyer',
      '7-day action plan',
      'Understanding the timeline',
    ],
    'budget-buying-power': [
      'PITI and monthly payments',
      'Comfort budget vs max approval',
      'True cost of homeownership',
    ],
    'mortgage-basics': [
      'Conventional, FHA, and VA loans',
      'Interest rates vs APR',
      'Reading a loan estimate',
    ],
    'documents-underwriting': [
      'Income documentation',
      'Asset verification',
      'Gift funds requirements',
    ],
    'down-payment-assistance': [
      'California DPA programs',
      'Eligibility requirements',
      'Application process',
    ],
    'home-search-offers': [
      'Defining your needs and wants',
      'Writing competitive offers',
      'Contingencies explained',
    ],
    'escrow-process': [
      'Earnest money deposits',
      'Wire fraud prevention',
      'Rate lock strategies',
    ],
    'inspections-negotiation': [
      'Types of inspections',
      'Repair negotiations',
      'Credit vs repairs',
    ],
    'insurance': [
      'California insurance basics',
      'Shopping for quotes',
      'What lenders require',
    ],
    'closing-first-30-days': [
      'Closing disclosure review',
      'Final walkthrough',
      'New homeowner setup',
    ],
  };
  return topics[moduleId] || [];
}
