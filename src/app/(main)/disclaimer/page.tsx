import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Disclaimer | AI App Space",
  description:
    "Important disclaimers regarding AI App Space, our marketplace listings, third-party tools, and general use of this website.",
  alternates: {
    canonical: "https://aiappspace.com/disclaimer",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Disclaimer | AI App Space",
    description:
      "Read our general disclaimers for the AI App Space marketplace and website.",
    url: "https://aiappspace.com/disclaimer",
    siteName: "AI App Space",
    type: "website",
    locale: "en_US",
  },
};

export default function DisclaimerPage() {
  return (
    <>
                    <HeroSection />
    
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className=" mx-auto">
    

      

        <article className="prose prose-invert prose-lg mx-auto text-foreground/80 space-y-8 max-w-none">
          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">1. No professional advice</h2>
            <p>
              Nothing on this website constitutes legal, financial, tax, medical, or other
              professional advice. You should consult qualified professionals before making decisions
              based on information found here or on any product listed in the marketplace.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">2. Third-party products and services</h2>
            <p>
              AI App Space lists and facilitates discovery of tools, apps, SaaS products, and other
              digital offerings from third parties. Listing does not imply our endorsement,
              warranty, or guarantee of quality, fitness for a particular purpose, security, or
              compliance. Sellers and licensors are responsible for their products, descriptions,
              support, and performance. Your relationship is primarily with the seller or provider of
              the product you choose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">3. Accuracy of information</h2>
            <p>
              We strive to keep marketplace and editorial content accurate and up to date, but we do
              not warrant that any information on the Service is complete, current, or error-free.
              Features, pricing, and availability may change without notice. Always verify details on
              the official product or seller page before purchasing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">4. AI-generated or automated content</h2>
            <p>
              Where the Service includes AI-assisted features (such as recommendations or chat), outputs
              may be incorrect, incomplete, or unsuitable for your situation. You are responsible for
              evaluating any suggestion before relying on it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">5. External links</h2>
            <p>
              Links to third-party websites are provided for convenience. We do not control and are
              not responsible for the content, policies, or practices of external sites. Accessing
              third-party links is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">6. Limitation of warranties</h2>
            <p>
              The website and marketplace listings are provided on an &quot;as is&quot; and &quot;as
              available&quot; basis, without warranties of any kind, express or implied, except as
              required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">7. Contact</h2>
            <p>
              Questions about this disclaimer may be directed through our{" "}
              <Link href="/contact" className="text-primary underline underline-offset-2 hover:no-underline">
                Contact
              </Link>{" "}
              page.
            </p>
          </section>

          <section className="border-t border-border/40 pt-8 not-prose">
            <p className="text-sm text-muted-foreground">
              This disclaimer is provided for transparency. It does not replace our{" "}
              <Link href="/terms" className="text-primary underline underline-offset-2 hover:no-underline">
                Terms of Service
              </Link>{" "}
              or{" "}
              <Link href="/privacy" className="text-primary underline underline-offset-2 hover:no-underline">
                Privacy Policy
              </Link>
              . Consult legal counsel for wording appropriate to your jurisdictions and business model.
            </p>
          </section>
        </article>
      </div>
    </div>
    </>

  );
}
