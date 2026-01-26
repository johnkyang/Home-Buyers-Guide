import PartnerSignupForm from './PartnerSignupForm';

export const metadata = {
  title: 'Become a Partner - HomeReadyCA',
  description: 'Join HomeReadyCA as a realtor partner and provide your clients with valuable homebuyer education.',
};

export default function PartnerPage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2d4a6f] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Become a Partner</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Get your own branded homebuyer education portal. Provide value to your
            clients while capturing leads and building trust.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1E3A5F] text-center mb-12">
            Why Partner With HomeReadyCA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Your Branded Portal',
                description:
                  'Get a custom subdomain (yourname.homereadyca.com) featuring your photo, contact info, and branding.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
              },
              {
                title: 'Lead Notifications',
                description:
                  'Get instant email notifications when someone registers through your portal with their contact information.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                ),
              },
              {
                title: 'Educated Clients',
                description:
                  'Clients who complete the course understand the process better, leading to smoother transactions.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
            ].map((benefit, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-[#1E3A5F]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1E3A5F]">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="py-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A5F]">Apply to Become a Partner</h2>
            <p className="text-gray-600 mt-2">
              Fill out the form below and we&apos;ll review your application. Once approved,
              your portal will be live within 24 hours.
            </p>
          </div>

          <div className="card">
            <PartnerSignupForm />
          </div>
        </div>
      </section>
    </div>
  );
}
