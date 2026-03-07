// src/app/ai-marketplace-faqs/page.tsx

import type { Metadata } from "next";
import FAQPage from "./FAQPage";

export const metadata: Metadata = {
  title: "AI App Space FAQs | Buying, Selling & Marketplace Help",
  description:
    "Find answers about buying AI tools, digital downloads, payments, licensing, seller accounts, and marketplace support on AI App Space.",
  keywords: [
    "AI App Space FAQs",
    "AI marketplace FAQs",
    "digital product support",
    "AI tools marketplace help",
    "buy AI tools FAQ",
    "sell digital products FAQ",
    "AI App Space help",
    "marketplace support",
    "digital downloads FAQ",
    "seller account help",
  ],
  alternates: {
    canonical: "https://aiappspace.com/faq",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI App Space FAQs | Buying, Selling & Marketplace Help",
    description:
      "Get help with buying AI tools, payments, licensing, seller accounts, and digital product support on AI App Space.",
    url: "https://aiappspace.com/faq",
    siteName: "AI App Space",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aiappspace.com/logo.png",
        width: 1200,
        height: 630,
        alt: "AI App Space FAQs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI App Space FAQs | Buying, Selling & Marketplace Help",
    description:
      "Find answers about buying AI tools, payments, licensing, seller accounts, and marketplace support on AI App Space.",
    images: ["https://aiappspace.com/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://aiappspace.com/faq#faqpage",
      url: "https://aiappspace.com/faq",
      name: "AI App Space FAQs",
      description:
        "Frequently asked questions about buying AI tools, selling digital products, payments, licensing, downloads, and seller accounts on AI App Space.",
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
      "@id": "https://aiappspace.com/ai-marketplace-faqs#webpage",
      url: "https://aiappspace.com/ai-marketplace-faqs",
      name: "AI App Space FAQs | Buying, Selling & Marketplace Help",
      description:
        "Find answers about buying AI tools, digital downloads, payments, licensing, seller accounts, and marketplace support on AI App Space.",
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
      "@id": "https://aiappspace.com/ai-marketplace-faqs#breadcrumb",
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
          name: "FAQs",
          item: "https://aiappspace.com/faq",
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
      <FAQPage />
    </>
  );
}