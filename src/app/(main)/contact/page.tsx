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
    title: "Contact AI App Space",
    description:
      "Reach out to our team for help, support, or business inquiries.",
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
    title: "Contact AI App Space",
    description:
      "Reach out to our team for help, support, or business inquiries.",
    images: ["https://aiappspace.com/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact AI App Space",
  url: "https://aiappspace.com/contact",
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