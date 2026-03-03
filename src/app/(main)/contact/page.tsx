// src/app/contact-ai-marketplace/page.tsx

import ContactPage from "./ContactPage";

export const metadata = {
  title: "Contact AI Marketplace Support Team",
  description:
    "Contact our AI marketplace team for product support, seller inquiries, enterprise solutions, or technical assistance. We're here to help.",

  keywords: [
    "Contact AI Marketplace Support",
    "AI tools support",
    "digital marketplace contact",
    "SaaS platform support",
    "enterprise AI inquiry",
  ],

  alternates: {
    canonical: "https://yourdomain.com/contact-ai-marketplace",
  },

  openGraph: {
    title: "Contact AI Marketplace Support Team",
    description:
      "Reach our AI marketplace support team for product help, enterprise AI inquiries, and seller support.",
    url: "https://yourdomain.com/contact-ai-marketplace",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ContactPage />;
}