// src/app/(main)/page.tsx
import HomePageClient from './HomePageClient';
import { Metadata } from 'next';

// Optional: set this in root layout.tsx for all pages (recommended)
export const metadataBase = new URL('https://aiappspace.com');

export const metadata: Metadata = {
  title: 'Digital Marketplace for AI Tools & Apps',
  description:
    'Discover premium AI tools, SaaS products, apps, and digital solutions. Buy or sell high-quality digital products built for developers and startups.',
  keywords: [
    'Digital Marketplace for AI Tools',
    'AI tools marketplace',
    'buy AI tools online',
    'SaaS marketplace',
    'sell digital products',
    'AI apps marketplace',
  ],
  robots: {
    index: true,
    follow: true,
  },
  // This is the key line — Next.js will generate <link rel="canonical" ...>
  alternates: {
    canonical: 'https://aiappspace.com', // relative path (metadataBase + this)
    // or absolute: 'https://aiappspace.com/ai-digital-marketplace'
  },
  openGraph: {
    title: 'Digital Marketplace for AI Tools & Apps',
    description:
      'Discover premium AI tools, SaaS products, apps, and digital solutions.',
    url: 'https://aiappspace.com', // optional, but good
    type: 'website',
    // images: [...] ← add if you have OG image
  },
  // twitter: { ... } ← optional
};

export default function HomePage() {
  return <HomePageClient />;
}