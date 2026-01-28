import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import { getSubdomain } from '@/lib/subdomain';
import RegisterForm from './RegisterForm';

export const metadata = {
  title: 'Create Account - HomeReadyCA',
  description: 'Register for free access to the California homebuyer education course.',
};

export default async function RegisterPage() {
  // Redirect if already logged in
  const session = await getSession();
  if (session) {
    redirect('/dashboard');
  }

  const subdomain = await getSubdomain();

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-6">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A853]/10 text-[#D4A853] font-semibold text-xs tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D4A853] animate-pulse" />
            100% Free Access
          </div>
          <h1 className="text-3xl font-bold text-[#1E3A5F]">Create Your Account</h1>
          <p className="mt-2 text-slate-600">
            Get free access to the complete California homebuyer course
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <RegisterForm subdomain={subdomain} />
        </div>

        {/* Footer */}
        <p className="text-center mt-6 text-sm text-slate-600">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-[#D4A853] font-semibold hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
