// src/app/chatbot/page.tsx

import type { Metadata } from "next";
import ChatbotPage from "./ChatbotPage";

export const metadata: Metadata = {
  title: "AI Assistant Tools | Best AI Chatbots for Business",
  description:
    "Discover AI assistant and chatbot tools for business automation, customer support, and productivity.",
  keywords: [
    "AI chatbot tools",
    "AI assistant tools",
    "AI chatbots for business",
    "AI automation tools",
    "AI tools platform",
    "AI apps marketplace",
    "Best Ai Apps",
    "AI Tools to earn Money online",
    "SaaS tools marketplace",
    "best AI tools",
    "AI tools for business",
    "best AI chatbot tools for business",
    "AI assistant tools for automation",
    "AI assistant",
  ],
  alternates: {
    canonical: "https://aiappspace.com/chatbot",
  },
  openGraph: {
    title: "AI Assistant Tools",
    description:
      "Explore AI chatbot tools for automation and business growth.",
    url: "https://aiappspace.com/chatbot",
    siteName: "AI App Space",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aiappspace.com/logo.png",
        width: 1200,
        height: 630,
        alt: "AI chatbot tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Assistant Tools",
    description:
      "Explore AI chatbot tools for automation and business growth.",
    images: ["https://aiappspace.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "AI Assistant Tools",
  url: "https://aiappspace.com/chatbot",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChatbotPage />
    </>
  );
}