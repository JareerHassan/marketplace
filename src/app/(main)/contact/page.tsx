// src/app/contact/page.tsx

import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact AI App Space",
  description:
    "Contact AI App Space for product support, seller inquiries, enterprise solutions, partnerships, or technical assistance. Our team is here to help.",
  keywords: [
    "Contact AI App Space",
    "AI App Space support",
    "AI tools support",
    "digital marketplace contact",
    "SaaS platform support",
    "enterprise AI inquiry",
    "seller support",
    "contact AI marketplace",
    "technical support",
    "AI App Space contact",
  ],
  alternates: {
    canonical: "https://aiappspace.com/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact AI App Space",
    description:
      "Reach AI App Space for product support, enterprise inquiries, seller support, partnerships, and technical help.",
    url: "https://aiappspace.com/contact",
    siteName: "AI App Space",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aiappspace.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact AI App Space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AI App Space",
    description:
      "Contact AI App Space for product support, seller inquiries, enterprise solutions, and technical assistance.",
    images: ["https://aiappspace.com/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://aiappspace.com/contact#contactpage",
      url: "https://aiappspace.com/contact",
      name: "Contact AI App Space",
      description:
        "Contact AI App Space for product support, seller inquiries, enterprise solutions, partnerships, or technical assistance.",
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
      "@id": "https://aiappspace.com/contact#webpage",
      url: "https://aiappspace.com/contact",
      name: "Contact AI App Space",
      description:
        "Contact AI App Space for product support, seller inquiries, enterprise solutions, partnerships, or technical assistance. Our team is here to help.",
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
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          url: "https://aiappspace.com/contact",
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          url: "https://aiappspace.com/contact",
          availableLanguage: ["English"],
        },
      ],
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
      "@id": "https://aiappspace.com/contact#breadcrumb",
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
          name: "Contact",
          item: "https://aiappspace.com/contact",
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
      <ContactPage />
    </>
  );
}