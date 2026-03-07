// src/app/products/page.tsx

import type { Metadata } from "next";
import ExplorePage from "./ExplorePageClient";

export const metadata: Metadata = {
  title: "AI App Space Products | AI Tools, SaaS & Digital Apps",
  description:
    "Explore AI App Space products including AI tools, SaaS platforms, bots, apps, and digital solutions built for creators, developers, startups, and businesses.",
  keywords: [
    "AI App Space products",
    "AI products marketplace",
    "AI tools marketplace",
    "buy AI tools online",
    "SaaS products marketplace",
    "AI bots marketplace",
    "digital products platform",
    "AI apps marketplace",
    "business AI tools",
    "developer AI tools",
  ],
  alternates: {
    canonical: "https://aiappspace.com/products",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI App Space Products | AI Tools, SaaS & Digital Apps",
    description:
      "Explore AI tools, SaaS platforms, bots, apps, and digital solutions on AI App Space.",
    url: "https://aiappspace.com/products",
    siteName: "AI App Space",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aiappspace.com/logo.png",
        width: 1200,
        height: 630,
        alt: "AI App Space Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI App Space Products | AI Tools, SaaS & Digital Apps",
    description:
      "Explore AI tools, SaaS platforms, bots, apps, and digital solutions on AI App Space.",
    images: ["https://aiappspace.com/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://aiappspace.com/products#collectionpage",
      url: "https://aiappspace.com/products",
      name: "AI App Space Products",
      description:
        "Browse AI tools, SaaS products, bots, apps, and digital solutions on AI App Space.",
      isPartOf: {
        "@id": "https://aiappspace.com/#website",
      },
      about: {
        "@id": "https://aiappspace.com/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://aiappspace.com/products#webpage",
      url: "https://aiappspace.com/products",
      name: "AI App Space Products | AI Tools, SaaS & Digital Apps",
      description:
        "Explore AI App Space products including AI tools, SaaS platforms, bots, apps, and digital solutions built for creators, developers, startups, and businesses.",
      isPartOf: {
        "@id": "https://aiappspace.com/#website",
      },
      about: {
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
      potentialAction: {
        "@type": "SearchAction",
        target: "https://aiappspace.com/products?search={search_term_string}",
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aiappspace.com/products#breadcrumb",
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
          name: "Products",
          item: "https://aiappspace.com/products",
        },
      ],
    },
  ],
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