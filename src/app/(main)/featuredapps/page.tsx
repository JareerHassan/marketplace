import type { Metadata } from "next";
import FeaturedAppsPage from "./ExplorePageClient";

export const metadata: Metadata = {
  title: "Featured AI Apps | Top AI Tools, SaaS & Digital Products",
  description:
    "Discover featured AI apps, top AI tools, SaaS platforms, digital products, and smart business solutions handpicked on AI App Space.",
  keywords: [
    "featured AI apps",
    "top AI tools",
    "best AI apps",
    "featured SaaS products",
    "AI tools marketplace",
    "top digital products",
    "featured AI software",
    "best business AI tools",
    "AI apps for startups",
    "handpicked AI tools",
  ],
  alternates: {
    canonical: "https://aiappspace.com/featuredapps",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Featured AI Apps | Top AI Tools, SaaS & Digital Products",
    description:
      "Explore featured AI apps, SaaS tools, bots, and digital products selected for creators, developers, startups, and businesses.",
    url: "https://aiappspace.com/featuredapps",
    siteName: "AI App Space",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aiappspace.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Featured AI Apps - AI App Space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Featured AI Apps | Top AI Tools, SaaS & Digital Products",
    description:
      "Discover featured AI apps, SaaS platforms, and digital solutions on AI App Space.",
    images: ["https://aiappspace.com/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://aiappspace.com/featuredapps#collectionpage",
      url: "https://aiappspace.com/featuredapps",
      name: "Featured AI Apps",
      description:
        "Browse featured AI apps, tools, SaaS products, and digital solutions on AI App Space.",
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
      "@id": "https://aiappspace.com/featuredapps#webpage",
      url: "https://aiappspace.com/featuredapps",
      name: "Featured AI Apps | Top AI Tools, SaaS & Digital Products",
      description:
        "Discover featured AI apps, top AI tools, SaaS platforms, digital products, and smart business solutions handpicked on AI App Space.",
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
        target: "https://aiappspace.com/featuredapps?search={search_term_string}",
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://aiappspace.com/featuredapps#breadcrumb",
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
          name: "Featured Apps",
          item: "https://aiappspace.com/featuredapps",
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
      <FeaturedAppsPage />
    </>
  );
}