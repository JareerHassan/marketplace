import { Metadata } from 'next';
import LearningPageClient from './LearningPage';

export const metadata: Metadata = {
  title: "Ethical Hacking Learning App with AI Quizzes",
  description:
    "Learn ethical hacking with AI quizzes, smart exams, and structured cybersecurity modules. Build real skills with our AI-powered learning app.",

  // ✅ Canonical URL
  alternates: {
    canonical: "https://yourdomain.com/apps/ethical-hacking-learning-app",
  },

  // ✅ Robots Tag
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ✅ Open Graph
  openGraph: {
    title: "Ethical Hacking Learning App with AI Quizzes",
    description:
      "Learn ethical hacking with AI quizzes, penetration testing modules, and AI-powered cybersecurity exam practice.",
    url: "https://yourdomain.com/apps/ethical-hacking-learning-app",
    type: "website",
    images: [{ url: "/assets/ethical-hacking-app.png" }],
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Ethical Hacking Learning App with AI Quizzes",
    description:
      "AI cybersecurity quizzes, penetration testing lessons, and structured exam practice in one powerful learning app.",
    images: ["/assets/ethical-hacking-app.png"],
  },

  // ✅ SEO Keywords (Optional but helpful)
  keywords: [
    "Ethical Hacking Learning App",
    "learn ethical hacking app",
    "AI cybersecurity quizzes",
    "penetration testing learning app",
    "cybersecurity exam practice app",
  ],
};

export default function Page() {
  return <LearningPageClient />;
}