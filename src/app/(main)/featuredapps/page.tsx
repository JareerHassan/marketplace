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
    title: "Top Featured AI Tools & Apps | AI App Space",
    description:
      "Browse our handpicked selection of the best AI tools and apps, carefully curated for business productivity, automation, content creation, and growth.",
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
    title: "Top Featured AI Tools & Apps | AI App Space",
    description:
      "Browse our handpicked selection of the best AI tools and apps, carefully curated for business productivity, automation, content creation, and growth.",
    images: ["https://aiappspace.com/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://aiappspace.com/featuredapps#page",
  name: "Top Featured AI Tools & Apps",
  description:
    "Explore the top featured AI tools and apps handpicked for business, productivity, and automation on AI App Space.",
  url: "https://aiappspace.com/featuredapps",
  isPartOf: { "@id": "https://aiappspace.com/#website" },
  publisher: { "@id": "https://aiappspace.com/#organization" },
  inLanguage: "en",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aiappspace.com" },
      { "@type": "ListItem", position: 2, name: "Featured Apps", item: "https://aiappspace.com/featuredapps" },
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
      <FeaturedAppsPage />
    </>
  );
}