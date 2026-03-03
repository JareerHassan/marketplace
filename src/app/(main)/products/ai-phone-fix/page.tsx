import { Metadata } from 'next';
import ExplorePageClient from './ExplorePageClient';

export const metadata: Metadata = {
  title: "AI Mobile Assistant – Smart Bug Fix & Optimizer",
  description:
    "Fix mobile bugs, detect performance issues, and optimize your smartphone with AI-powered diagnostics.",

  // ✅ Canonical URL
  alternates: {
    canonical: "https://yourdomain.com/products/ai-phone-fix",
  },

  // ✅ Robots Tag
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "AI Mobile Assistant",
    description: "Smart troubleshooting tools for your smartphone.",
    url: "https://yourdomain.com/products/ai-phone-fix",
    type: "website",
    images: [{ url: "/assets/mobile.png" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Mobile Assistant",
    description: "Smart troubleshooting tools for your smartphone.",
    images: ["/assets/mobile.png"],
  },
};

export default function Page() {
  return <ExplorePageClient />;
}