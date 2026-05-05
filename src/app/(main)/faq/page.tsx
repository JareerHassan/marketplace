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
  "@id": "https://aiappspace.com/faq#page",
  name: "AI Tools FAQ – AI App Space",
  url: "https://aiappspace.com/faq",
  isPartOf: { "@id": "https://aiappspace.com/#website" },
  publisher: { "@id": "https://aiappspace.com/#organization" },
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI tools marketplace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI tools marketplace is a platform where users can discover, compare, and access various AI tools for business, productivity, and automation. AI App Space curates the best AI software and SaaS tools in one place.",
      },
    },
    {
      "@type": "Question",
      name: "Are AI tools free or paid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI tools can be free, freemium, or paid depending on their features and usage limits. AI App Space lists tools across all pricing models so you can find options that fit your budget.",
      },
    },
    {
      "@type": "Question",
      name: "How do I submit my AI tool to AI App Space?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can submit your AI tool by registering as a seller on AI App Space and using the Submit Tool form in your seller dashboard. Our team reviews every submission before it goes live.",
      },
    },
    {
      "@type": "Question",
      name: "What types of AI tools are listed on AI App Space?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI App Space lists a wide variety of AI tools including AI writing assistants, AI image generators, AI code tools, AI marketing tools, AI automation software, AI productivity apps, VPNs, SaaS platforms, learning apps, and more.",
      },
    },
    {
      "@type": "Question",
      name: "How can I sell my AI tool or software on AI App Space?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Register as a seller on AI App Space, complete your seller profile, then submit your product through the seller dashboard. Once our team approves it, your tool will be listed in the marketplace for buyers worldwide.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI App Space free to use for buyers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, browsing and discovering AI tools on AI App Space is completely free for buyers. You only pay when you purchase or subscribe to a specific tool listed in the marketplace.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose the best AI tool for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the AI App Space categories and filters to browse tools by use case, pricing model, and category. You can compare features, read descriptions, and visit tool websites directly from the marketplace.",
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