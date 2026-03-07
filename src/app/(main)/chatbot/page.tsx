// src/app/chatbot/page.tsx

import type { Metadata } from "next";
import ChatbotPage from "./ChatbotPage";

export const metadata: Metadata = {
  title: "AI App Space Chatbot | AI Tool Recommendation Assistant",
  description:
    "AI App Space chatbot to instantly discover the best AI tools, SaaS products, apps, and digital solutions for your business goals and workflow needs.",
  keywords: [
    "AI App Space chatbot",
    "AI tool recommendation assistant",
    "AI marketplace assistant",
    "AI chatbot for tool discovery",
    "AI product finder",
    "AI tool recommendation engine",
    "AI SaaS recommendation",
    "find AI tools fast",
    "AI assistant for businesses",
    "AI App Space assistant",
  ],
  alternates: {
    canonical: "https://aiappspace.com/chatbot",
  },
  openGraph: {
    title: "AI App Space Chatbot | AI Tool Recommendation Assistant",
    description:
      "Discover the right AI tools, SaaS products, apps, and digital solutions with the AI App Space recommendation assistant.",
    url: "https://aiappspace.com/chatbot",
    siteName: "AI App Space",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aiappspace.com/logo.png",
        width: 1200,
        height: 630,
        alt: "AI App Space Chatbot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI App Space Chatbot | AI Tool Recommendation Assistant",
    description:
      "App Space chatbot to find the best AI tools, SaaS products, apps, and digital solutions.",
    images: ["https://aiappspace.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://aiappspace.com/chatbot#webpage",
      url: "https://aiappspace.com/chatbot",
      name: "AI App Space Chatbot | AI Tool Recommendation Assistant",
      description:
        "AI App Space chatbot to instantly discover the best AI tools, SaaS products, apps, and digital solutions for your business goals and workflow needs.",
      isPartOf: {
        "@id": "https://aiappspace.com/#website",
      },
      about: {
        "@id": "https://aiappspace.com/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://aiappspace.com/chatbot#softwareapplication",
      name: "AI App Space Chatbot",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://aiappspace.com/chatbot",
      description:
        "An AI recommendation assistant that helps users discover relevant AI tools, SaaS products, apps, and digital solutions.",
      publisher: {
        "@id": "https://aiappspace.com/#organization",
      },
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
      "@id": "https://aiappspace.com/chatbot#breadcrumb",
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
          name: "Chatbot",
          item: "https://aiappspace.com/chatbot",
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
      <ChatbotPage />
    </>
  );
}