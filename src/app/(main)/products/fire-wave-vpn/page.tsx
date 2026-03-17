// app/apps/fire-wave-vpn/page.tsx
import type { Metadata } from "next";
import LearningPageClient from "./LearningPage";

export const metadata: Metadata = {
  metadataBase: new URL("https://aiappspace.com"),

  title: "Fire Wave VPN | Secure Cross-Platform VPN App",
  description:
    "Fire Wave VPN is a fast, secure, cross-platform VPN for Android, iOS, desktop, Amazon Fire TV, and Android TV with privacy protection, no-logs security, and smooth streaming.",

  keywords: [
    "Fire Wave VPN",
    "VPN app",
    "secure VPN app",
    "cross-platform VPN",
    "VPN for Android",
    "VPN for iPhone",
    "VPN for iOS",
    "desktop VPN",
    "Amazon Fire TV VPN",
    "Android TV VPN",
    "streaming VPN",
    "fast VPN",
    "private VPN",
    "no logs VPN",
    "secure browsing VPN",
    "privacy protection VPN",
    "VPN for streaming",
    "Firebase VPN app",
  ],

  applicationName: "Fire Wave VPN",
  category: "Technology",

  alternates: {
    canonical: "/products/fire-wave-vpn",
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
    title: "Fire Wave VPN | Secure Cross-Platform VPN App",
    description:
      "Protect your privacy with Fire Wave VPN on Android, iOS, desktop, Amazon Fire TV, and Android TV. Enjoy fast connections, no-logs security, and smooth streaming.",
    url: "https://aiappspace.com/products/fire-wave-vpn",
    siteName: "AI App Space",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aiappspace.com/assets/firewavevpn.webp",
        width: 1200,
        height: 630,
        alt: "Fire Wave VPN app preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fire Wave VPN | Secure Cross-Platform VPN App",
    description:
      "Fast, private, and streaming-ready VPN protection for Android, iOS, desktop, Amazon Fire TV, and Android TV.",
    images: ["https://aiappspace.com/assets/firewavevpn.webp"],
    creator: "@aiappspace",
  },

  authors: [{ name: "AI App Space" }],
  creator: "AI App Space",
  publisher: "AI App Space",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Fire Wave VPN",
  applicationCategory: "SecurityApplication",
  operatingSystem: "Android, iOS, Windows, macOS, Fire OS, Android TV",
  description:
    "Fire Wave VPN is a secure cross-platform VPN app for mobile, desktop, Amazon Fire TV, and Android TV with privacy protection, fast performance, and a no-logs experience.",
  url: "https://aiappspace.com/products/fire-wave-vpn",
  image: "https://aiappspace.com/assets/firewavevpn.webp",
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