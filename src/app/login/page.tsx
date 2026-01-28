import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import LoginForm from './LoginForm';

export const metadata = {
  title: 'Sign In - HomeReadyCA',
  description: 'Sign in to continue your California homebuyer education course.',
};

export default async function LoginPage() {
  // Redirect if already logged in
  const session = await getSession();
  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-6">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A853]/10 text-[#D4A853] font-semibold text-xs tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D4A853] animate-pulse" />
            Continue Learning
          </div>
          <h1 className="text-3xl font-bold text-[#1E3A5F]">Welcome Back</h1>
          <p className="mt-2 text-slate-600">
            Sign in to continue your homebuying journey
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <LoginForm />
        </div>

        {/* Footer */}
        <p className="text-center mt-6 text-sm text-slate-600">
          Don&apos;t have an account?{' '}
          <a
            href="/register"
            className="text-[#D4A853] font-semibold hover:underline"
          >
            Create one for free
          </a>
        </p>
      </div>
    </div>
  );
}
