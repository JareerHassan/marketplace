import CategoriesPage from "./CategoriesPage";

export const metadata = {
  title: "AI Tools Categories | Browse by Industry & Function",
  description:
    "Explore AI tools organized by industry and function. Discover writing tools, automation software, analytics platforms, and scalable AI solutions.",

  keywords: [
    "AI Tools Categories",
    "AI software by industry",
    "AI tools marketplace categories",
    "browse AI tools online",
    "AI product categories",
  ],

  alternates: {
    canonical: "https://yourdomain.com/ai-tools-categories",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "AI Tools Categories | Browse by Industry & Function",
    description:
      "Explore AI tools marketplace categories organized by industry and practical use cases.",
    url: "https://yourdomain.com/ai-tools-categories",
    type: "website",
  },
};

export default function Page() {
  return <CategoriesPage />;
}