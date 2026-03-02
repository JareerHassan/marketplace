// src/app/(main)/page.tsx
import HomePageClient from './HomePageClient';

export const metadata = {
  title: 'Digital Marketplace for AI Tools & Apps',
  description: 'Discover premium AI tools, SaaS products, apps, and digital solutions. Buy or sell high-quality digital products built for developers and startups.',
  canonical: 'https://yourwebsite.com/ai-digital-marketplace', // Add this
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
  return <HomePageClient />;
}