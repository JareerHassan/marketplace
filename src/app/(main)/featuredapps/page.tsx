import type { Metadata } from "next";
import FeaturedAppsPage from "./ExplorePageClient";

export const metadata: Metadata = {
  title: "Best AI Tools | Top AI Apps for Business",
  description:
    "Explore the best AI tools and apps for productivity, automation, and business growth.",
  keywords: [
    "best AI tools",
    "top AI tools",
    "best AI apps",
    "AI tools list",
    "Best Ai Apps",
    "AI Tools to earn Money online",
    "top AI SaaS tools",
    "best AI tools for productivity",
    "top AI apps for business",
  ],
  alternates: {
    canonical: "https://aiappspace.com/featuredapps",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Top AI Tools & Apps",
    description:
      "Discover the best AI tools curated for business success.",
    url: "https://aiappspace.com/featuredapps",
    siteName: "AI App Space",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aiappspace.com/logo.png",
        width: 1200,
        height: 630,
        alt: "best AI tools list",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top AI Tools & Apps",
    description:
      "Discover the best AI tools curated for business success.",
    images: ["https://aiappspace.com/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Top AI Tools",
  itemListElement: [],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FeaturedAppsPage />
    </>
  );
}