// src/app/ai-marketplace-faqs/page.tsx

import type { Metadata } from "next";
import FAQPage from "./FAQPage";

export const metadata: Metadata = {
  title: "AI Tools FAQ | AI App Space",
  description:
    "Find answers to common questions about AI tools, pricing, features, and how our AI marketplace works.",
  keywords: [
    "AI tools marketplace FAQ",
    "AI tools questions",
    "AI tools guide",
    "AI tools platform help",
    "AI tools pricing questions",
    "AI tools platform",
    "AI apps marketplace",
    "Best Ai Apps",
    "AI Tools to earn Money online",
    "SaaS tools marketplace",
    "best AI tools",
    "AI tools for business",
    "how AI tools marketplace works",
    "how to choose AI tools",
    "are AI tools worth it",
    "AI tools FAQ",
    "AI marketplace questions",
    "AI tools help",
  ],
  alternates: {
    canonical: "https://aiappspace.com/faq",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI Tools FAQ & Help Guide",
    description:
      "Get answers to your AI tools questions and learn how to use our marketplace effectively.",
    url: "https://aiappspace.com/faq",
    siteName: "AI App Space",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aiappspace.com/logo.png",
        width: 1200,
        height: 630,
        alt: "AI tools FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools FAQ & Help Guide",
    description:
      "Get answers to your AI tools questions and learn how to use our marketplace effectively.",
    images: ["https://aiappspace.com/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI tools marketplace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI tools marketplace is a platform where users can discover, compare, and access various AI tools for business, productivity, and automation.",
      },
    },
    {
      "@type": "Question",
      name: "Are AI tools free or paid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI tools can be free, freemium, or paid depending on features and usage.",
      },
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