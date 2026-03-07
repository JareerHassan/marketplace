// src/app/categories/page.tsx

import type { Metadata } from "next";
import CategoriesPage from "./CategoriesPage";

export const metadata: Metadata = {
  title: "AI App Space Categories | Browse AI Tools by Industry & Function",
  description:
    "Explore AI App Space categories to discover AI tools, SaaS products, apps, and digital solutions organized by industry, use case, and business function.",
  keywords: [
    "AI App Space categories",
    "AI tools categories",
    "AI software by industry",
    "AI tools marketplace categories",
    "browse AI tools online",
    "AI product categories",
    "AI SaaS categories",
    "business AI tools",
    "developer AI tools",
    "AI apps by category",
  ],
  alternates: {
    canonical: "https://aiappspace.com/categories",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI App Space Categories | Browse AI Tools by Industry & Function",
    description:
      "Explore AI App Space categories organized by industry, business needs, and practical AI use cases.",
    url: "https://aiappspace.com/categories",
    siteName: "AI App Space",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aiappspace.com/logo.png",
        width: 1200,
        height: 630,
        alt: "AI App Space Categories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI App Space Categories | Browse AI Tools by Industry & Function",
    description:
      "Explore AI App Space categories to discover AI tools, SaaS products, apps, and digital solutions.",
    images: ["https://aiappspace.com/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://aiappspace.com/categories#collectionpage",
      url: "https://aiappspace.com/categories",
      name: "AI App Space Categories",
      description:
        "Browse AI App Space categories to explore AI tools, SaaS products, apps, and digital solutions by industry and function.",
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
      "@id": "https://aiappspace.com/categories#webpage",
      url: "https://aiappspace.com/categories",
      name: "AI App Space Categories | Browse AI Tools by Industry & Function",
      description:
        "Explore AI App Space categories to discover AI tools, SaaS products, apps, and digital solutions organized by industry, use case, and business function.",
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
      "@id": "https://aiappspace.com/categories#breadcrumb",
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
          name: "Categories",
          item: "https://aiappspace.com/categories",
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
      <CategoriesPage />
    </>
  );
}