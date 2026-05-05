// src/app/products/page.tsx

import type { Metadata } from "next";
import ExplorePage from "./ExplorePageClient";

export const metadata: Metadata = {
  title: "AI Apps for Business | Explore AI Tools & SaaS Products",
  description:
    "Explore hundreds of AI apps, tools, and SaaS products designed for business, productivity, and automation. Compare pricing, features, and reviews to find the perfect AI solution.",
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
    title: "Explore AI Apps & Tools | AI App Space Marketplace",
    description:
      "Browse top AI apps, software, and SaaS products. Compare features, pricing, and reviews to find the perfect AI tool for your business or project.",
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
    title: "Explore AI Apps & Tools | AI App Space Marketplace",
    description:
      "Browse top AI apps, software, and SaaS products. Compare features, pricing, and reviews to find the perfect AI tool for your business or project.",
    images: ["https://aiappspace.com/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://aiappspace.com/products#page",
  name: "AI Apps & Tools Marketplace",
  description:
    "Browse and discover AI apps, software, and SaaS tools for business, productivity, and automation on AI App Space.",
  url: "https://aiappspace.com/products",
  isPartOf: { "@id": "https://aiappspace.com/#website" },
  publisher: { "@id": "https://aiappspace.com/#organization" },
  inLanguage: "en",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aiappspace.com" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://aiappspace.com/products" },
    ],
  },
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