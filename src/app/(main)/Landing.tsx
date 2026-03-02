'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wallet, PieChart, ArrowUpRight, Target, Zap, Diamond, BarChart3, Clock, LayoutGrid } from 'lucide-react';
import bgimg from '../../../public/assets/bg-img.jpeg';
import Landingsection from '@/components/Landingsection2';
import Landingsec3 from '@/components/Landingsection3';
import Landingsect4 from '@/components/Landingsection4';
import Landingsectio5 from '@/components/landingsection5';
import GrowSection from '@/components/growsection';
import TestimonialsSection from '@/components/testimonials';
import PricingSection from '@/components/pricingsection';
import ProductOverview from '@/components/productpreview';


const COLORS = {
  brandNeon: '#ADFF2F',
  brandDark: '#05070A',
  brandGray: '#1A1D24',
  cardBg: '#0F1115',
  textMuted: '#94A3B8',
  accentBlue: '#8A92FF',
};

export default function LandingPage() {
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
        <section className="relative min-h-[90dvh] w-full flex items-center justify-center pt-40 pb-10" style={{ backgroundImage: `url('/assets/bg-img.jpeg')`, backgroundSize: 'cover', }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
           
          </div>

          <div className="relative z-10 mx-auto px-6 w-full">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-4">

              {/* Stats - Left */}
              <div
                className="order-3 lg:order-1 lg:col-span-2 flex flex-row lg:flex-col justify-between items-center lg:items-start gap-6 lg:border-l border-white/10 lg:pl-8"
              >
                {[
                  { label: "Users", value: "100k+" },
                  { label: "Assets", value: "$250B" },
                  { label: "Rating", value: "4.9" }
                ].map((stat, i) => (
                  <div key={i}  className="text-center lg:text-left">
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
                <div  className="flex flex-wrap justify-center lg:justify-start gap-2">
                  <Badge className="bg-[#1A1D24] text-[#8A92FF] border-none px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">Financial Freedom</Badge>
                  <Badge className="bg-[#1A1D24] text-[#ADFF2F] border-none px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">Investment</Badge>
                </div>
                <h2  className="text-4xl lg:text-[72px] font-black leading-[1] tracking-tighter text-white uppercase ">
                  Auto-Invest, <br /> <span style={{ color: COLORS.brandNeon }}>Zero Stress</span> Strategy
                </h2>
                <p  className="text-[#94A3B8] max-w-md mx-auto lg:mx-0">
                  Set it and forget it. Our automated investing feature grows your wealth while you focus on life.
                </p>
                <div  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button className="rounded-full bg-[#ADFF2F] text-black px-10 h-14 font-black">START TRADING</Button>
                  <Button variant="outline" className="rounded-full border-white/10 bg-white/5 text-white px-10 h-14 backdrop-blur-sm">DEMO TRADING</Button>
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
                  All-in-One Platform for Smarter Investing
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
                <div className="relative z-10 space-y-4 max-w-sm text-left">
                  <h3 className="text-3xl font-black text-white leading-tight uppercase ">AI-Powered <br /> Investment Insights</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">Personalized recommendations based on market trends.</p>
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
                    <Badge className="bg-[#8A92FF]/10 text-[#8A92FF] mb-6 uppercase text-[10px] font-bold  border-none">Updated</Badge>
                    <h3 className="text-xl font-black text-white uppercase  leading-tight">Real-Time <br /> Market Data</h3>
                    <p className="text-sm text-[#94A3B8] mt-2 font-medium">Instant access to live prices.</p>
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
                    <Badge className="bg-[#ADFF2F]/10 text-[#ADFF2F] mb-6 uppercase text-[10px] font-bold  border-none">Asset</Badge>
                    <h3 className="text-xl font-black text-white uppercase  leading-tight">Multi-Asset <br /> Support</h3>
                    <p className="text-sm text-[#94A3B8] mt-2 font-medium">Stocks, ETFs, crypto, and more.</p>
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

      <Landingsection />
      <Landingsec3 />
      <Landingsect4 />
      <Landingsectio5 />
      <ProductOverview />
      <PricingSection />
      <TestimonialsSection />
      <GrowSection />

    </>
  );
}