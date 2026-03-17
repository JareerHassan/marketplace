import type { Metadata } from "next";
import LearningPageClient from "./LearningPage";

export const metadata: Metadata = {
  metadataBase: new URL("https://aiappspace.com"),

  title: "Ethical Hacking Learning App with AI Quizzes",
  description:
    "Learn ethical hacking with AI quizzes, smart exams, and structured cybersecurity modules. Build real skills with our AI-powered learning app.",

  keywords: [
    "Ethical Hacking Learning App",
    "learn ethical hacking app",
    "AI cybersecurity quizzes",
    "cybersecurity learning app",
    "penetration testing learning app",
    "cybersecurity exam practice app",
    "AI hacking quiz app",
    "ethical hacking course app",
    "cybersecurity training app",
    "ethical hacking mobile app",
  ],

  applicationName: "Ethical Hacking Learning App",
  category: "Education",

  alternates: {
    canonical: "/products/learning-app",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Ethical Hacking Learning App with AI Quizzes",
    description:
      "Learn ethical hacking with AI quizzes, penetration testing modules, and AI-powered cybersecurity exam practice.",
    url: "https://aiappspace.com/products/learning-app",
    siteName: "AI App Space",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aiappspace.com/assets/learningapps.png",
        width: 1200,
        height: 630,
        alt: "Ethical Hacking Learning App preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ethical Hacking Learning App with AI Quizzes",
    description:
      "AI cybersecurity quizzes, penetration testing lessons, and structured exam practice in one powerful learning app.",
    images: ["https://aiappspace.com/assets/learningapps.png"],
    creator: "@aiappspace",
  },

  authors: [{ name: "AI App Space" }],
  creator: "AI App Space",
  publisher: "AI App Space",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ethical Hacking Learning App",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Android",
  description:
    "Learn ethical hacking with AI quizzes, smart exams, and structured cybersecurity modules in one mobile learning app.",
  url: "https://aiappspace.com/products/learning-app",
  image: "https://aiappspace.com/assets/learningapps.png",
  publisher: {
    "@type": "Organization",
    name: "AI App Space",
    url: "https://aiappspace.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LearningPageClient />
    </>
  );
}