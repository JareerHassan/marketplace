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
    // Core marketplace
    'AI tools marketplace',
    'AI tools platform',
    'AI apps marketplace',
    'AI software marketplace',
    'global AI tools marketplace',
    'SaaS marketplace',
    'SaaS tools marketplace',
    'buy AI tools online',
    'sell AI tools',
    'AI app store',
    'digital AI products marketplace',

    // Best / Top intent
    'Best Ai Apps',
    'best AI tools',
    'best AI tools 2026',
    'top AI tools 2026',
    'best AI tools list',
    'top AI apps',
    'best free AI tools',
    'free AI tools',
    'free AI apps',

    // Business & productivity
    'AI tools for business',
    'best AI tools for business',
    'AI tools for small business',
    'AI tools for startups',
    'AI tools for freelancers',
    'AI tools for productivity',
    'AI productivity tools',
    'AI tools for automation platform',
    'AI automation tools',

    // Specific AI tool categories
    'AI writing tools',
    'AI image generator',
    'AI video generator',
    'AI chatbot tools',
    'AI coding tools',
    'AI marketing tools',
    'AI SEO tools',
    'AI content generator',
    'AI voice generator',
    'AI design tools',
    'AI tools for content creation',
    'AI tools for social media',
    'AI tools for developers',
    'AI tools for education',
    'AI tools for students',
    'AI tools for e-commerce',

    // Discovery / comparison intent
    'AI tools directory',
    'compare AI tools',
    'AI tools reviews',
    'ChatGPT alternatives',
    'generative AI tools',
    'best generative AI tools',

    // Monetization intent
    'AI Tools to earn Money online',
    'AI tools for passive income',
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
      description:
        'AI App Space is a leading AI tools marketplace where businesses and individuals discover, compare, and access the best AI software and SaaS tools globally.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aiappspace.com/logo.png',
        width: 400,
        height: 400,
      },
      sameAs: [
        'https://twitter.com/aiappspace',
        'https://www.linkedin.com/company/aiappspace',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        url: 'https://aiappspace.com/contact',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://aiappspace.com/#website',
      url: 'https://aiappspace.com',
      name: 'AI App Space',
      description:
        'Discover the best AI tools marketplace for business, productivity, and automation.',
      publisher: { '@id': 'https://aiappspace.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://aiappspace.com/ai-search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
      inLanguage: 'en',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://aiappspace.com/#webpage',
      url: 'https://aiappspace.com',
      name: 'Best AI Tools Marketplace for Business & Productivity',
      isPartOf: { '@id': 'https://aiappspace.com/#website' },
      about: { '@id': 'https://aiappspace.com/#organization' },
      publisher: { '@id': 'https://aiappspace.com/#organization' },
      description:
        'Discover the best AI tools marketplace for business, productivity, and automation. Explore top AI apps and SaaS tools globally.',
      inLanguage: 'en',
      datePublished: '2024-01-01',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aiappspace.com' },
        ],
      },
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