import type { Metadata } from "next";
import AISearchClient from "./AISearchClient";

export const metadata: Metadata = {
  title: "AI Search | Find the Perfect AI Tool – AI App Space",
  description:
    "Use our AI-powered search assistant to find the perfect AI tool for your needs. Ask a question and get personalized recommendations from our AI tools marketplace.",
  keywords: [
    "AI tool finder",
    "AI search",
    "find AI tools",
    "AI tool recommendations",
    "AI assistant",
    "best AI tool for me",
    "AI tools search",
    "AI chatbot tool finder",
    "AI tools marketplace search",
    "recommend AI tools",
    "AI tool discovery",
    "AI app finder",
  ],
  alternates: {
    canonical: "https://aiappspace.com/ai-search",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI Search | Find the Perfect AI Tool – AI App Space",
    description:
      "Use our AI-powered assistant to find the best AI tools and apps tailored to your needs. Get instant personalized recommendations from our marketplace.",
    url: "https://aiappspace.com/ai-search",
    siteName: "AI App Space",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aiappspace.com/logo.png",
        width: 1200,
        height: 630,
        alt: "AI-powered tool search on AI App Space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Search | Find the Perfect AI Tool – AI App Space",
    description:
      "Use our AI-powered assistant to find the best AI tools and apps tailored to your needs. Get instant personalized recommendations from our marketplace.",
    images: ["https://aiappspace.com/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://aiappspace.com/ai-search#page",
  name: "AI Search – Find the Perfect AI Tool",
  description:
    "Use AI App Space's AI-powered search assistant to find the best AI tools and apps tailored to your business needs.",
  url: "https://aiappspace.com/ai-search",
  isPartOf: { "@id": "https://aiappspace.com/#website" },
  publisher: { "@id": "https://aiappspace.com/#organization" },
  inLanguage: "en",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aiappspace.com" },
      { "@type": "ListItem", position: 2, name: "AI Search", item: "https://aiappspace.com/ai-search" },
    ],
  },
};

export default function AISearchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AISearchClient />
    </>
  );
}
