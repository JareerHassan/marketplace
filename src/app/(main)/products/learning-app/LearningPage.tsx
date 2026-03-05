'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Wallet, PieChart, ArrowUpRight, Target, Zap, Diamond,
  BarChart3, Clock, LayoutGrid, Plus, Minus, Download, CreditCard, DollarSign, Coffee, Home,
} from 'lucide-react';
import bgimg from '../../../../../public/assets/bg-img.jpeg';
import GrowSection from '@/components/growsection';
import TestimonialsSection from '@/components/testimonials';
import PricingSection from '@/components/pricingsection';
import ProductOverview from '@/components/productpreview';
import { Play } from 'lucide-react';
import { motion, AnimatePresence, useInView, Variants } from 'framer-motion';


const COLORS = {
  brandNeon: '#ADFF2F',
  brandDark: '#05070A',
  brandGray: '#1A1D24',
  cardBg: '#0F1115',
  textMuted: '#94A3B8',
  accentBlue: '#8A92FF',
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
      transition: { duration: 0.6, ease: "easeOut" }
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
      title: "AI-Powered Explanations",
      desc: " Get instant clarification on difficult topics."
    },
    {
      id: "02.",
      title: "Adaptive Quizzes",
      desc: " Questions adjust to your skill level."
    },
    {
      id: "03.",
      title: "Certification-Focused Practice",
      desc: " Train with AI exam simulations."
    },
    {
      id: "04.",
      title: "Responsible Learning",
      desc: " Focused on legal, ethical cybersecurity defense."
    }
  ];

  const steps = [
    {
      id: "#01",
      title: "Sign Up & Choose Level",
      desc: " Select beginner, intermediate, or advanced learning path.",
    },
    {
      id: "#02",
      title: "Learn Structured Modules",
      desc: " Complete guided lessons with AI explanations.",
    },
    {
      id: "#03",
      title: "Take AI Quizzes & Exams",
      desc: " Test knowledge and strengthen weak areas automatically.",
    }
  ];

  const featurePanels = [
    {
      icon: <CreditCard className="w-8 h-8 text-[#ccff00]" />,
      title: "Beginner to Advanced Roadmap",
      description: "Follow a structured curriculum designed to build strong cybersecurity foundations."
    },
    {
      icon: <PieChart className="w-8 h-8 text-[#ccff00]" />,
      title: "AI Exam Simulator",
      description: "Practice under simulated test conditions with timed AI-powered exams."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#ccff00]" />,
      title: "Performance Analytics",
      description: "Understand strengths and weaknesses with detailed analytics and improvement suggestions."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#ccff00]" />,
      title: "Continuous Updates",
      description: "Stay updated with new cybersecurity trends, vulnerabilities, and defensive techniques."
    }
  ];

  const plans = [
    {
      name: "Free Plan",
      icon: <Coffee size={20} />,
      price: "0",
      period: "/month*",
      subtext: "Free 1 month",
      features: [
        "Start investing with as little as $1",
        "Access to basic portfolios",
        "Real-time market data",
        "Bank-grade security"
      ],
      highlight: false
    },
    {
      name: "Pro Plan",
      icon: <Home size={20} />,
      price: "9.99",
      period: "/month*",
      subtext: "*Paid annually at $280/year",
      features: [
        "Everything in Free Plan",
        "Advanced portfolio analytics",
        "AI-powered investment recommendations",
        "Priority customer support"
      ],
      highlight: true
    },
    {
      name: "Premium Plan",
      icon: <BarChart3 size={20} />,
      price: "19.99",
      period: "/month*",
      subtext: "*Paid annually at $380/year",
      features: [
        "Everything in Pro Plan",
        "Unlimited auto-invest strategies",
        "Exclusive expert insights & reports",
        "Early access to new features"
      ],
      highlight: false
    },
    {
      name: "Elite Plan",
      icon: <LayoutGrid size={20} />,
      price: "24.99",
      period: "/month*",
      subtext: "*Paid annually at $510/year",
      features: [
        "Everything in Pro Plan",
        "Dedicated financial advisor",
        "Early access to new features",
        "VIP community for investors"
      ],
      highlight: false
    }
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
    'https://templates.studioniskala.com/invemon/wp-content/uploads/sites/22/2025/08/iOasis.png',
    'https://templates.studioniskala.com/invemon/wp-content/uploads/sites/22/2025/08/Logo.png',
    'https://templates.studioniskala.com/invemon/wp-content/uploads/sites/22/2025/08/Stratifi.png',
    'https://templates.studioniskala.com/invemon/wp-content/uploads/sites/22/2025/08/Vector.png'
  ];

  const boxImage = 'https://templates.studioniskala.com/invemon/wp-content/uploads/sites/22/2025/08/volatilit-KEUW82N.jpg';
  return (
    <>
      <main style={{ backgroundColor: COLORS.brandDark }} className="w-full overflow-x-hidden">

        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[90dvh]  w-full flex items-center justify-center pt-40 pb-10" style={{ backgroundImage: `url('/assets/learning-app.png')`, backgroundSize: 'cover', }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

          </div>

          <div className="relative z-10 mx-auto px-6 w-full">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-4">

              {/* Stats - Left */}
              <div
                className="order-3 lg:order-1 lg:col-span-2 flex flex-row lg:flex-col justify-between items-center lg:items-start gap-6 lg:border-l border-white/10 lg:pl-8"
              >
                {[
                  { label: " Active Students", value: "100k+" },
                  { label: "App Rating", value: "4.9+" },
                  { label: "Countries Learning", value: "50+" }
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <p className="text-[10px] uppercase tracking-widest mb-1 font-bold text-[#94A3B8]">{stat.label}</p>
                    <h3 className="text-xl lg:text-3xl font-black text-[#ADFF2F]">{stat.value}</h3>
                  </div>
                ))}
              </div>

              {/* Mockup - Center */}
              <div
                className="relative order-1 lg:order-2 lg:col-span-5 flex justify-center items-center"
              >
                <div className="absolute h-[300px] w-[300px] rounded-full opacity-10 blur-[100px] bg-[#ADFF2F]" />
                <div className="relative w-full max-w-[320px] lg:max-w-[450px]">
                  <img src="/assets/mobile.png" alt="App" className="w-full h-auto drop-shadow-2xl" />
                </div>
              </div>

              {/* Content - Right */}
              <div
                className="order-2 lg:order-3 lg:col-span-5 text-center lg:text-left space-y-6"
              >
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  <Badge className="bg-[#1A1D24] text-[#8A92FF] border-none px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">Master Cybersecurity</Badge>
                  <Badge className="bg-[#1A1D24] text-[#ADFF2F] border-none px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">AI-Powered Learning</Badge>
                </div>
                <h2 className="text-4xl lg:text-[72px] font-black leading-[1] tracking-tighter text-white uppercase ">
                  Ethical Hacking Learning App
                </h2>
                <p className="text-[#94A3B8] max-w-md mx-auto lg:mx-0">
                  Learn ethical hacking the smart way. Practice with AI quizzes. Test your skills with intelligent exams. Build real cybersecurity knowledge step by step.               </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button className="rounded-full bg-[#ADFF2F] text-black px-10 h-14 font-black">START LEARNING</Button>
                  <Button variant="outline" className="rounded-full border-white/10 bg-white/5 text-white px-10 h-14 backdrop-blur-sm">TRY DEMO MODE</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- TRUSTED LOGOS SECTION --- */}
        <section
          className="py-20 border-y border-white/5 relative z-10 bg-[#05070A]"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

              {/* Left Side: Real Logos */}
              <div className="w-full lg:w-1/3 text-center lg:text-left">
                <p className="text-white text-lg font-bold mb-8 uppercase tracking-tight ">
                  Trusted by thousands of companies.
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

              {/* Right Side: The Box with Volatilit Image */}
              <div
                className="w-full lg:w-2/3 h-48 lg:h-40 rounded-[40px] overflow-hidden border border-white/10 relative group shadow-2xl"
              >
                {/* Background Volatility Image */}
                <img
                  src={boxImage}
                  alt="Volatility Chart"
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
            <div
              className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8"
            >
              <div className="space-y-4 max-w-2xl text-left">
                <div>
                  <Badge className="bg-[#ADFF2F]/10 text-[#ADFF2F] border border-[#ADFF2F]/20 px-4 py-1.5 rounded-full uppercase text-[11px] font-bold tracking-widest ">Core Features</Badge>
                </div>
                <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] uppercase ">
                  All-in-One Ethical Hacking Learning Platform
                </h2>
              </div>
              <div>
                <Button className="rounded-full bg-[#ADFF2F] text-black px-8 h-12 font-black">SEE MORE</Button>
              </div>
            </div>

            {/* Grid Layout */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
            >
              {/* 1. Large AI Insights Card */}
              <div
                className="lg:col-span-7 bg-[#0F1115] border border-white/5 rounded-[40px] p-8 lg:p-12 relative overflow-hidden group"
              >
                <div className="flex gap-4 mb-10">
                  {[Target, Zap, Diamond].map((Icon, idx) => (
                    <div key={idx} className="w-12 h-12 rounded-2xl bg-[#1A1D24] flex items-center justify-center text-[#ADFF2F]">
                      <Icon className="w-5 h-5" />
                    </div>
                  ))}
                </div>
                <div className="relative z-10 space-y-4 max-w-md text-left">
                  <h3 className="text-3xl font-black text-white leading-tight uppercase ">AI-Powered Learning Modules</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">Structured lessons covering cybersecurity fundamentals, networking basics, Linux essentials, web security, penetration testing concepts, and vulnerability analysis.</p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-2/3 opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <img src="https://templates.studioniskala.com/invemon/wp-content/uploads/sites/22/2025/08/Phone-Mockup-2-B2GNQEM.png" className="w-full h-auto rotate-[-10deg]" />
                </div>
              </div>

              {/* Smaller Cards Column */}
              <div className="lg:col-span-5 flex flex-col gap-6">

                {/* Card 1: Real-Time Market Data (With Currency Image) */}
                <div
                  className="flex-1 bg-[#0F1115] border border-white/5 rounded-[40px] p-8 relative overflow-hidden group min-h-[220px]"
                >
                  <div className="relative z-20 text-left">
                    {/* <Badge className="bg-[#8A92FF]/10 text-[#8A92FF] mb-6 uppercase text-[10px] font-bold  border-none">Updated</Badge> */}
                    <h3 className="text-xl font-black text-white uppercase  leading-tight">AI Smart Quizzes</h3>
                    <p className="text-sm text-[#94A3B8] mt-2 font-medium">The system analyzes your answers and adjusts difficulty based on your performance. Weak areas are automatically identified and reinforced.</p>
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
                <div
                  className="flex-1 bg-[#0F1115] border border-white/5 rounded-[40px] p-8 relative overflow-hidden group min-h-[220px]"
                >
                  <div className="relative z-20 text-left">
                    {/* <Badge className="bg-[#ADFF2F]/10 text-[#ADFF2F] mb-6 uppercase text-[10px] font-bold  border-none">Asset</Badge> */}
                    <h3 className="text-xl font-black text-white uppercase  leading-tight">AI-Based Practice Exams</h3>
                    <p className="text-sm text-[#94A3B8] mt-2 font-medium">Prepare for real-world cybersecurity certifications with AI-generated mock exams.
                      Simulated exam environments help you build confidence and improve problem-solving speed.
                    </p>
                  </div>
                  {/* Mockup Overlap integration */}
                  <div className="absolute -bottom-12 -right-12 w-48 opacity-40 group-hover:opacity-100 transition-all duration-700 rotate-[15deg]">
                    <img
                      src="https://templates.studioniskala.com/invemon/wp-content/uploads/sites/22/2025/08/Phone-Mockup-2-B2GNQEM.png"
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
                Founded by cybersecurity professionals and AI engineers, our mission is to make ethical hacking education structured, accessible, and responsible.
                We combine artificial intelligence, interactive quizzes, and real-world cybersecurity knowledge to create a learning experience that is practical and effective.


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
                  src="https://templates.studioniskala.com/invemon/wp-content/uploads/sites/22/2025/08/wins-FHYGRXJ.jpg"
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
                    Empowering the Next Generation of Cybersecurity Professionals
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 bg-[#B4EB3F] hover:bg-[#a3d635] text-black font-bold py-4 px-8 rounded-xl transition-colors shadow-lg shadow-lime-100"
                  >
                    Learn More
                  </motion.button>
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
                  { label: "Students Joined", value: "100k+" },
                  { label: "Countries Served", value: "50+" },
                  { label: " Average Rating", value: "4.9+" },
                  { label: "Countries Served", value: "50+" }
                ].map((stat, index) => (
                  <motion.div  
                   key={index} variants={fadeInUp}   className="flex flex-col gap-1">
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <h3 className="text-3xl font-bold text-[#B4EB3F]">{stat.value}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className=" px-6 md:px-20 bg-white font-sans">
        <div >

          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
            <div className="flex flex-col gap-6 md:w-2/3">
              <span className="w-fit px-4 py-1 border border-lime-400 text-black rounded-full text-sm font-medium">
                Why choose us
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                Why Choose Our Ethical Hacking App?

              </h2>
            </div>
            <div className="md:w-1/4 pt-10">
              <p className="text-gray-500 text-sm leading-relaxed">
                Learning ethical hacking should be guided, ethical, and practica              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: Accordion List */}
            <div className="flex flex-col border-t border-gray-100">
              {features.map((item, index) => (
                <div key={index} className="border-b border-gray-100">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full py-6 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-gray-900 font-medium">{item.id}</span>
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
                  src="https://templates.studioniskala.com/invemon/wp-content/uploads/sites/22/2025/08/part-of-9ES8348.jpg"
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
                    src="https://templates.studioniskala.com/invemon/wp-content/uploads/sites/22/2025/08/moder-HL9BTHH-1536x1024.jpg"
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
                      Assets Managed
                    </p>
                    <h3 className="text-white text-4xl font-bold mt-2">$250B</h3>
                  </div>

                  <button className="w-fit text-white text-xs border border-gray-700 rounded-full px-4 py-2 hover:bg-white hover:text-black transition">
                    Start Investing now
                  </button>
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
              From Beginner to Cybersecurity Skilled in Steps

              </motion.h2>
            </div>
            <div className="md:w-1/4 pt-10">
              <p className="text-gray-500 text-sm leading-relaxed">
                Quickly fix issues with smart AI guidance and instant insights.
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
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className="bg-[#F3F4F6] rounded-3xl p-8 flex flex-col  justify-between min-h-[300px] relative group overflow-hidden"
              >
                <div className="flex justify-between items-start ">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  {/* <span className="text-4xl font-bold text-gray-200 absolute top-6 right-8 group-hover:text-gray-300 transition-colors">
                        {step.id}
                      </span> */}
                </div>


                <button className="w-fit mt-8 bg-[#B4EB3F] hover:bg-[#a3d635] text-black text-sm font-bold py-3 px-6 rounded-xl transition-all">
                  Get Started
                </button>
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
                  src="https://templates.studioniskala.com/invemon/wp-content/uploads/sites/22/2025/08/moder-HL9BTHH-1536x1024.jpg"
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
        <div className="absolute inset-0 -z-10 bg-[url('/assets/bg-img2.png')] bg-cover bg-center bg-no-repeat" />

        <div className="max-w-7xl mx-auto px-8 md:px-20 py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs border border-white/20">
                  <div className="w-4 h-4 bg-indigo-500 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                  Financial Freedom
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs border border-white/20">
                  <div className="w-4 h-4 bg-lime-400 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  </div>
                  Investment
                </span>
              </div>

              <h2
                className="text-5xl md:text-7xl font-bold text-white leading-[1.1]"
              >
                Investors grow <br /> wealth on our <br /> secure platform.
              </h2>

              <div className="flex flex-wrap gap-4 pt-4">
                <button

                  className="bg-[#B4EB3F] hover:bg-[#a3d635] text-black font-bold py-4 px-8 rounded-2xl flex items-center gap-2 transition-all shadow-lg shadow-lime-400/20"
                >
                  Download Apps <Download size={20} />
                </button>

                <button

                  className="bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-2xl border border-white/20 transition-all backdrop-blur-sm"
                >
                  Demo Apps
                </button>
              </div>
            </div>

            {/* Right Content: Mobile Mockup */}
            <div
              className="relative flex justify-center lg:justify-end"
            >
              <div
                className="relative z-20 w-[90%] md:w-[550px]"
              >
                <img
                  src="/assets/mobile2.png"
                  alt="Mobile App Mockup"
                  className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section ref={containerRef} className="w-full bg-white py-24 px-6 md:px-12 lg:px-20 font-body">
        <div className="max-w-[1400px] mx-auto">

          {/* Header Section */}
          <motion.div
            className="text-center mb-20 flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="inline-block px-5 py-2 border border-[#ccff00] rounded-full text-[13px] font-bold text-[#1a1c29] mb-6 uppercase tracking-wider"
              variants={itemVariants}
            >
              Our Product
            </motion.div>
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-[#1a1c29] tracking-tight leading-[1.1] max-w-3xl"
              variants={itemVariants}
            >
            Your Complete Ethical Hacking Learning Platform

            </motion.h2>
            <motion.p
              className="text-[#6b6c75] mt-6 text-xl font-medium max-w-2xl mx-auto"
              variants={itemVariants}
            >
             Everything you need to understand cybersecurity — inside one powerful mobile app.

            </motion.p>
          </motion.div>

          {/* 3-Column Layout */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >

            {/* Left Column */}
            <motion.div className="space-y-8" variants={containerVariants}>
              {featurePanels.slice(0, 2).map((panel, index) => (
                <motion.div
                  key={index}
                  className="bg-[#f8f9fa] p-12 rounded-[3rem] flex flex-col items-center text-center group hover:shadow-lg transition-all"
                  variants={cardVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="bg-[#1a1c29] p-5 rounded-2xl mb-8 group-hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {panel.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#1a1c29] mb-4">{panel.title}</h3>
                  <p className="text-[#6b6c75] leading-relaxed text-[17px] font-medium max-w-[280px]">{panel.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Center Column (Phone Mockup) */}
            <motion.div
              className="relative group mx-auto"
              variants={phoneVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Dark Container behind phone */}
              <div className="bg-[#0f111a] rounded-[3.5rem] w-full max-w-[380px] aspect-[9/18.5] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[10px] border-black overflow-hidden relative">

                {/* Phone Content Image */}
                <img
                  src="https://templates.studioniskala.com/invemon/wp-content/uploads/sites/22/2025/08/Phone-Mockup-2-B2GNQEM.png"
                  alt="Investment App UI"
                  className="w-full h-full object-cover rounded-[2.5rem]"
                />

                {/* Floating UI Elements (Absolute positions matching reference) */}
                <motion.div
                  className="absolute top-[20%] left-[-10%] bg-[#ccff00] text-black text-2xl font-black px-5 py-2 rounded-full rotate-[12deg] shadow-2xl"
                  variants={floatingVariants}
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ scale: 1.1, rotate: 15 }}
                >
                  +$8,000.00
                </motion.div>

                <motion.div
                  className="absolute top-[35%] left-[10%] bg-black/40 backdrop-blur-xl text-white text-[13px] font-bold px-4 py-2 rounded-full flex items-center gap-2 border border-white/10"
                  variants={floatingVariants}
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 1.2 }}
                >
                  <Plus size={14} className="text-[#ccff00]" /> Watchlist
                </motion.div>

                <motion.div
                  className="absolute bottom-[25%] right-[-10%] bg-[#ccff00] text-black text-2xl font-black px-5 py-2 rounded-full -rotate-[10deg] shadow-2xl"
                  variants={floatingVariants}
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 1.4 }}
                  whileHover={{ scale: 1.1, rotate: -12 }}
                >
                  +$15,100.80
                </motion.div>

                <motion.div
                  className="absolute bottom-[40%] right-[10%] bg-[#1a1c29] p-4 rounded-2xl shadow-2xl border border-white/5"
                  variants={floatingVariants}
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 1.6 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <DollarSign className="w-8 h-8 text-[#ccff00]" />
                </motion.div>

                {/* Top Profile Avatar */}
                <motion.div
                  className="absolute top-8 right-8 w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-lg"
                  variants={floatingVariants}
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 1.8 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" alt="User" />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div className="space-y-8" variants={containerVariants}>
              {featurePanels.slice(2, 4).map((panel, index) => (
                <motion.div
                  key={index}
                  className="bg-[#f8f9fa] p-12 rounded-[3rem] flex flex-col items-center text-center group hover:shadow-lg transition-all"
                  variants={cardVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="bg-[#1a1c29] p-5 rounded-2xl mb-8 group-hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {panel.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#1a1c29] mb-4">{panel.title}</h3>
                  <p className="text-[#6b6c75] leading-relaxed text-[17px] font-medium max-w-[280px]">{panel.description}</p>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>
      {/* 
                     <section ref={containerRef} className="bg-white py-20 px-6 lg:px-20 font-body">
                        <div className="max-w-[1400px] mx-auto">
                          
                          <motion.div 
                            className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                          >
                            <div className="space-y-6">
                              <motion.span 
                                className="px-4 py-2 border border-[#ccff00] text-[#1a1c29] text-xs font-semibold rounded-full"
                                variants={itemVariants}
                              >
                                Subscribe Plans
                              </motion.span>
                              <motion.h2 
                                className="text-4xl lg:text-5xl font-bold text-[#1a1c29] leading-tight tracking-tight"
                                variants={itemVariants}
                              >
                                Flexible Pricing for Every <br /> Kind of Work
                              </motion.h2>
                            </div>
                            <motion.p 
                              className="text-[#6b6c75] text-lg lg:max-w-[300px] lg:mt-16"
                              variants={itemVariants}
                            >
                              From beginners to pros — pick the plan that fits your journey.
                            </motion.p>
                          </motion.div>
                  
                          <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                          >
                            {plans.map((plan, index) => (
                              <motion.div 
                                key={index} 
                                className={`rounded-[2.5rem] p-8 flex flex-col transition-all duration-300 ${
                                  plan.highlight ? 'bg-[#0f111f] text-white scale-105 shadow-2xl z-10' : 'bg-[#f4f5f7] text-[#1a1c29]'
                                }`}
                                variants={cardVariants}
                                whileHover={{ y: -10, scale: plan.highlight ? 1.08 : 1.05, transition: { duration: 0.2 } }}
                              >
                                <div className="flex items-center gap-3 mb-8">
                                  <div className={`p-2 rounded-lg ${plan.highlight ? 'bg-[#1e2130]' : 'bg-[#1a1c29] text-white'}`}>
                                    {plan.icon}
                                  </div>
                                  <span className="font-bold text-lg">{plan.name}</span>
                                </div>
                  
                                <div className="mb-6">
                                  <div className="flex items-baseline">
                                    <span className="text-5xl font-bold text-[#ccff00]">${plan.price}</span>
                                    <span className={`ml-1 text-sm ${plan.highlight ? 'text-gray-400' : 'text-[#6b6c75]'}`}>
                                      {plan.period}
                                    </span>
                                  </div>
                                  <p className={`text-xs mt-2 font-medium ${plan.highlight ? 'text-gray-400' : 'text-[#6b6c75]'}`}>
                                    {plan.subtext}
                                  </p>
                                </div>
                  
                                <button className="w-full py-4 rounded-2xl bg-[#ccff00] text-black font-bold text-sm mb-8 hover:brightness-110 transition-all">
                                  Get Started
                                </button>
                  
                                <div className={`mt-auto p-6 rounded-[2rem] h-full ${plan.highlight ? 'bg-[#161929]' : 'bg-[#1a1c29] text-white'}`}>
                                  <h4 className="font-bold mb-6 text-sm">What included?</h4>
                                  <div className="h-[1px] bg-gray-700/50 w-full mb-6"></div>
                                  <ul className="space-y-4">
                                    {plan.features.map((feature, fIndex) => (
                                      <li key={fIndex} className="flex items-start gap-3 text-sm leading-snug">
                                        <Plus size={16} className="text-[#ccff00] mt-0.5 shrink-0" />
                                        <span className={plan.highlight ? 'text-gray-300' : 'text-gray-400'}>{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>
                      </section> */}
      <TestimonialsSection />

      <section ref={containerRef} className="relative min-h-[600px] w-full bg-[#0a0c1a] overflow-hidden px-6 py-20 lg:px-20 flex items-center font-body">
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
                  <div className="text-xs font-semibold text-gray-400">Welcome back,</div>
                  <div className="h-2 w-6 bg-gray-200 rounded-full"></div>
                </div>
                <div className="text-xl font-bold mb-4">Alvin Kemit</div>
                <div className="w-full h-10 bg-gray-100 rounded-xl mb-6"></div>
                <div className="p-4 bg-[#ccff00] rounded-2xl h-40 flex flex-col justify-between">
                  <div className="text-sm font-medium">Portfolio Value</div>
                  <div className="text-2xl font-bold">$8,000.00</div>
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
                <div className="text-sm font-medium mb-1">Apel</div>
                <div className="text-[10px] text-gray-500 mb-4">APPL</div>
                <div className="flex gap-2 mb-6">
                  <div className="bg-white/10 px-3 py-1 rounded-full text-[10px]">Live Market</div>
                  <div className="bg-white/5 px-3 py-1 rounded-full text-[10px]">Analyst</div>
                </div>
                <div className="h-32 w-full bg-gradient-to-t from-[#ccff00]/20 to-transparent border-b border-[#ccff00]/50 mt-10">
                  {/* Simplified Chart Path */}
                  <svg viewBox="0 0 100 50" className="w-full h-full stroke-[#ccff00] fill-none stroke-2">
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
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
              variants={itemVariants}
            >
Ready to Start Your Cybersecurity Journey? 

            </motion.h1>
            <motion.p
              className="text-[#6b6c75] text-lg md:text-xl mb-10 max-w-md"
              variants={itemVariants}
            >
              Join thousands of learners building ethical hacking skills with AI-powered education.
                                </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.button
                className="bg-[#ccff00] hover:bg-[#b4e600] text-black font-bold py-4 px-8 rounded-2xl transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Scan Now
              </motion.button>
              <motion.button
                className="bg-[#1e2130] hover:bg-[#2a2d3d] text-white font-medium py-4 px-8 rounded-2xl transition-all border border-white/10"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download the App
              </motion.button>
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