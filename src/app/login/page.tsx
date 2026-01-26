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
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#1E3A5F]">Welcome Back</h1>
          <p className="mt-2 text-gray-600">
            Sign in to continue your homebuying journey
          </p>
        </div>

        <div className="card">
          <LoginForm />
        </div>

        <p className="text-center mt-6 text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <a href="/register" className="text-[#1E3A5F] font-medium hover:underline">
            Create one for free
          </a>
        </p>
      </div>
    </div>
  );
}
