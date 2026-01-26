export const metadata = {
  title: 'Terms of Service - HomeReadyCA',
  description: 'Terms of Service for HomeReadyCA California homebuyer education platform.',
};

export default function TermsPage() {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: January 2026 — v1.0</p>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Welcome to <strong>HomeReadyCA.com</strong>. By creating an account or using
            this platform, you agree to these terms.
          </p>

          <h2 className="text-xl font-semibold text-[#1E3A5F] mt-8 mb-4">
            1. Educational Purpose Only
          </h2>
          <p>
            This course provides <strong>general educational information</strong> about
            the California homebuying process. It does <strong>not</strong> constitute:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Financial advice</li>
            <li>Legal advice</li>
            <li>Real estate advice</li>
            <li>Mortgage lending advice</li>
          </ul>
          <p className="mt-4">
            All information is for educational purposes only. Rates, programs, guidelines,
            and requirements change frequently.{' '}
            <strong>Always verify information with a licensed professional</strong> before
            making financial decisions.
          </p>

          <h2 className="text-xl font-semibold text-[#1E3A5F] mt-8 mb-4">
            2. No Professional Relationship
          </h2>
          <p>
            Using this course does not create a client relationship with HomeReadyCA.com,
            any mortgage lender, or any real estate professional unless you separately
            engage their services.
          </p>

          <h2 className="text-xl font-semibold text-[#1E3A5F] mt-8 mb-4">
            3. Accuracy of Information
          </h2>
          <p>
            While we strive to provide accurate, up-to-date information, we make no
            warranties about the completeness, accuracy, or reliability of any content.
            You use this information at your own risk.
          </p>

          <h2 className="text-xl font-semibold text-[#1E3A5F] mt-8 mb-4">
            4. Account Responsibility
          </h2>
          <p>
            You are responsible for maintaining the confidentiality of your account
            credentials and for all activity under your account. You agree to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Provide accurate registration information</li>
            <li>Keep your password secure</li>
            <li>Notify us immediately of any unauthorized access</li>
            <li>Not share your account with others</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#1E3A5F] mt-8 mb-4">
            5. Communication Consent
          </h2>
          <p>
            By registering, you consent to receive calls, text messages, and emails from
            HomeReadyCA.com and your affiliated real estate professional (if applicable)
            for educational purposes and follow-up related to your homebuying journey.
          </p>

          <h2 className="text-xl font-semibold text-[#1E3A5F] mt-8 mb-4">
            6. Information Sharing
          </h2>
          <p>
            By registering, you consent to sharing your registration information (name,
            email, phone) with your referring real estate professional, if applicable.
            See our Privacy Policy for complete details.
          </p>

          <h2 className="text-xl font-semibold text-[#1E3A5F] mt-8 mb-4">
            7. Intellectual Property
          </h2>
          <p>
            All course content, including text, graphics, and design, is the property of
            HomeReadyCA.com and is protected by copyright laws. You may not reproduce,
            distribute, or create derivative works without permission.
          </p>

          <h2 className="text-xl font-semibold text-[#1E3A5F] mt-8 mb-4">
            8. Limitation of Liability
          </h2>
          <p>
            HomeReadyCA.com shall not be liable for any damages arising from your use of
            this platform or reliance on information provided. This includes direct,
            indirect, incidental, consequential, or punitive damages.
          </p>

          <h2 className="text-xl font-semibold text-[#1E3A5F] mt-8 mb-4">
            9. Modifications
          </h2>
          <p>
            We may update these terms at any time. Continued use of the platform
            constitutes acceptance of updated terms. We will notify you of significant
            changes via email.
          </p>

          <h2 className="text-xl font-semibold text-[#1E3A5F] mt-8 mb-4">
            10. Governing Law
          </h2>
          <p>
            These terms are governed by the laws of the State of California. Any disputes
            shall be resolved in the courts of California.
          </p>

          <h2 className="text-xl font-semibold text-[#1E3A5F] mt-8 mb-4">Contact</h2>
          <p>
            Questions about these Terms of Service? Contact us at:{' '}
            <a
              href="mailto:admin@homereadyca.com"
              className="text-[#2AA89A] hover:underline"
            >
              admin@homereadyca.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
