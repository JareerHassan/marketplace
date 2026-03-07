// src/app/about/page.tsx

import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About AI App Space",
  description:
    "Learn about AI App Space, built to help creators, startups, and businesses discover, buy, and sell AI tools, SaaS products, and digital solutions.",
  keywords: [
    "About AI App Space",
    "AI App Space",
    "AI digital marketplace",
    "SaaS marketplace ecosystem",
    "sell AI tools online",
    "buy AI software",
    "digital products marketplace",
    "AI marketplace for startups",
    "AI SaaS products",
    "AI business tools",
  ],
  alternates: {
    canonical: "https://aiappspace.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About AI App Space",
    description:
      "Learn about AI App Space and how it helps creators and businesses grow with AI tools and SaaS products.",
    url: "https://aiappspace.com/about",
    siteName: "AI App Space",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aiappspace.com/logo.png",
        width: 1200,
        height: 630,
        alt: "About AI App Space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About AI App Space",
    description:
      "Learn about AI App Space for AI tools, apps, and SaaS products.",
    images: ["https://aiappspace.com/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://aiappspace.com/about#webpage",
      url: "https://aiappspace.com/about",
      name: "About AI App Space",
      description:
        "Learn about AI App Space, built to help creators, startups, and businesses discover, buy, and sell AI tools, SaaS products, and digital solutions.",
      isPartOf: {
        "@id": "https://aiappspace.com/#website",
      },
      about: {
        "@id": "https://aiappspace.com/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "AboutPage",
      "@id": "https://aiappspace.com/about#aboutpage",
      url: "https://aiappspace.com/about",
      name: "About AI App Space",
      description:
        "Learn about AI App Space and how it helps creators and businesses grow with AI tools and SaaS products.",
      mainEntity: {
        "@id": "https://aiappspace.com/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://aiappspace.com/#organization",
      name: "AI App Space",
      url: "https://aiappspace.com",
      logo: {
        "@type": "ImageObject",
        url: "https://aiappspace.com/logo.png",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://aiappspace.com/#website",
      url: "https://aiappspace.com",
      name: "AI App Space",
      publisher: {
        "@id": "https://aiappspace.com/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aiappspace.com/about#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://aiappspace.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://aiappspace.com/about",
        },
      ],
    },
  ],
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