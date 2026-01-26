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
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#1E3A5F]">Create Your Account</h1>
          <p className="mt-2 text-gray-600">
            Get free access to the complete California homebuyer course
          </p>
        </div>

        <div className="card">
          <RegisterForm subdomain={subdomain} />
        </div>

        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-[#1E3A5F] font-medium hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
