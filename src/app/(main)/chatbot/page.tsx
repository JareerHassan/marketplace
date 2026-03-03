// src/app/ai-recommendation-assistant/page.tsx

import ChatbotPage from "./ChatbotPage";

export const metadata = {
  title: "AI Tool Recommendation Assistant | Find Tools Fast",
  description:
    "Use our AI Recommendation Assistant to instantly find the best AI tools, SaaS products, and digital solutions for your business goals.",

  keywords: [
    "AI Tool Recommendation Assistant",
    "AI marketplace assistant",
    "AI chatbot for tool discovery",
    "AI product finder",
    "AI tool recommendation engine",
  ],

  alternates: {
    canonical: "https://yourdomain.com/ai-recommendation-assistant",
  },

  openGraph: {
    title: "AI Tool Recommendation Assistant | Find Tools Fast",
    description:
      "Discover the perfect AI tools, SaaS products, and digital solutions with our intelligent AI recommendation assistant.",
    url: "https://yourdomain.com/ai-recommendation-assistant",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ChatbotPage />;
}