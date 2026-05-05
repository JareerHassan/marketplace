// src/app/contact/page.tsx

import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact AI App Space | AI Tools Marketplace",
  description:
    "Get in touch with AI App Space for support, inquiries, or partnerships related to AI tools and marketplace services.",
  keywords: [
    "contact AI tools platform",
    "contact AI marketplace",
    "AI tools support",
    "AI tools help center",
    "AI tools platform",
    "AI apps marketplace",
    "Best Ai Apps",
    "AI Tools to earn Money online",
    "SaaS tools marketplace",
    "best AI tools",
    "AI tools for business",
    "how to contact AI tools marketplace",
    "AI tools support contact",
    "AI support",
  ],
  alternates: {
    canonical: "https://aiappspace.com/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact AI App Space | Support & Business Inquiries",
    description:
      "Have questions? Get in touch with AI App Space for support, business partnerships, seller inquiries, or general questions about our AI tools marketplace.",
    url: "https://aiappspace.com/contact",
    siteName: "AI App Space",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aiappspace.com/logo.png",
        width: 1200,
        height: 630,
        alt: "contact AI tools platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AI App Space | Support & Business Inquiries",
    description:
      "Have questions? Get in touch with AI App Space for support, business partnerships, seller inquiries, or general questions about our AI tools marketplace.",
    images: ["https://aiappspace.com/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://aiappspace.com/contact#page",
  name: "Contact AI App Space",
  description:
    "Get in touch with the AI App Space team for support, business inquiries, or partnership opportunities.",
  url: "https://aiappspace.com/contact",
  isPartOf: { "@id": "https://aiappspace.com/#website" },
  publisher: { "@id": "https://aiappspace.com/#organization" },
  inLanguage: "en",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aiappspace.com" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://aiappspace.com/contact" },
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
      <ContactPage />
    </>
  );
}