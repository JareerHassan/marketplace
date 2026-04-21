// src/app/(main)/page.tsx
import HomePageClient from './HomePageClient';
import type { Metadata } from 'next';

export const metadataBase = new URL('https://aiappspace.com');

export const metadata: Metadata = {
  title: {
    default: 'AI Tools Marketplace | Best AI Apps & SaaS Platform',
    template: '%s | AI App Space',
  },
  description:
    'Discover the best AI tools marketplace for business, productivity, and automation. Explore top AI apps and SaaS tools globally.',
  keywords: [
    'AI tools marketplace',
    'AI tools platform',
    'AI apps marketplace',
    'Best Ai Apps',
    'AI Tools to earn Money online',
    'SaaS marketplace',
    'best AI tools',
    'AI tools for business',
    'best AI tools for business',
    'AI tools for automation platform',
    'global AI tools marketplace',
    'SaaS tools marketplace',
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
    title: 'Best AI Tools Marketplace for Business & Productivity',
    description:
      'Explore top AI tools, apps, and SaaS solutions in one powerful marketplace.',
    url: 'https://aiappspace.com',
    siteName: 'AI App Space',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://aiappspace.com/logo.png', // replace with your real OG image
        width: 1200,
        height: 630,
        alt: 'AI tools marketplace platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best AI Tools Marketplace for Business & Productivity',
    description:
      'Explore top AI tools, apps, and SaaS solutions in one powerful marketplace.',
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
      '@type': 'WebSite',
      '@id': 'https://aiappspace.com/#website',
      url: 'https://aiappspace.com',
      name: 'AI App Space',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://aiappspace.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
      inLanguage: 'en',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://aiappspace.com/#webpage',
      url: 'https://aiappspace.com',
      name: 'Best AI Tools Marketplace for Business & Productivity',
      isPartOf: {
        '@id': 'https://aiappspace.com/#website',
      },
      about: {
        '@id': 'https://aiappspace.com/#organization',
      },
      description:
        'Discover the best AI tools marketplace for business, productivity, and automation. Explore top AI apps and SaaS tools globally.',
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