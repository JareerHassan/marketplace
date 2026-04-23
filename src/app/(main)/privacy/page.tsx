import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";


export const metadata: Metadata = {
  metadataBase: new URL("https://aiappspace.com"),
  title: "Privacy Policy | AI Tools Marketplace — AI App Space",
  description:
    "Read the AI App Space Privacy Policy to understand how we collect, use, store, and protect personal information across our AI tools marketplace.",
  keywords: [
    "privacy policy",
    "AI App Space privacy",
    "AI tools marketplace privacy",
    "data protection policy",
    "personal data policy",
    "AI marketplace privacy policy",
    "SaaS marketplace privacy",
    "cookie and data policy",
    "user data rights",
    "aiappspace.com privacy",
  ],
  alternates: {
    canonical: "/privacy",
  },
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
  openGraph: {
    title: "Privacy Policy | AI App Space",
    description:
      "Official Privacy Policy for AI App Space covering data collection, usage, security, and user rights.",
    url: "https://aiappspace.com/privacy",
    siteName: "AI App Space",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aiappspace.com/logo.png",
        width: 1200,
        height: 630,
        alt: "AI App Space — Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | AI App Space",
    description:
      "How AI App Space handles personal information and data protection across its marketplace.",
    images: ["https://aiappspace.com/logo.png"],
  },
};

export default function PrivacyPage() {
  return (
    <>
                <HeroSection />
    
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className=" mx-auto">
    


        <article className="prose prose-invert prose-lg mx-auto text-foreground/80 space-y-8 max-w-none">
          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">1. Scope</h2>
            <p>
              This Privacy Policy applies to visitors, buyers, sellers, and account holders who
              interact with AI App Space online. By using the Service, you agree to the collection
              and use of information in accordance with this policy. If you do not agree, please
              discontinue use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">2. Information we collect</h2>
            <p>We may collect the following categories of information, depending on how you use the Service:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Account and profile data:</strong> name, email address, password (stored in
                hashed form where applicable), and other details you provide when registering or
                updating your profile.
              </li>
              <li>
                <strong>Transaction and billing data:</strong> purchase history, order details, and
                payment-related information processed by our payment partners (we do not store full
                payment card numbers on our servers when a third-party processor handles checkout).
              </li>
              <li>
                <strong>Communications:</strong> messages you send to us (for example via contact
                forms or support), and metadata such as timestamps.
              </li>
              <li>
                <strong>Technical and usage data:</strong> IP address, browser type, device
                identifiers, general location (e.g. region), pages viewed, referring URLs, and
                similar analytics data collected through cookies and similar technologies.
              </li>
              <li>
                <strong>Seller and listing content:</strong> product descriptions, files, and other
                materials you submit as a seller, subject to our Terms and any seller agreements.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">3. How we use your information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and improve the marketplace and related features.</li>
              <li>Create and manage accounts, process orders, and deliver digital products or access.</li>
              <li>Communicate with you about the Service, security, or policy updates.</li>
              <li>Respond to inquiries and provide customer support.</li>
              <li>Detect, prevent, and address fraud, abuse, or technical issues.</li>
              <li>Comply with legal obligations and enforce our terms.</li>
              <li>Analyze usage trends in aggregated or de-identified form where appropriate.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">4. Legal bases (where applicable)</h2>
            <p>
              Depending on your location, we may rely on one or more legal bases such as
              performance of a contract, legitimate interests (for example improving security and
              the Service), consent (where required for marketing or non-essential cookies), and
              legal obligation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">5. Sharing and disclosure</h2>
            <p>We may share information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service providers</strong> who assist us with hosting, analytics, email
                delivery, payments, fraud prevention, and similar functions, under contractual
                safeguards.
              </li>
              <li>
                <strong>Other users</strong> where necessary for the marketplace (for example,
                seller information shown on product listings as described in our Terms).
              </li>
              <li>
                <strong>Authorities</strong> when required by law or to protect rights, safety, and
                integrity of AI App Space, our users, or the public.
              </li>
              <li>
                <strong>Business transfers</strong> in connection with a merger, acquisition, or sale
                of assets, subject to appropriate notice where required.
              </li>
            </ul>
            <p>We do not sell your personal information as a commodity in the traditional sense of &quot;selling&quot; lists of individuals to unrelated third parties for their own marketing.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">6. Cookies and similar technologies</h2>
            <p>
              We use cookies and similar technologies to remember preferences, maintain sessions,
              measure traffic, and improve the Service. You can control cookies through your browser
              settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">7. Data retention</h2>
            <p>
              We retain personal information for as long as needed to fulfill the purposes described
              in this policy, unless a longer period is required or permitted by law. Retention
              periods may vary based on the type of data and legal or operational requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">8. Security</h2>
            <p>
              We implement appropriate technical and organizational measures designed to protect
              your information. No method of transmission or storage is completely secure; we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">9. Children&apos;s privacy</h2>
            <p>
              The Service is not directed at children under the age where parental consent is
              required in your jurisdiction. We do not knowingly collect personal information from
              such children. If you believe we have collected such information, please contact us so
              we can delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">10. International transfers</h2>
            <p>
              Your information may be processed in countries other than your own, where our
              providers or we operate. Where required, we use appropriate safeguards (such as
              contractual clauses) for cross-border transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">11. Your rights and choices</h2>
            <p>
              Depending on applicable law, you may have rights to access, correct, delete, or
              restrict processing of your personal data, to object to certain processing, to data
              portability, and to withdraw consent where processing is based on consent. You may also
              have the right to lodge a complaint with a supervisory authority. To exercise these
              rights, contact us using the details below. We may need to verify your identity before
              responding.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">12. Third-party sites and tools</h2>
            <p>
              The Service may link to third-party websites, AI tools, or payment processors. Their
              privacy practices are governed by their own policies. We encourage you to read those
              policies before providing information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">13. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the revised version on
              this page and update the &quot;Last updated&quot; date. Material changes may be
              communicated through the Service or by email where appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">14. Contact us</h2>
            <p>
              For privacy-related questions or requests, please contact us via our{" "}
              <a href="/contact" className="text-primary underline underline-offset-2 hover:no-underline">
                Contact
              </a>{" "}
              page or the contact information provided on{" "}
              <a
                href="https://aiappspace.com"
                className="text-primary underline underline-offset-2 hover:no-underline"
              >
                aiappspace.com
              </a>
              .
            </p>
          </section>

          <section className="border-t border-border/40 pt-8 not-prose">
            <p className="text-sm text-muted-foreground">
              This document is provided for general information about our practices. It is not legal
              advice. You should consult a qualified attorney to ensure your privacy program meets
              all requirements that apply to your business and jurisdiction.
            </p>
          </section>
        </article>
      </div>
    </div>
    </>

  );
}
