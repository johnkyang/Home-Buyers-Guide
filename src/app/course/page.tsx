import Link from 'next/link';
import { getSession } from '@/lib/auth';
import { MODULES } from '@/lib/constants';

export const metadata = {
  title: 'Course Overview - HomeReadyCA',
  description: 'Complete California homebuyer education course covering budgeting, mortgages, DPA programs, and more.',
};

export default async function CoursePage() {
  const session = await getSession();

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-4">
            California Homebuyer Course
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive education program designed specifically for California
            homebuyers. Learn everything from budgeting to closing.
          </p>
          {!session && (
            <div className="mt-6">
              <Link href="/register" className="btn-primary text-lg px-8 py-3">
                Register for Free Access
              </Link>
            </div>
          )}
        </div>

        {/* Course Structure */}
        <div className="space-y-6">
          {MODULES.map((module, index) => (
            <div
              key={module.id}
              className="card hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#1E3A5F] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">{module.number}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-[#1E3A5F]">
                        {module.title}
                      </h2>
                      <p className="text-gray-600 mt-1">{module.description}</p>
                    </div>
                    {session ? (
                      <Link
                        href={`/course/${module.id}`}
                        className="btn-accent text-sm flex-shrink-0"
                      >
                        Start
                      </Link>
                    ) : (
                      <span className="text-sm text-gray-400">
                        Register to access
                      </span>
                    )}
                  </div>

                  {/* Module Topics Preview */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      What you&apos;ll learn:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {getModuleTopics(module.id).map((topic, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <svg
                            className="w-4 h-4 text-[#2AA89A] mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Connection Line (except last) */}
              {index < MODULES.length - 1 && (
                <div className="flex justify-center mt-4">
                  <div className="w-0.5 h-8 bg-gray-200" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        {!session && (
          <div className="mt-12 text-center">
            <div className="card bg-[#1E3A5F] text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-200 mb-6">
                Create your free account and get instant access to all course
                materials. Track your progress and learn at your own pace.
              </p>
              <Link href="/register" className="btn-secondary text-lg px-8 py-3">
                Create Free Account
              </Link>
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
