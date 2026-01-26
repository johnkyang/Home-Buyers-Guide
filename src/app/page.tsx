import Link from 'next/link';
import Image from 'next/image';
import { getSiteContext } from '@/lib/subdomain';
import { MODULES } from '@/lib/constants';

export default async function HomePage() {
  const siteContext = await getSiteContext();
  const { isPartnerPortal, realtor, mainContact } = siteContext;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2d4a6f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {isPartnerPortal && realtor && (
                <div className="mb-6 flex items-center space-x-3">
                  {realtor.headshotUrl && (
                    <Image
                      src={realtor.headshotUrl}
                      alt={`${realtor.firstName} ${realtor.lastName}`}
                      width={56}
                      height={56}
                      className="rounded-full border-2 border-[#D4A853]"
                    />
                  )}
                  <div>
                    <p className="text-[#D4A853] font-medium">Presented by</p>
                    <p className="text-xl font-semibold">
                      {realtor.firstName} {realtor.lastName}
                    </p>
                    <p className="text-sm text-gray-300">{realtor.companyName}</p>
                  </div>
                </div>
              )}

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Your Complete Guide to Buying a Home in{' '}
                <span className="text-[#D4A853]">California</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Free educational course designed for California homebuyers. Learn
                about budgets, mortgages, down payment assistance programs, and
                navigate the entire home buying process with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="btn-secondary text-center text-lg px-8 py-4"
                >
                  Start Free Course
                </Link>
                <Link
                  href="/course"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors"
                >
                  View Course Outline
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6">What You&apos;ll Learn</h3>
                <ul className="space-y-4">
                  {[
                    'Understanding your true buying power',
                    'California-specific mortgage options',
                    'Down payment assistance programs',
                    'Making competitive offers',
                    'Navigating escrow and closing',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg
                        className="w-6 h-6 text-[#2AA89A] flex-shrink-0 mt-0.5"
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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10', label: 'Modules' },
              { number: '30+', label: 'Lessons' },
              { number: '100%', label: 'Free' },
              { number: 'CA', label: 'Focused' },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-3xl md:text-4xl font-bold text-[#1E3A5F]">
                  {stat.number}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Course Curriculum
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive journey through the California homebuying process,
              from understanding your budget to getting your keys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((module) => (
              <div
                key={module.id}
                className="card hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">{module.number}</span>
                  </div>
                  <h3 className="font-semibold text-[#1E3A5F]">{module.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{module.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/register" className="btn-primary text-lg px-8 py-4">
              Start Learning Now
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1E3A5F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Homebuying Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            {isPartnerPortal && realtor
              ? `Join the course and work with ${realtor.firstName} ${realtor.lastName} to make your homeownership dreams a reality.`
              : 'Register for free and get instant access to all modules. Track your progress and learn at your own pace.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="btn-secondary text-lg px-8 py-4"
            >
              Create Free Account
            </Link>
            {isPartnerPortal && realtor ? (
              <a
                href={realtor.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors"
              >
                Visit {realtor.firstName}&apos;s Website
              </a>
            ) : (
              <a
                href={mainContact.scheduleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors"
              >
                Schedule a Call
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section for Main Site */}
      {!isPartnerPortal && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card bg-gray-50 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-[#1E3A5F] rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">JY</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">
                  {mainContact.name}
                </h3>
                <p className="text-gray-600 mb-1">NMLS #{mainContact.nmls}</p>
                <p className="text-gray-600 mb-4">
                  Ready to help you navigate your California home purchase.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <a
                    href={mainContact.scheduleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    Schedule Call
                  </a>
                  <a
                    href={mainContact.preApprovedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent text-sm"
                  >
                    Get Pre-Approved
                  </a>
                  <a
                    href={mainContact.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
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
