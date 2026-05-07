import LandingPage from './PromptPage';

export const metadata = {
  metadataBase: new URL('https://aiappspace.com'),

  title: 'AI Prompt Creator - Build Better AI Prompts Fast',
  description:
    'AI Prompt Creator helps you create structured AI prompts fast, improve response quality, save time, and get better results from AI tools.',

  keywords: [
    'AI Prompt Creator',
    'AI prompt creator app',
    'AI prompt generator',
    'prompt engineering tool',
    'AI prompt tool',
    'AI productivity tool',
    'AI writing tool',
    'ChatGPT prompt generator',
    'best AI prompt app',
    'prompt maker app',
    'AI response optimizer',
    'structured prompts',
    'AI business tools',
    'AI productivity tools',
    'better AI prompts',
  ],

  applicationName: 'AI Prompt Creator',
  category: 'Productivity',

  alternates: {
    canonical: '/products/ai-prompt-creator',
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
    title: 'AI Prompt Creator - Create Better AI Prompts',
    description:
      'Turn raw ideas into clear, structured AI prompts with AI Prompt Creator. Save time, improve response quality, and get better AI results.',
    url: 'https://aiappspace.com/products/ai-prompt-creator',
    siteName: 'AI App Space',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://aiappspace.com/assets/gpt.png',
        width: 1200,
        height: 630,
        alt: 'AI Prompt Creator app preview',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI Prompt Creator - Create Better AI Prompts',
    description:
      'Turn raw ideas into clear, structured AI prompts with AI Prompt Creator. Save time, improve response quality, and get better AI results.',
    images: ['https://aiappspace.com/assets/gpt.png'],
  },

  authors: [{ name: 'Intellion Labs' }],
  creator: 'Intellion Labs',
  publisher: 'AI App Space',
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
      '@type': 'WebPage',
      '@id': 'https://aiappspace.com/products/ai-prompt-creator/#webpage',
      url: 'https://aiappspace.com/products/ai-prompt-creator',
      name: 'AI Prompt Creator - Build Better AI Prompts Fast',
      description:
        'AI Prompt Creator helps you create structured AI prompts fast, improve response quality, save time, and get better results from AI tools.',
      isPartOf: {
        '@id': 'https://aiappspace.com/#website',
      },
      about: {
        '@id': 'https://aiappspace.com/products/ai-prompt-creator/#software',
      },
      inLanguage: 'en',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://aiappspace.com/products/ai-prompt-creator/#software',
      name: 'AI Prompt Creator',
      description:
        'AI Prompt Creator is a prompt engineering tool that helps users turn raw ideas into clear, structured, high-performing AI prompts for better and more accurate AI responses.',
      applicationCategory: 'ProductivityApplication',
      applicationSubCategory: 'AI Prompt Engineering Tool',
      operatingSystem: 'Android 7.0 and above',
      softwareVersion: '1.0.0',
      fileSize: '28MB',
      url: 'https://aiappspace.com/products/ai-prompt-creator',
      downloadUrl: 'https://aiappspace.com/products/ai-prompt-creator',
      author: {
        '@type': 'Organization',
        name: 'Intellion Labs',
      },
      publisher: {
        '@id': 'https://aiappspace.com/#organization',
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://aiappspace.com/products/ai-prompt-creator',
      },
      featureList: [
        'Prompt engineering tool for AI optimization',
        'Step-by-step guided prompt creation system',
        'Improves accuracy and quality of AI responses',
        'Saves time writing complex prompts',
        'Makes AI easier and more useful for everyone',
      ],
    },
    {
      '@type': 'Product',
      '@id': 'https://aiappspace.com/products/ai-prompt-creator/#product',
      name: 'AI Prompt Creator',
      description:
        'AI Prompt Creator helps users create structured AI prompts, improve AI response quality, save time, and reduce prompt rewriting.',
      brand: {
        '@type': 'Brand',
        name: 'Intellion Labs',
      },
      category: 'AI Business & Productivity Tools',
      url: 'https://aiappspace.com/products/ai-prompt-creator',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://aiappspace.com/products/ai-prompt-creator/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://aiappspace.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'AI Tools',
          item: 'https://aiappspace.com/products',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'AI Prompt Creator',
          item: 'https://aiappspace.com/products/ai-prompt-creator',
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPage />
    </>
  );
}