// src/app/ai-products-marketplace/page.tsx

import ExplorePage from "./ExplorePageClient";

export const metadata = {
  title: "AI Products Marketplace | Scalable Digital Tools",
  description:
    "Discover scalable AI bots, SaaS platforms, and digital tools built for developers and businesses. Explore high-performance AI products today.",

  keywords: [
    "AI Products Marketplace",
    "buy AI tools online",
    "SaaS products marketplace",
    "AI bots marketplace",
    "digital products platform",
  ],

  alternates: {
    canonical: "https://yourdomain.com/ai-products-marketplace",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "AI Products Marketplace | Scalable Digital Tools",
    description:
      "Explore scalable AI bots, SaaS platforms, and high-performance digital tools.",
    url: "https://yourdomain.com/ai-products-marketplace",
    type: "website",
  },
};

export default function Page() {
  return <ExplorePage />;
}