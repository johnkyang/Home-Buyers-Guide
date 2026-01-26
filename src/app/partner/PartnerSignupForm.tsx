'use client';

import { useState } from 'react';

export default function PartnerSignupForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState<{
    subdomain: string;
    message: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    licenseNumber: '',
    headshotUrl: '',
    websiteUrl: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(null);
    setLoading(true);

    try {
      const response = await fetch('/api/realtor/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.error || 'Application failed');
        return;
      }

      setSuccess({
        subdomain: data.data.subdomain,
        message: data.message,
      });

      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyName: '',
        licenseNumber: '',
        headshotUrl: '',
        websiteUrl: '',
      });
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
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
        </div>
        <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">
          Application Submitted!
        </h3>
        <p className="text-gray-600 mb-4">{success.message}</p>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Your portal URL (once approved):</p>
          <p className="text-[#1E3A5F] font-medium">
            {success.subdomain}.homereadyca.com
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="input"
            placeholder="John"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="input"
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="input"
          placeholder="john@realestate.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="input"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
          Company / Brokerage Name *
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          required
          value={formData.companyName}
          onChange={handleChange}
          className="input"
          placeholder="ABC Realty"
        />
      </div>

      <div>
        <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700 mb-1">
          Real Estate License # *
        </label>
        <input
          type="text"
          id="licenseNumber"
          name="licenseNumber"
          required
          value={formData.licenseNumber}
          onChange={handleChange}
          className="input"
          placeholder="DRE# 01234567"
        />
      </div>

      <div>
        <label htmlFor="headshotUrl" className="block text-sm font-medium text-gray-700 mb-1">
          Headshot URL *
        </label>
        <input
          type="url"
          id="headshotUrl"
          name="headshotUrl"
          required
          value={formData.headshotUrl}
          onChange={handleChange}
          className="input"
          placeholder="https://example.com/your-photo.jpg"
        />
        <p className="text-xs text-gray-500 mt-1">
          Direct link to your professional headshot image
        </p>
      </div>

      <div>
        <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700 mb-1">
          Website URL *
        </label>
        <input
          type="url"
          id="websiteUrl"
          name="websiteUrl"
          required
          value={formData.websiteUrl}
          onChange={handleChange}
          className="input"
          placeholder="https://www.yourwebsite.com"
        />
        <p className="text-xs text-gray-500 mt-1">
          Your personal or brokerage website
        </p>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>

      <p className="text-xs text-gray-500 text-center">
        By submitting, you agree to our partner terms. Your portal will be
        available at <span className="font-medium">yourlastname.homereadyca.com</span>{' '}
        once approved.
      </p>
    </form>
  );
}
