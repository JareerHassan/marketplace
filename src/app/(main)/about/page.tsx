// src/app/about/page.tsx

import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About AI App Space | AI Tools Marketplace",
  description:
    "Learn about AI App Space, a leading AI tools platform helping businesses discover and use the best AI solutions worldwide.",
  keywords: [
    "AI tools platform",
    "AI marketplace",
    "AI tools directory",
    "AI SaaS platform",
    "AI apps marketplace",
    "Best Ai Apps",
    "AI Tools to earn Money online",
    "SaaS tools marketplace",
    "best AI tools",
    "AI tools for business",
    "best AI tools platform for business",
    "AI tools marketplace platform",
  ],
  alternates: {
    canonical: "https://aiappspace.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About AI App Space | Leading AI Tools Marketplace",
    description:
      "Discover how AI App Space is building the world's best AI tools marketplace, helping businesses and individuals find and access the right AI software globally.",
    url: "https://aiappspace.com/about",
    siteName: "AI App Space",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aiappspace.com/logo.png",
        width: 1200,
        height: 630,
        alt: "AI tools platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About AI App Space | Leading AI Tools Marketplace",
    description:
      "Discover how AI App Space is building the world's best AI tools marketplace, helping businesses and individuals find and access the right AI software globally.",
    images: ["https://aiappspace.com/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://aiappspace.com/about#page",
  name: "About AI App Space",
  description:
    "AI App Space is a leading AI tools marketplace helping businesses and individuals discover the best AI software and SaaS solutions worldwide.",
  url: "https://aiappspace.com/about",
  isPartOf: { "@id": "https://aiappspace.com/#website" },
  publisher: { "@id": "https://aiappspace.com/#organization" },
  about: { "@id": "https://aiappspace.com/#organization" },
  inLanguage: "en",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aiappspace.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://aiappspace.com/about" },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <AboutContent />
    </>
  );
}