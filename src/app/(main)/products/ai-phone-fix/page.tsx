import type { Metadata } from 'next';
import ExplorePageClient from './ExplorePageClient';

export const metadata: Metadata = {
  metadataBase: new URL('https://aiappspace.com'),

  title: 'AI Mobile Assistant – Smart Bug Fix & Optimizer',
  description:
    'Fix mobile bugs, detect performance issues, and optimize your smartphone with AI-powered diagnostics and smart troubleshooting tools.',

  keywords: [
    'AI Mobile Assistant',
    'AI phone fix',
    'mobile bug fix app',
    'smartphone optimizer',
    'AI diagnostics app',
    'phone issue detection',
    'mobile performance optimizer',
    'AI troubleshooting app',
    'Android bug fixing app',
    'smartphone repair assistant',
  ],

  applicationName: 'AI Mobile Assistant',
  category: 'Technology',

  alternates: {
    canonical: '/products/ai-phone-fix',
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
    title: 'AI Mobile Assistant – Smart Bug Fix & Optimizer',
    description:
      'Detect phone issues, fix bugs, and improve device performance with AI-powered diagnostics.',
    url: 'https://aiappspace.com/products/ai-phone-fix',
    siteName: 'AI App Space',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://aiappspace.com/assets/gpt.png',
        width: 1200,
        height: 630,
        alt: 'AI Mobile Assistant app preview',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Mobile Assistant – Smart Bug Fix & Optimizer',
    description:
      'Fix mobile bugs, detect performance issues, and optimize your smartphone with AI-powered diagnostics.',
    images: ['https://aiappspace.com/assets/gpt.png'],
  },

  // Optional extras
  authors: [{ name: 'AI App Space' }],
  creator: 'AI App Space',
  publisher: 'AI App Space',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AI Mobile Assistant',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Android',
  description:
    'AI-powered mobile assistant for bug detection, issue tracing, and smartphone performance optimization.',
  url: 'https://aiappspace.com/products/ai-phone-fix',
  image: 'https://aiappspace.com/assets/gpt.png',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '100000',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExplorePageClient />
    </>
  );
}