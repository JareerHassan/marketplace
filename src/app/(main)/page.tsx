// src/app/(main)/page.tsx
import HomePageClient from './HomePageClient';
import Head from 'next/head';

export const metadata = {
  title: 'Digital Marketplace for AI Tools & Apps',
  description: 'Discover premium AI tools, SaaS products, apps, and digital solutions. Buy or sell high-quality digital products built for developers and startups.',
  canonical: 'https://yourwebsite.com/ai-digital-marketplace',
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'Digital Marketplace for AI Tools',
    'AI tools marketplace',
    'buy AI tools online',
    'SaaS marketplace',
    'sell digital products',
    'AI apps marketplace'
  ],
  openGraph: {
    title: 'Digital Marketplace for AI Tools & Apps',
    description: 'Discover premium AI tools, SaaS products, apps, and digital solutions.',
    url: 'https://yourwebsite.com/ai-digital-marketplace',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://yourwebsite.com/ai-digital-marketplace" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Discover premium AI tools, SaaS products, apps, and digital solutions. Buy or sell high-quality digital products built for developers and startups." />
      </Head>
      <HomePageClient />
    </>
  );
}