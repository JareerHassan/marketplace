import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Terms of Service | AI App Space",
  description:
    "Terms and conditions for using AI App Space—our marketplace for AI tools, SaaS products, digital apps, and related services.",
  alternates: {
    canonical: "https://aiappspace.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service | AI App Space",
    description:
      "Read the terms governing your use of AI App Space, including accounts, purchases, listings, and acceptable use.",
    url: "https://aiappspace.com/terms",
    siteName: "AI App Space",
    type: "website",
    locale: "en_US",
  },
};

export default function TermsPage() {
  return (
    <>
            <HeroSection />

    <div className="container mx-auto px-4 py-12 md:py-20">
      
      <div className=" mx-auto">
     

        <article className="prose prose-invert prose-lg mx-auto text-foreground/80 space-y-8 max-w-none">
          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">1. Agreement</h2>
            <p>
              By accessing or using our website, marketplace features, accounts, or any related
              services (collectively, the &quot;Service&quot;), you agree to be bound by these Terms
              of Service. If you do not agree, do not use the Service. We may update these Terms from
              time to time; continued use after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">2. The Service</h2>
            <p>
              AI App Space provides an online marketplace where users may discover, compare, list,
              and purchase digital products such as AI tools, SaaS offerings, apps, and related
              digital solutions. We may modify, suspend, or discontinue features of the Service
              with reasonable notice where practicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">3. Eligibility and accounts</h2>
            <p>
              You must be able to form a legally binding contract in your jurisdiction to use the
              Service. You agree to provide accurate, current, and complete registration information
              and to keep your account credentials secure. You are responsible for all activity under
              your account. We may suspend or terminate accounts that violate these Terms or pose
              risk to the Service or other users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">4. Marketplace roles</h2>
            <p>
              Depending on your use of the Service, you may act as a visitor, buyer, and/or seller.
              Additional terms, policies, or agreements may apply to sellers or specific products;
              where they conflict with these Terms on a specific point, the more specific terms govern
              that point only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">5. Orders, payments, and delivery</h2>
            <p>
              Product descriptions, pricing, taxes, and availability are set by sellers or as shown
              at checkout. Payments may be processed by third-party payment providers. Digital
              delivery methods (downloads, licenses, account access, etc.) depend on each product.
              You agree to pay all charges associated with your purchases according to the payment
              terms presented at checkout.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">6. Licenses and third-party products</h2>
            <p>
              When you purchase a digital product, you receive the license or rights described on the
              product page and any end-user license agreement provided by the seller or licensor. We
              are not the publisher of every product; third-party tools remain subject to their own
              terms and privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">7. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate applicable laws or infringe others&apos; intellectual property or privacy rights.</li>
              <li>Attempt to gain unauthorized access to the Service, other accounts, or underlying systems.</li>
              <li>Use the Service to distribute malware, spam, or deceptive or harmful content.</li>
              <li>Interfere with or disrupt the integrity or performance of the Service.</li>
              <li>Scrape, harvest, or misuse data from the Service in violation of these Terms or technical restrictions.</li>
              <li>Misrepresent your identity, qualifications, or affiliation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">8. User content and listings</h2>
            <p>
              Sellers and users may submit listings, descriptions, images, and other content
              (&quot;User Content&quot;). You retain ownership of your User Content subject to the
              license you grant us to operate, promote, and improve the Service. You represent that
              you have the rights to submit User Content and that it does not violate law or third-party
              rights. We may remove or restrict content that violates these Terms or our policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">9. Intellectual property</h2>
            <p>
              The Service, including its branding, layout, and original materials (excluding User
              Content and third-party products), is owned by AI App Space or its licensors and is
              protected by intellectual property laws. No rights are granted except as expressly
              stated in these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">10. Disclaimers</h2>
            <p>
              The Service and all products are provided &quot;as is&quot; and &quot;as available&quot;
              to the fullest extent permitted by law. We do not warrant uninterrupted or error-free
              operation. Third-party products are provided by sellers or licensors; we do not endorse
              every product and are not responsible for third-party performance or support except as
              required by applicable consumer law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">11. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, AI App Space and its affiliates, officers,
              employees, and agents will not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or loss of profits, data, or goodwill, arising from
              your use of the Service or products obtained through it. Our aggregate liability for
              claims relating to the Service in any twelve-month period is limited to the greater of
              (a) the amount you paid us for the Service in that period (excluding amounts passed
              through to sellers or payment processors) or (b) one hundred US dollars (USD 100),
              except where liability cannot be limited by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">12. Indemnity</h2>
            <p>
              You will defend, indemnify, and hold harmless AI App Space from claims, damages, losses,
              and expenses (including reasonable attorneys&apos; fees) arising from your User Content,
              your use of the Service, your violation of these Terms, or your violation of others&apos;
              rights, except to the extent caused by our willful misconduct.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">13. Termination</h2>
            <p>
              You may stop using the Service at any time. We may suspend or terminate access to the
              Service for conduct that we believe violates these Terms or harms users, the Service,
              or third parties. Provisions that by their nature should survive termination will survive.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">14. Governing law and disputes</h2>
            <p>
              These Terms are governed by the laws applicable in the jurisdiction we designate for
              disputes from time to time, without regard to conflict-of-law rules. Courts in that
              jurisdiction (or binding arbitration, if we adopt an arbitration clause) may have
              exclusive venue unless mandatory consumer protections in your country require otherwise.
              Please review this section carefully; you may wish to obtain legal advice on what applies
              to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">15. General</h2>
            <p>
              If any provision is held unenforceable, the remaining provisions remain in effect.
              Failure to enforce a provision is not a waiver. These Terms constitute the entire agreement
              between you and AI App Space regarding the Service and supersede prior agreements on the
              same subject, except for additional seller or product-specific terms where stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent not-prose">16. Contact</h2>
            <p>
              For questions about these Terms, contact us via our{" "}
              <Link href="/contact" className="text-primary underline underline-offset-2 hover:no-underline">
                Contact
              </Link>{" "}
              page or the information provided on{" "}
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
              This document is for general information and operational clarity. It is not a substitute
              for legal advice. Have qualified counsel review your terms for every jurisdiction where
              you do business.
            </p>
          </section>
        </article>
      </div>
    </div>
    </>
  );
}
