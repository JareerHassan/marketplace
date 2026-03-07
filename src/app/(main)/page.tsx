// src/app/(main)/page.tsx
import HomePageClient from './HomePageClient';
import type { Metadata } from 'next';

export const metadataBase = new URL('https://aiappspace.com');

export const metadata: Metadata = {
  title: {
    default: 'AI App Space for AI Tools, SaaS products & Apps',
    template: '%s | AI App Space',
  },
  description:
    'Discover premium AI tools, SaaS products, apps, and digital solutions. Buy or sell high-quality AI products built for developers, startups, agencies, and businesses.',
  keywords: [
    'AI App Space',
    'Digital Marketplace for AI Tools',
    'AI tools marketplace',
    'AI apps marketplace',
    'buy AI tools online',
    'sell AI tools',
    'SaaS marketplace',
    'digital products marketplace',
    'AI software marketplace',
    'startup tools marketplace',
    'developer tools marketplace',
    'business AI tools',
  ],
  applicationName: 'AI App Space',
  category: 'technology',
  classification: 'AI Tools Marketplace',
  referrer: 'origin-when-cross-origin',
  creator: 'AI App Space',
  publisher: 'AI App Space',
  metadataBase: new URL('https://aiappspace.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'AI App Space for AI Tools, SaaS products & Apps',
    description:
      'Discover premium AI tools, SaaS products, apps, and digital solutions for developers, startups, and businesses.',
    url: 'https://aiappspace.com',
    siteName: 'AI App Space',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://aiappspace.com/logo.png', // replace with your real OG image
        width: 1200,
        height: 630,
        alt: 'AI App Space for AI Tools, SaaS products & Apps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI App Space for AI Tools, SaaS products & Apps',
    description:
      'Discover premium AI tools, SaaS products, apps, and digital solutions.',
    images: ['https://aiappspace.com/logo.png'], // replace with your real image
    // creator: '@yourtwitterhandle',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: 'https://aiappspace.com/logo.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://aiappspace.com/#website',
      url: 'https://aiappspace.com',
      name: 'AI App Space',
      description:
        'Digital marketplace for AI tools, SaaS products, apps, and digital solutions.',
      publisher: {
        '@id': 'https://aiappspace.com/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://aiappspace.com/products?search={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
      inLanguage: 'en',
    },
    {
      '@type': 'Organization',
      '@id': 'https://aiappspace.com/#organization',
      name: 'AI App Space',
      url: 'https://aiappspace.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aiappspace.com/logo.png',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://aiappspace.com/#webpage',
      url: 'https://aiappspace.com',
      name: 'AI App Space for AI Tools, SaaS products & Apps',
      isPartOf: {
        '@id': 'https://aiappspace.com/#website',
      },
      about: {
        '@id': 'https://aiappspace.com/#organization',
      },
      description:
        'Discover premium AI tools, SaaS products, apps, and digital solutions. Buy or sell high-quality AI products built for developers, startups, agencies, and businesses.',
      inLanguage: 'en',
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageClient />
    </>
  );
}