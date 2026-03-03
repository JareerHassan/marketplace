// src/app/ai-marketplace-faqs/page.tsx

import FAQPage from "./FAQPage";

export const metadata = {
  title: "AI Marketplace FAQs | Buying & Selling Help",
  description:
    "Find answers about buying AI tools, digital downloads, payments, licensing, and seller accounts on our secure AI marketplace.",

  keywords: [
    "AI Marketplace FAQs",
    "digital product support",
    "AI tools marketplace help",
    "buy AI tools FAQ",
    "sell digital products FAQ",
  ],

  alternates: {
    canonical: "https://yourdomain.com/ai-marketplace-faqs",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "AI Marketplace FAQs | Buying & Selling Help",
    description:
      "Get help with buying AI tools, payments, licensing, and selling digital products.",
    url: "https://yourdomain.com/ai-marketplace-faqs",
    type: "website",
  },
};

export default function Page() {
  return <FAQPage />;
}