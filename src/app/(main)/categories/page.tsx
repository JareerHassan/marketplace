// src/app/categories/page.tsx

import type { Metadata } from "next";
import CategoriesPage from "./CategoriesPage";

export const metadata: Metadata = {
  title: "AI Tools Categories | Find AI Tools by Use Case",
  description:
    "Browse AI tools categories including marketing, writing, automation, and business tools.",
  keywords: [
    "AI tools for business",
    "AI marketing tools",
    "AI writing tools",
    "AI automation tools",
    "AI tools platform",
    "AI apps marketplace",
    "Best Ai Apps",
    "AI Tools to earn Money online",
    "SaaS tools marketplace",
    "best AI tools",
    "AI tools categories",
    "AI tools for small business marketing",
  ],
  alternates: {
    canonical: "https://aiappspace.com/categories",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI Tools Categories",
    description:
      "Explore AI tools by category and use case.",
    url: "https://aiappspace.com/categories",
    siteName: "AI App Space",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aiappspace.com/logo.png",
        width: 1200,
        height: 630,
        alt: "AI tools categories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools Categories",
    description:
      "Explore AI tools by category and use case.",
    images: ["https://aiappspace.com/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "AI Tools Categories",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CategoriesPage />
    </>
  );
}