"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Icons } from "@/components/icons";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10% 0px -10% 0px" },
    transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay },
});

export default function AboutContent() {
    const reduce = useReducedMotion();

    const stats = [
        { label: "Creators onboarded", value: "2,500+" },
        { label: "AI assets listed", value: "12,000+" },
        { label: "Countries reached", value: "80+" },
        { label: "Avg. satisfaction", value: "4.9/5" },
    ];

    const values = [
        { title: "Innovation", desc: "We empower a community that pushes boundaries and ships practical AI that actually helps." },
        { title: "Accessibility", desc: "From power users to curious beginners—clear pricing, simple docs, and fast discovery." },
        { title: "Security & Trust", desc: "Quality checks, safer transactions, and transparent seller reputation signals." },
        { title: "Craft", desc: "We obsess over UI polish, performance, and a marketplace experience that feels premium." },
    ];

    const steps = [
        { title: "Discover", desc: "Browse curated AI assets, compare capabilities, and preview before you buy." },
        { title: "Integrate", desc: "Clear docs, versioning, and updates—so your product stays stable as you scale." },
        { title: "Ship", desc: "Launch faster with proven building blocks: agents, prompts, models, tools, and templates." },
    ];

    const trust = [
        { title: "Vetted listings", desc: "Guidelines for quality, clarity, and safe usage—so buyers can decide confidently." },
        { title: "Secure checkout", desc: "A frictionless purchase flow designed for reliability and peace of mind." },
        { title: "Reputation & reviews", desc: "Signals that reward consistency—helping top creators stand out naturally." },
        { title: "Support-ready", desc: "Clear seller contact + buyer expectations to keep communication professional." },
    ];

    const faqs = [
        {
            q: "What kind of products can creators sell?",
            a: "Anything that helps people build with AI—agents, prompt packs, templates, workflows, datasets, components, and tools (as long as it meets quality and safety guidelines).",
        },
        {
            q: "How do you ensure marketplace quality?",
            a: "We combine clear publishing requirements with ongoing improvements to listing standards, reviews, and reputation signals.",
        },
        {
            q: "Is Neural Nexus for businesses or individuals?",
            a: "Both. Individuals find high-quality AI assets, and teams use Neural Nexus to speed up delivery and reduce experimentation time.",
        },
    ];

    return (
        <div className="relative overflow-hidden">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                {/* Orbs */}
                <motion.div
                    aria-hidden
                    className="absolute -left-44 -top-36 h-[520px] w-[520px] rounded-full opacity-25 blur-[70px]"
                    style={{
                        background:
                            "radial-gradient(circle at 30% 30%, rgba(56,189,248,0.9), transparent 60%)",
                    }}
                    animate={reduce ? undefined : { y: [0, 18, 0] }}
                    transition={reduce ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    aria-hidden
                    className="absolute -right-48 top-28 h-[520px] w-[520px] rounded-full opacity-25 blur-[70px]"
                    style={{
                        background:
                            "radial-gradient(circle at 30% 30%, rgba(168,85,247,0.85), transparent 60%)",
                    }}
                    animate={reduce ? undefined : { y: [0, 18, 0] }}
                    transition={reduce ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                />

                {/* Grid */}
                <div
                    aria-hidden
                    className="absolute inset-0 opacity-25
            bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
            bg-[size:44px_44px]
            [mask-image:radial-gradient(60%_50%_at_50%_20%,black_55%,transparent_100%)]"
                />
            </div>

            <div className="relative mx-auto  px-4 sm:px-6 lg:px-8 py-14 md:py-20">
                {/* Intro + Image */}
                <motion.section {...fadeUp(0)}>


                    <div className="mt-6 grid gap-8 lg:grid-cols-2 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                                A modern marketplace for{" "}
                                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                    AI creators
                                </span>{" "}
                                & teams.
                            </h1>

                            <p className="mt-4 text-md md:text-md text-foreground/75 leading-relaxed">
                                Neural Nexus was founded on a simple principle: democratize access to AI. We’re building a secure,
                                high-signal marketplace where creators can ship and earn—and where teams can discover the right tools
                                to solve real problems.
                            </p>

                            <div className="mt-7 flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="/products"
                                    className="inline-flex items-center justify-center gap-2 rounded-[14px] px-4 py-3 font-bold
                    text-primary-foreground shadow-[0_16px_34px_rgba(0,0,0,0.25)]
                    bg-gradient-to-r from-primary to-accent transition-transform duration-200 hover:-translate-y-0.5"
                                >
                                    Explore Marketplace <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                                </Link>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-[14px] px-4 py-3 font-bold
                    border border-[hsl(var(--border)/0.60)] bg-[hsl(var(--background)/0.35)]
                    text-foreground/90 backdrop-blur transition-all duration-200 hover:-translate-y-0.5
                    hover:border-[hsl(var(--primary)/0.35)] hover:bg-[hsl(var(--background)/0.55)]
                    hover:shadow-[0_16px_34px_rgba(0,0,0,0.20)]"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        {/* Media Card */}
                        <motion.div {...fadeUp(0.12)}>
                            <div className="group relative overflow-hidden rounded-[18px] border border-[hsl(var(--border)/0.55)] bg-[hsl(var(--background)/0.35)] shadow-[0_18px_40px_rgba(0,0,0,0.20)]">
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-70"
                                    style={{
                                        background:
                                            "radial-gradient(650px 220px at 20% 0%, rgba(56,189,248,0.18), transparent 60%), radial-gradient(650px 220px at 85% 30%, rgba(168,85,247,0.15), transparent 62%)",
                                    }}
                                />
                                <Image
                                    src="/aiidea.png"
                                    alt="Neural Nexus marketplace preview"
                                    width={1400}
                                    height={900}
                                    priority
                                    className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Stats */}
                <motion.section className="mt-14 md:mt-16" {...fadeUp(0.18)}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {stats.map((s) => (
                            <div
                                key={s.label}
                                className="group relative overflow-hidden rounded-[18px] border border-[hsl(var(--border)/0.55)]
                  bg-[hsl(var(--background)/0.45)] backdrop-blur-xl p-4
                  transition-all duration-200 hover:-translate-y-0.5
                  hover:border-[hsl(var(--primary)/0.40)] hover:bg-[hsl(var(--background)/0.58)]
                  hover:shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
                            >
                                <div
                                    className="pointer-events-none absolute inset-[-1px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                                    style={{
                                        background:
                                            "radial-gradient(400px 180px at 30% 0%, rgba(56,189,248,0.22), transparent 60%), radial-gradient(380px 180px at 80% 20%, rgba(168,85,247,0.18), transparent 62%)",
                                    }}
                                />
                                <div className="relative text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                    {s.value}
                                </div>
                                <div className="relative mt-1 text-sm text-foreground/65">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Values + Image */}
                <motion.section className="mt-14 md:mt-20" {...fadeUp(0.26)}>
                    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
                            <p className="mt-2 text-foreground/70 max-w-2xl">
                                The principles that shape how we build, curate, and serve creators and customers.
                            </p>

                            <div className="mt-7 grid gap-4 md:grid-cols-2">
                                {values.map((v) => (
                                    <div
                                        key={v.title}
                                        className="group relative overflow-hidden rounded-[18px] border border-[hsl(var(--border)/0.55)]
                      bg-[hsl(var(--background)/0.45)] backdrop-blur-xl p-5
                      transition-all duration-200 hover:-translate-y-0.5
                      hover:border-[hsl(var(--primary)/0.40)] hover:bg-[hsl(var(--background)/0.58)]
                      hover:shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
                                    >
                                        <div
                                            className="pointer-events-none absolute inset-[-1px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                                            style={{
                                                background:
                                                    "radial-gradient(400px 180px at 30% 0%, rgba(56,189,248,0.22), transparent 60%), radial-gradient(380px 180px at 80% 20%, rgba(168,85,247,0.18), transparent 62%)",
                                            }}
                                        />
                                        <div className="relative flex items-start gap-4">
                                            <div
                                                className="flex h-[42px] w-[42px] items-center justify-center rounded-[14px]
                          border border-[hsl(var(--border)/0.55)] bg-[hsl(var(--background)/0.35)]
                          transition-transform duration-200 group-hover:-rotate-2 group-hover:scale-[1.03]
                          group-hover:border-[hsl(var(--primary)/0.35)]"
                                            >
                                                <Icons.CheckCircle className="h-6 w-6 text-primary" />
                                            </div>

                                            <div>
                                                <div className="text-lg font-semibold">{v.title}</div>
                                                <div className="mt-1 text-foreground/70 leading-relaxed">{v.desc}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <motion.div {...fadeUp(0.32)}>
                            <div className="group relative overflow-hidden rounded-[18px] border border-[hsl(var(--border)/0.55)] bg-[hsl(var(--background)/0.35)] shadow-[0_18px_40px_rgba(0,0,0,0.20)]">
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-70"
                                    style={{
                                        background:
                                            "radial-gradient(650px 220px at 20% 0%, rgba(56,189,248,0.18), transparent 60%), radial-gradient(650px 220px at 85% 30%, rgba(168,85,247,0.15), transparent 62%)",
                                    }}
                                />
                                <Image
                                    src="/aiidea.png"
                                    alt="Creators building AI products"
                                    width={1400}
                                    height={900}
                                    className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* How it works */}
                <motion.section className="mt-14 md:mt-20" {...fadeUp(0.36)}>
                    <h2 className="text-3xl md:text-4xl font-bold">How Neural Nexus Works</h2>
                    <p className="mt-2 text-foreground/70 max-w-2xl">
                        A streamlined flow that helps you discover, integrate, and ship faster—without chaos.
                    </p>

                    <div className="mt-7 grid gap-4 lg:grid-cols-3">
                        {steps.map((step, idx) => (
                            <div
                                key={step.title}
                                className="group relative overflow-hidden rounded-[18px] border border-[hsl(var(--border)/0.55)]
                  bg-[hsl(var(--background)/0.45)] backdrop-blur-xl p-5
                  transition-all duration-200 hover:-translate-y-0.5
                  hover:border-[hsl(var(--primary)/0.40)] hover:bg-[hsl(var(--background)/0.58)]
                  hover:shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
                            >
                                <div
                                    className="pointer-events-none absolute inset-[-1px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                                    style={{
                                        background:
                                            "radial-gradient(400px 180px at 30% 0%, rgba(56,189,248,0.22), transparent 60%), radial-gradient(380px 180px at 80% 20%, rgba(168,85,247,0.18), transparent 62%)",
                                    }}
                                />
                                <div className="relative inline-flex w-fit rounded-full border border-[hsl(var(--border)/0.55)] bg-[hsl(var(--background)/0.35)] px-3 py-1 text-sm font-extrabold tracking-widest text-foreground/55">
                                    {String(idx + 1).padStart(2, "0")}
                                </div>
                                <div className="relative mt-3 text-xl font-semibold">{step.title}</div>
                                <div className="relative mt-2 text-foreground/70 leading-relaxed">{step.desc}</div>
                                <div className="relative mt-6 h-px w-full bg-[linear-gradient(90deg,transparent,hsl(var(--border)/0.65),transparent)]" />
                                <div className="relative mt-4 text-sm text-foreground/60">Built for teams • creators • startups</div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Trust + Image */}
                <motion.section className="mt-14 md:mt-20" {...fadeUp(0.44)}>
                    <div className="grid gap-8 lg:grid-cols-2 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold">Trust, Safety & Quality</h2>
                            <p className="mt-2 text-foreground/70 max-w-xl">
                                A marketplace is only as strong as its standards. We design for clarity, confidence,
                                and reliability—so both buyers and sellers win.
                            </p>


                            <div className="mt-7 grid gap-4 md:grid-cols-2">
                                {trust.map((t) => (
                                    <div
                                        key={t.title}
                                        className="group relative overflow-hidden rounded-[18px] border border-[hsl(var(--border)/0.55)]
                      bg-[linear-gradient(180deg,hsl(var(--background)/0.55),hsl(var(--background)/0.35))]
                      backdrop-blur-xl p-5 transition-all duration-200 hover:-translate-y-0.5
                      hover:border-[hsl(var(--primary)/0.40)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
                                    >
                                        <div
                                            className="pointer-events-none absolute inset-[-1px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                                            style={{
                                                background:
                                                    "radial-gradient(400px 180px at 30% 0%, rgba(56,189,248,0.22), transparent 60%), radial-gradient(380px 180px at 80% 20%, rgba(168,85,247,0.18), transparent 62%)",
                                            }}
                                        />
                                        <div className="relative text-lg font-semibold">{t.title}</div>
                                        <div className="relative mt-2 text-foreground/70 leading-relaxed">{t.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <motion.div {...fadeUp(0.52)}>
                            <div className="group relative overflow-hidden rounded-[18px] border border-[hsl(var(--border)/0.55)] bg-[hsl(var(--background)/0.35)] shadow-[0_18px_40px_rgba(0,0,0,0.20)]">
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-70"
                                    style={{
                                        background:
                                            "radial-gradient(650px 220px at 20% 0%, rgba(56,189,248,0.18), transparent 60%), radial-gradient(650px 220px at 85% 30%, rgba(168,85,247,0.15), transparent 62%)",
                                    }}
                                />
                                <Image
                                    src="/aiidea.png"
                                    alt="Security and trust layer"
                                    width={1400}
                                    height={900}
                                    className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* FAQ */}
                <motion.section className="mt-14 md:mt-20" {...fadeUp(0.6)}>
                    <h2 className="text-3xl md:text-4xl font-bold">FAQs</h2>
                    <p className="mt-2 text-foreground/70 max-w-2xl">
                        Quick answers to common questions about the platform and marketplace.
                    </p>

                    <div className="mt-7 grid gap-3">
                        {faqs.map((f) => (
                            <details
                                key={f.q}
                                className="group rounded-[18px] border border-[hsl(var(--border)/0.55)] bg-[hsl(var(--background)/0.45)] backdrop-blur-xl
                  transition-all duration-200 hover:-translate-y-0.5 hover:border-[hsl(var(--primary)/0.40)]
                  hover:bg-[hsl(var(--background)/0.58)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.25)] overflow-hidden"
                            >
                                <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-4 select-none">
                                    <span className="font-semibold">{f.q}</span>
                                    <span
                                        className="h-9 w-9 shrink-0 rounded-[12px] border border-[hsl(var(--border)/0.55)] bg-[hsl(var(--background)/0.35)]
                      grid place-items-center font-extrabold text-foreground/70 transition-transform duration-200 group-open:rotate-45
                      group-open:border-[hsl(var(--primary)/0.35)]"
                                    >
                                        +
                                    </span>
                                </summary>
                                <div className="px-5 pb-5 text-foreground/70 leading-relaxed">{f.a}</div>
                            </details>
                        ))}
                    </div>
                </motion.section>

                {/* CTA */}
                <motion.section className="mt-14 md:mt-20" {...fadeUp(0.72)}>
                    <div
                        className="rounded-[22px] border border-[hsl(var(--border)/0.55)] bg-[hsl(var(--background)/0.55)]
              backdrop-blur-xl p-6 md:p-7 shadow-[0_18px_40px_rgba(0,0,0,0.22)]
              flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
                        style={{
                            background:
                                "radial-gradient(900px 260px at 10% 0%, rgba(56,189,248,0.22), transparent 60%), radial-gradient(820px 260px at 90% 20%, rgba(168,85,247,0.18), transparent 62%), hsl(var(--background)/0.55)",
                        }}
                    >
                        <div>
                            <h3 className="text-2xl md:text-3xl font-extrabold">Ready to build with AI—faster?</h3>
                            <p className="mt-2 text-foreground/70 max-w-xl">
                                Discover high-quality AI assets, ship with confidence, and join a marketplace designed for creators and teams.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <Link
                                href="/products"
                                className="inline-flex items-center justify-center gap-2 rounded-[14px] px-4 py-3 font-bold
                  text-primary-foreground shadow-[0_16px_34px_rgba(0,0,0,0.25)]
                  bg-gradient-to-r from-primary to-accent transition-transform duration-200 hover:-translate-y-0.5"
                            >
                                Start Exploring <span>→</span>
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-[14px] px-4 py-3 font-bold
                  border border-[hsl(var(--border)/0.60)] bg-[hsl(var(--background)/0.35)]
                  text-foreground/90 backdrop-blur transition-all duration-200 hover:-translate-y-0.5
                  hover:border-[hsl(var(--primary)/0.35)] hover:bg-[hsl(var(--background)/0.55)]
                  hover:shadow-[0_16px_34px_rgba(0,0,0,0.20)]"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}