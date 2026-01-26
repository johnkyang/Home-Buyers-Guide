import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getSiteContext } from '@/lib/subdomain';
import { getSession } from '@/lib/auth';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'HomeReadyCA - California Homebuyer Education Course',
  description:
    'Your complete guide to buying a home in California. Free educational course covering budgeting, mortgages, down payment assistance, and more.',
  keywords: [
    'California homebuyer course',
    'first time homebuyer',
    'down payment assistance',
    'California real estate',
    'homebuyer education',
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteContext = await getSiteContext();
  const session = await getSession();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header
          isPartnerPortal={siteContext.isPartnerPortal}
          contactName={siteContext.mainContact.name}
          contactPhone={siteContext.mainContact.phone}
          contactEmail={siteContext.mainContact.email}
          headshotUrl={siteContext.mainContact.headshotUrl}
          scheduleUrl={siteContext.mainContact.scheduleUrl}
          nmls={siteContext.mainContact.nmls}
          isLoggedIn={!!session}
          userName={session?.user.fullName}
        />
        <main className="flex-1">{children}</main>
        <Footer
          isPartnerPortal={siteContext.isPartnerPortal}
          realtorName={siteContext.realtor ? `${siteContext.realtor.firstName} ${siteContext.realtor.lastName}` : undefined}
          realtorWebsite={siteContext.realtor?.websiteUrl}
        />
      </body>
    </html>
  );
}
