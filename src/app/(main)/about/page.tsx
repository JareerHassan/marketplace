// src/app/about-ai-digital-marketplace/page.tsx

import HeroSection from "@/components/HeroSection";
import AboutContent from "@/components/AboutContent";

export const metadata = {
  title: "About Our AI Digital Marketplace Platform",
  description:
    "Learn how our AI digital marketplace empowers creators and businesses with secure, scalable AI tools, SaaS products, and digital solutions.",

  keywords: [
    "AI Digital Marketplace",
    "AI tools marketplace platform",
    "SaaS marketplace ecosystem",
    "sell AI tools online",
    "buy AI software",
  ],

  alternates: {
    canonical: "https://yourdomain.com/about-ai-digital-marketplace",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "About Our AI Digital Marketplace Platform",
    description:
      "Learn how our AI digital marketplace empowers creators and businesses with secure, scalable AI tools and SaaS products.",
    url: "https://yourdomain.com/about-ai-digital-marketplace",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <AboutContent />
    </>
  );
}