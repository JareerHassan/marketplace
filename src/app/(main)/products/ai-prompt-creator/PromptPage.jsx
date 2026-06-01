"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Zap,
  Diamond,
  Plus,
  Minus,
  Download,
} from "lucide-react";
import { Play } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const COLORS = {
  brandNeon: "#ADFF2F",
  brandDark: "#05070A",
  brandGray: "#1A1D24",
  cardBg: "#0F1115",
  textMuted: "#94A3B8",
  accentBlue: "#8A92FF",
};

export default function LandingPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Har element ke liye common "Slide up" animation
  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      id: "01.",
      title: "AI-Powered Prompt Engineering",
      desc: "Create optimized prompts with smart guidance that improves clarity, context, and output quality.",
    },
    {
      id: "02.",
      title: "Fast Prompt Creation",
      desc: "Build high-quality prompts in minutes using a simple guided flow.",
    },
    {
      id: "03.",
      title: "No Complex Writing Skills Needed",
      desc: "Answer simple questions and let the platform structure your prompt professionally.",
    },
    {
      id: "04.",
      title: "Consistent AI Results",
      desc: "Use clear prompt frameworks to get more accurate, reliable, and repeatable AI outputs.",
    },
  ];

  const steps = [
    {
      id: "#01",
      title: "Sign Up & Add Idea",
      desc: "Create your account and enter your raw idea, task, or question.",
    },
    {
      id: "#02",
      title: "AI Prompt Structuring",
      desc: "Our system organizes your input into a clear prompt with goal, context, tone, format, and instructions.",
    },
    {
      id: "#03",
      title: "Copy & Use Prompt",
      desc: "Copy your optimized prompt and use it in ChatGPT, Gemini, Claude, or any other AI tool.",
    },
  ];

  const phoneFrontVariants = {
    hidden: { opacity: 0, x: -150, rotate: -30 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: -12,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        delay: 0.3,
      },
    },
  };

  const logos = [
    "https://templates.studioniskala.com/invemon/wp-content/uploads/sites/22/2025/08/iOasis.png",
    "https://templates.studioniskala.com/invemon/wp-content/uploads/sites/22/2025/08/Logo.png",
    "https://templates.studioniskala.com/invemon/wp-content/uploads/sites/22/2025/08/Stratifi.png",
    "https://templates.studioniskala.com/invemon/wp-content/uploads/sites/22/2025/08/Vector.png",
  ];

  const boxImage =
    "/assets/gpt.png";
  return (
    <>
      <main
        style={{ backgroundColor: COLORS.brandDark }}
        className="w-full overflow-x-hidden"
      >
        {/* --- HERO SECTION --- */}
        <section
          className="relative min-h-[90dvh] w-full flex items-center justify-center pt-40 pb-10"
          style={{
            backgroundImage: `url('/assets/ai-prompt.png')`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0"></div>

          <div className="relative z-10 mx-auto px-6 w-full">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-4">
              {/* Stats - Left */}
              <div className="order-3 lg:order-1 lg:col-span-2 flex flex-row lg:flex-col justify-between items-center lg:items-start gap-6 lg:border-l border-white/10 lg:pl-8">
                {[
                  { label: "Prompts Created", value: "100k+" },
                  { label: "User Rating", value: "4.8+" },
                  { label: "AI Use Cases", value: "50+" },
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <p className="text-[10px] uppercase tracking-widest mb-1 font-bold text-[#94A3B8]">
                      {stat.label}
                    </p>
                    <h3 className="text-xl lg:text-3xl font-black text-[#ADFF2F]">
                      {stat.value}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Mockup - Center */}
              <div className="relative order-1 lg:order-2 lg:col-span-5 flex justify-center items-center">
                <div className="absolute h-[300px] w-[300px] rounded-full opacity-10 blur-[100px] bg-[#ADFF2F]" />
                <div className="relative w-full max-w-[320px] lg:max-w-[450px]">
                  <img
                    src="/assets/ai-prompt-mockup.png"
                    alt="App"
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Content - Right */}
              <div className="order-2 lg:order-3 lg:col-span-5 text-center lg:text-left space-y-6">
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  <Badge className="bg-[#1A1D24] text-[#8A92FF] border-none px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Smart Prompt Creation
                  </Badge>
                  <Badge className="bg-[#1A1D24] text-[#ADFF2F] border-none px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Better AI Responses
                  </Badge>
                </div>
                <h1 className="text-4xl lg:text-[72px] font-black leading-[1] tracking-tighter text-white uppercase ">
                  AI Prompt Creator
                </h1>
                <p className="text-[#94A3B8] max-w-md mx-auto lg:mx-0">
                  Turn raw ideas into clear, structured, high-performing AI prompts using a guided AI-powered prompt creation system.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">

                  <Button className="rounded-full bg-[#ADFF2F] text-black px-10 h-14 font-black">
                    CREATE PROMPT
                  </Button>

                  <a
                    href="https://www.amazon.com/dp/B0GX2V64W3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="rounded-full border-white/10 bg-white/5 text-white px-10 h-14 backdrop-blur-sm"
                    >
                      TRY DEMO
                    </Button>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- TRUSTED LOGOS SECTION --- */}
        <section className="py-20 border-y border-white/5 relative z-10 bg-[#05070A]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Side: Real Logos */}
              <div className="w-full lg:w-1/3 text-center lg:text-left">
                <p className="text-white text-lg font-bold mb-8 uppercase tracking-tight ">
                  Trusted by creators, professionals, and businesses.
                </p>
                <div className="grid grid-cols-2 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                  {logos.map((logo, index) => (
                    <img
                      key={index}
                      src={logo}
                      alt={`Partner Logo ${index}`}
                      className="h-7 w-auto object-contain mx-auto lg:mx-0"
                    />
                  ))}
                </div>
              </div>

              {/* Right Side: The Box with Prompt Quality Image */}
              <div className="w-full lg:w-2/3 h-48 lg:h-40 rounded-[40px] overflow-hidden border border-white/10 relative group shadow-2xl">
                {/* Background Prompt Quality Image */}
                <img
                  src={boxImage}
                  alt="Prompt Quality Chart"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                />

                {/* Gradient Overlay for the "Blend" look */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ADFF2F]/20 via-transparent to-black/60" />

                {/* Content inside the box (Pulse lines over the image) */}
                <div className="relative z-10 flex items-center h-full px-10 justify-around">
                  <div className="animate-pulse h-1.5 w-20 bg-[#ADFF2F]/60 rounded-full shadow-[0_0_15px_#ADFF2F]" />
                  <div className="animate-pulse h-1.5 w-40 bg-blue-500/40 rounded-full delay-75" />
                  <div className="animate-pulse h-1.5 w-24 bg-white/30 rounded-full delay-150" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FEATURES GRID SECTION --- */}
        <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header Area */}
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
              <div className="space-y-4 max-w-2xl text-left">
                <div>
                  <Badge className="bg-[#ADFF2F]/10 text-[#ADFF2F] border border-[#ADFF2F]/20 px-4 py-1.5 rounded-full uppercase text-[11px] font-bold tracking-widest ">
                    Core Features
                  </Badge>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase ">
                  All-in-One AI Prompt Engineering Platform
                </h2>
              </div>
              <div>
                <a
                  href="https://www.amazon.com/dp/B0GX2V64W3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded-full bg-[#ADFF2F] text-black px-8 h-12 font-black">
                    SEE MORE
                  </Button>
                </a>
              </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
              {/* 1. Large AI Insights Card */}
              <div className="lg:col-span-7 bg-[#0F1115] border border-white/5 rounded-[40px] p-8 lg:p-12 relative overflow-hidden group">
                <div className="flex gap-4 mb-10">
                  {[Target, Zap, Diamond].map((Icon, idx) => (
                    <div
                      key={idx}
                      className="w-12 h-12 rounded-2xl bg-[#1A1D24] flex items-center justify-center text-[#ADFF2F]"
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  ))}
                </div>
                <div className="relative z-10 space-y-4 max-w-md text-left">
                  <h3 className="text-3xl font-black text-white leading-tight uppercase ">
                    AI-Powered Prompt Optimization
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    Transform rough ideas into clear, detailed, and goal-focused prompts. The smart prompt engine improves structure, clarity, and context so AI tools can deliver better results.
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-2/3 opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <img
                    src="/assets/ai-prompt-mockup.png"
                    className="w-full h-auto rotate-[-10deg]"
                  />
                </div>
              </div>

              {/* Smaller Cards Column */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {/* Card 1: Guided Prompt Creation */}
                <div className="flex-1 bg-[#0F1115] border border-white/5 rounded-[40px] p-8 relative overflow-hidden group min-h-[220px]">
                  <div className="relative z-20 text-left">
                    {/* <Badge className="bg-[#8A92FF]/10 text-[#8A92FF] mb-6 uppercase text-[10px] font-bold  border-none">Updated</Badge> */}
                    <h3 className="text-xl font-black text-white uppercase  leading-tight">
                      Step-by-Step Prompt Creation
                    </h3>
                    <p className="text-sm text-[#94A3B8] mt-2 font-medium">
                      Create effective prompts through a simple guided flow. Add your goal, audience, tone, format, and instructions without needing prompt engineering skills.
                    </p>
                  </div>
                  {/* Background Image Integration */}
                  <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                    <img
                      src="https://templates.studioniskala.com/invemon/wp-content/uploads/sites/22/2025/08/currency-YCG8AHH-2048x1367.jpg"
                      className="w-full h-full object-cover"
                      alt="currency"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-transparent to-transparent" />
                  </div>
                </div>

                {/* Card 2: Multi-Asset Support (With Mockup overlap) */}
                <div className="flex-1 bg-[#0F1115] border border-white/5 rounded-[40px] p-8 relative overflow-hidden group min-h-[220px]">
                  <div className="relative z-20 text-left">
                    {/* <Badge className="bg-[#ADFF2F]/10 text-[#ADFF2F] mb-6 uppercase text-[10px] font-bold  border-none">Asset</Badge> */}
                    <h3 className="text-xl font-black text-white uppercase  leading-tight">
                      Better AI Response Quality
                    </h3>
                    <p className="text-sm text-[#94A3B8] mt-2 font-medium">
                      Reduce vague, incomplete, or irrelevant AI outputs with structured prompts designed to improve accuracy, consistency, and usefulness.
                    </p>
                  </div>
                  {/* Mockup Overlap integration */}
                  <div className="absolute -bottom-12 -right-12 w-48 opacity-40 group-hover:opacity-100 transition-all duration-700 rotate-[15deg]">
                    <img
                      src="/assets/ai-prompt-mockup.png"
                      className="w-full h-auto"
                      alt="mockup"
                    />
                  </div>
                  <div className="absolute right-0 bottom-0 w-32 h-32 bg-[#ADFF2F] blur-[80px] opacity-10 group-hover:opacity-20 transition-all" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Glow Background */}
        <div className="fixed top-0 right-0 w-1/4 h-full bg-gradient-to-l from-[#ADFF2F]/5 to-transparent pointer-events-none -z-10" />
      </main>

      <section className="py-16 px-6 md:px-20 bg-white font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Top Header Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16"
          >
            <motion.div variants={fadeInUp} className="md:w-1/3">
              <span className="px-4 py-1 text-black border border-lime-400 rounded-full text-sm font-medium">
                About us
              </span>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:w-2/3">
              <p className="text-gray-600 text-lg leading-relaxed">
                Founded by a team of AI enthusiasts, developers, and productivity-focused creators, our mission is to make prompt engineering simple for everyone. We combine artificial intelligence, structured workflows, and user-friendly design to help people get better results from AI without wasting time rewriting prompts.
              </p>
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            {/* Left Side: Image with Scale-in effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/assets/ai-prompt-mockup.png"
                  alt="Our Team"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Right Side: Title & Stats */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <motion.div variants={fadeInUp}>
                  <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                    Empowering Everyone <br /> to Use AI Better
                  </h2>
                  <a
                    href="https://www.amazon.com/dp/B0GX2V64W3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 bg-[#B4EB3F] hover:bg-[#a3d635] text-black font-bold py-4 px-8 rounded-xl transition-colors shadow-lg shadow-lime-100"
                    >
                      Learn More
                    </motion.button>
                  </a>
                </motion.div>

                {/* Video Button with Pulse Animation */}
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-4 cursor-pointer group"
                >
                  <div className="w-16 h-16 bg-[#0B1222] rounded-full flex items-center justify-center relative">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute inset-0 rounded-full border-2 border-[#B4EB3F]"
                    ></motion.div>
                    <Play className="text-white fill-white ml-1" size={24} />
                  </div>
                  <span className="font-medium text-gray-700">Watch video</span>
                </motion.div>
              </motion.div>

              {/* Stats Bar with Staggered children */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="bg-gray-50 rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
              >
                {[
                  { label: "People joined", value: "100+" },
                  { label: "Prompts Generated", value: "250k+" },
                  { label: "App Rating", value: "4.5+" },
                  { label: "Use Cases Supported", value: "50+" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex flex-col gap-1"
                  >
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <h3 className="text-3xl font-bold text-[#B4EB3F]">
                      {stat.value}
                    </h3>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className=" px-6 md:px-20 bg-white font-sans">
        <div>
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
            <div className="flex flex-col gap-6 md:w-2/3">
              <span className="w-fit px-4 py-1 border border-lime-400 text-black rounded-full text-sm font-medium">
                Why choose us
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                Why Choose AI Prompt Creator?
              </h2>
            </div>
            <div className="md:w-1/4 pt-10">
              <p className="text-gray-500 text-sm leading-relaxed">
                We use guided prompt engineering and smart structure to help users get more accurate, useful, and reliable AI responses.
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Accordion List */}
            <div className="flex flex-col border-t border-gray-100">
              {features.map((item, index) => (
                <div key={index} className="border-b border-gray-100">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                    className="w-full py-6 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-gray-900 font-medium">
                        {item.id}
                      </span>
                      <span className="text-xl font-semibold text-gray-900 group-hover:text-[#B4EB3F] transition-colors">
                        {item.title}
                      </span>
                    </div>
                    {openIndex === index ? (
                      <Minus className="text-[#B4EB3F]" size={20} />
                    ) : (
                      <Plus className="text-[#B4EB3F]" size={20} />
                    )}
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pl-12 text-gray-500 max-w-md">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right: Image Gallery & Stats Card */}
            {/* Right: Images Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
              {/* LEFT — BIG IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="rounded-3xl overflow-hidden h-[420px]"
              >
                <img
                  src="/assets/ai-prompt-mockup.png"
                  className="w-full h-full object-cover"
                  alt="Tech Analysis"
                />
              </motion.div>

              {/* RIGHT — ONE COLUMN (two items) */}
              <div className="flex flex-col gap-5">
                {/* Small Image */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="rounded-3xl overflow-hidden h-[200px]"
                >
                  <img
                    src="/assets/ai-img1.webp"
                    className="w-full h-full object-cover"
                    alt="Expert Team"
                  />
                </motion.div>

                {/* Stats Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="bg-[#0B1222] rounded-3xl p-6 flex flex-col justify-between h-[200px]"
                >
                  <div>
                    <p className="text-[#B4EB3F] text-xs uppercase tracking-wider">
                      Downloads
                    </p>
                    <h3 className="text-white text-4xl font-bold mt-2">
                      5000+
                    </h3>
                  </div>

                  <a
                    href="https://www.amazon.com/dp/B0GX2V64W3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-fit text-white text-xs border border-gray-700 rounded-full px-4 py-2 hover:bg-white hover:text-black transition">
                      Start Creating now
                    </button>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-20 bg-white font-sans">
        <div>
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
            <div className="flex flex-col gap-6 md:w-2/3">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="w-fit px-4 py-1 border border-lime-400 rounded-full text-sm font-medium text-black"
              >
                How It Work
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight"
              >
                From Idea to Perfect Prompt in Minutes
              </motion.h2>
            </div>
            <div className="md:w-1/4 pt-10">
              <p className="text-gray-500 text-sm leading-relaxed">
                Quickly turn your thoughts into powerful prompts with simple guided steps and smart AI optimization.
              </p>
            </div>
          </div>

          {/* Steps and Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step Cards */}
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 },
                  },
                }}
                className="bg-[#F3F4F6] rounded-3xl p-8 flex flex-col  justify-between min-h-[300px] relative group overflow-hidden"
              >
                <div className="flex justify-between items-start ">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  {/* <span className="text-4xl font-bold text-gray-200 absolute top-6 right-8 group-hover:text-gray-300 transition-colors">
                        {step.id}
                      </span> */}
                </div>

                <a
                  href="https://www.amazon.com/dp/B0GX2V64W3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-fit mt-8 bg-[#B4EB3F] hover:bg-[#a3d635] text-black text-sm font-bold py-3 px-6 rounded-xl transition-all">
                    Get Started
                  </button>
                </a>
              </motion.div>
            ))}

            {/* Video Tutorial Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative rounded-3xl overflow-hidden min-h-[320px] group cursor-pointer"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src="/assets/ai-prompt-mockup.png"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Tutorial Thumbnail"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              </div>

              {/* Play Button & Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 bg-[#B4EB3F] rounded-full flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border border-white/30 scale-125 animate-pulse"></div>
                  <Play className="text-black fill-black ml-1" size={24} />
                </div>
                <span className="text-white font-medium">Watch Tutorial</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[650px]  overflow-hidden rounded-[40px] mx-4 md:mx-10 my-20">
        {/* Background Shape Image */}

        <div className="max-w-7xl mx-auto px-8 md:px-20  relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs border border-white/20">
                  <div className="w-4 h-4 bg-indigo-500 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                  Smart Prompt Creation
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs border border-white/20">
                  <div className="w-4 h-4 bg-lime-400 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  </div>
                  Better AI Responses
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-white leading-[1.1]">
                Creators grow <br /> productivity with our <br /> guided prompt platform.
              </h2>

              <div className="flex flex-wrap gap-4 pt-4">

                <a
                  href="https://www.amazon.com/dp/B0GX2V64W3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#B4EB3F] hover:bg-[#a3d635] text-black font-bold py-4 px-8 rounded-2xl flex items-center gap-2 transition-all shadow-lg shadow-lime-400/20">
                    Download Apps <Download size={20} />
                  </button>
                </a>

                <a
                  href="https://www.amazon.com/dp/B0GX2V64W3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-2xl border border-white/20 transition-all backdrop-blur-sm">
                    Demo Apps
                  </button>
                </a>

              </div>
            </div>

            {/* Right Content: Mobile Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative z-20 w-[90%] md:w-[550px]">
                <img
                  src="/assets/ai-prompt-mockup.png"
                  alt="Mobile App Mockup"
                  className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={containerRef}
        className="relative min-h-[600px] w-full bg-[#0a0c1a] overflow-hidden px-6 lg:px-20 flex items-center font-body"
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Phone Mockups */}
          <motion.div
            className="relative h-[400px] md:h-[500px] flex justify-center lg:justify-start"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Back Phone (The White/Green Interface) */}
            <motion.div
              className="absolute left-20 md:left-32 top-0 w-[260px] md:w-[320px] aspect-[9/19] bg-[#f8f9fa] rounded-[3rem] border-[8px] border-[#1e2130] shadow-2xl z-10 transform -rotate-6 scale-95 overflow-hidden"
              variants={phoneVariants}
              whileHover={{ scale: 0.98, rotate: -4 }}
            >
              {/* Simple UI Mockup Internal */}
              <div className="p-6 text-slate-900">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-xs font-semibold text-gray-400">
                    Welcome back,
                  </div>
                  <div className="h-2 w-6 bg-gray-200 rounded-full"></div>
                </div>
                <div className="text-xl font-bold mb-4">Alvin Kemit</div>
                <div className="w-full h-10 bg-gray-100 rounded-xl mb-6"></div>
                <div className="p-4 bg-[#ccff00] rounded-2xl h-40 flex flex-col justify-between">
                  <div className="text-sm font-medium">Prompt Score</div>
                  <div className="text-2xl font-bold">98%</div>
                </div>
              </div>
            </motion.div>

            {/* Front Phone (The Dark Chart Interface) */}
            <motion.div
              className="absolute left-0 top-10 w-[260px] md:w-[320px] aspect-[9/19] bg-[#1c1e2d] rounded-[3rem] border-[8px] border-[#2a2d3d] shadow-2xl z-20 transform -rotate-12 overflow-hidden"
              variants={phoneFrontVariants}
              whileHover={{ scale: 1.02, rotate: -10 }}
            >
              {/* Dark UI Mockup Internal */}
              <div className="p-6 text-white">
                <div className="text-sm font-medium mb-1">Prompt</div>
                <div className="text-[10px] text-gray-500 mb-4">SEO Blog Prompt</div>
                <div className="flex gap-2 mb-6">
                  <div className="bg-white/10 px-3 py-1 rounded-full text-[10px]">
                    Live AI
                  </div>
                  <div className="bg-white/5 px-3 py-1 rounded-full text-[10px]">
                    Assistant
                  </div>
                </div>
                <div className="h-32 w-full bg-gradient-to-t from-[#ccff00]/20 to-transparent border-b border-[#ccff00]/50 mt-10">
                  {/* Simplified Chart Path */}
                  <svg
                    viewBox="0 0 100 50"
                    className="w-full h-full stroke-[#ccff00] fill-none stroke-2"
                  >
                    <path d="M0 40 L10 35 L20 42 L30 20 L40 25 L50 10 L60 15 L70 5 L80 12 L100 0" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div
            className="z-30 max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
              variants={itemVariants}
            >
              Ready to Get Better AI Results?
            </motion.h2>
            <motion.p
              className="text-[#6b6c75] text-lg md:text-xl mb-10 max-w-md"
              variants={itemVariants}
            >
              Join thousands of users creating clear, structured, and high-performing AI prompts with AI Prompt Creator.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <a
                href="https://www.amazon.com/dp/B0GX2V64W3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="bg-[#ccff00] hover:bg-[#b4e600] text-black font-bold py-4 px-8 rounded-2xl transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Create Prompt Now
                </motion.button>
              </a>

              <a
                href="https://www.amazon.com/dp/B0GX2V64W3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="bg-[#1e2130] hover:bg-[#2a2d3d] text-white font-medium py-4 px-8 rounded-2xl transition-all border border-white/10"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download the App
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Vignette Overlay */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0c1a] to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1 }}
        ></motion.div>
      </section>
    </>
  );
}