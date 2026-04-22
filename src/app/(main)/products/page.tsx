// src/app/products/page.tsx

import type { Metadata } from "next";
import ExplorePage from "./ExplorePageClient";

export const metadata: Metadata = {
  title: "AI Apps for Business | Explore AI Tools & SaaS Products",
  description:
    "Explore AI apps and tools designed for business, productivity, and automation.",
  keywords: [
    "AI apps for business",
    "buy AI tools online",
    "buy AI tools",
    "AI SaaS tools",
    "AI tools platform",
    "AI apps marketplace",
    "Best Ai Apps",
    "AI Tools to earn Money online",
    "SaaS tools marketplace",
    "best AI tools",
    "AI tools for business",
    "AI apps",
    "AI tools",
  ],
  alternates: {
    canonical: "https://aiappspace.com/products",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI Apps Marketplace",
    description:
      "Find the best AI tools for your business.",
    url: "https://aiappspace.com/products",
    siteName: "AI App Space",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aiappspace.com/logo.png",
        width: 1200,
        height: 630,
        alt: "AI tools dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Apps Marketplace",
    description:
      "Find the best AI tools for your business.",
    images: ["https://aiappspace.com/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "AI Tools",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExplorePage />
    </>
  );
}