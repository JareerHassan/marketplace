// app/apps/fire-wave-vpn/LearningPage.tsx
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
  Play,
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const COLORS = {
  brandDark: "#05070A",
};

const createPlatformLogo = (label: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="220" height="60" viewBox="0 0 220 60">
      <rect x="1" y="1" width="218" height="58" rx="18" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" />
      <text x="110" y="37" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" fill="#E5E7EB">
        ${label}
      </text>
    </svg>
  `)}`;

export default function FireWaveVpnLandingPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

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

  const features = [
    {
      id: "01.",
      title: "Fast, Stable Connections",
      desc: "Connect quickly across mobile, desktop, Amazon Fire TV, and Android TV with performance-focused routing and reliable reconnect behavior.",
    },
    {
      id: "02.",
      title: "Privacy-First Protection",
      desc: "Protect your browsing, streaming, and public Wi-Fi activity with secure connections and a clear no-logs experience built for everyday use.",
    },
    {
      id: "03.",
      title: "True Cross-Platform Support",
      desc: "Use one VPN experience across Android, iOS, desktop systems, and smart TV devices without changing how you connect or manage your account.",
    },
    {
      id: "04.",
      title: "Fire TV Optimized Streaming",
      desc: "Enjoy a remote-friendly interface, fast app startup, and smooth TV-based usage designed specifically for big-screen streaming sessions.",
    },
  ];

  const steps = [
    {
      id: "#01",
      title: "Download Fire Wave VPN",
      desc: "Install Fire Wave VPN on your mobile device, desktop, Amazon Fire TV, or Android TV and sign in with a simple setup flow.",
    },
    {
      id: "#02",
      title: "Choose a Server & Connect",
      desc: "Pick the best location for speed, privacy, or streaming and connect in seconds with a clean, user-friendly experience.",
    },
    {
      id: "#03",
      title: "Browse, Stream & Stay Protected",
      desc: "Secure your connection across everyday browsing, public Wi-Fi, work sessions, and streaming on every supported platform.",
    },
  ];

  const logos = [
    createPlatformLogo("Android"),
    createPlatformLogo("iOS"),
    createPlatformLogo("Desktop"),
    createPlatformLogo("Fire TV"),
  ];

  const boxImage = "/assets/firewavevpn.webp";

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
            backgroundImage: `url('/assets/firewavebg.jpeg')`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0"></div>

          <div className="relative z-10 mx-auto px-6 w-full">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-4">
              {/* Stats - Left */}
              <div className="order-3 lg:order-1 lg:col-span-2 flex flex-row lg:flex-col justify-between items-center lg:items-start gap-6 lg:border-l border-white/10 lg:pl-8">
                {[
                  { label: "Privacy Policy", value: "No-Logs" },
                  { label: "Platform Support", value: "Cross-Platform" },
                  { label: "TV Experience", value: "Fire TV Ready" },
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
                    src="/assets/firewavevpn.webp"
                    alt="Fire Wave VPN app preview"
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Content - Right */}
              <div className="order-2 lg:order-3 lg:col-span-5 text-center lg:text-left space-y-6">
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  <Badge className="bg-[#1A1D24] text-[#8A92FF] border-none px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Cross-Platform VPN
                  </Badge>
                  <Badge className="bg-[#1A1D24] text-[#ADFF2F] border-none px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Fire TV Optimized
                  </Badge>
                </div>
                <h2 className="text-4xl lg:text-[72px] font-black leading-[1] tracking-tighter text-white uppercase">
                  Fast, Secure VPN for Every Screen
                </h2>
                <p className="text-[#94A3B8] max-w-md mx-auto lg:mx-0">
                  Fire Wave VPN delivers fast connections, privacy-first
                  protection, and seamless support across Android, iOS, desktop,
                  Amazon Fire TV, and Android TV. Stream, browse, and stay
                  protected with one modern VPN experience.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button 
                      onClick={() => window.open("https://www.amazon.com/FireWave-VPN-for-TV-devices/dp/B0GJZ747ZY/ref=sr_1_1?crid=2MZ27OZ1UWVK8&dib=eyJ2IjoiMSJ9.eE-oaya33Pf7Ev6LoET8vw.DxTpwX05z3Cl8jNq2oHATL5QMGE1aq6nmQx1CFb70jA&dib_tag=se&keywords=firewave+vpn+app&qid=1772427489&sprefix=fire+wave+vpn+app,aps,661&sr=8-1", "_blank")}

                  className="rounded-full bg-[#ADFF2F] text-black px-10 h-14 font-black">
                    GET FIRE WAVE VPN
                  </Button>
                  <Button 
                    variant="outline"
                        onClick={() => window.open("https://www.amazon.com/FireWave-VPN-for-TV-devices/dp/B0GJZ747ZY/ref=sr_1_1?crid=2MZ27OZ1UWVK8&dib=eyJ2IjoiMSJ9.eE-oaya33Pf7Ev6LoET8vw.DxTpwX05z3Cl8jNq2oHATL5QMGE1aq6nmQx1CFb70jA&dib_tag=se&keywords=firewave+vpn+app&qid=1772427489&sprefix=fire+wave+vpn+app,aps,661&sr=8-1", "_blank")}

                    className="rounded-full border-white/10 bg-white/5 text-white px-10 h-14 backdrop-blur-sm"
                  >
                    VIEW PLATFORMS
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- TRUSTED LOGOS SECTION --- */}
        <section className="py-20 border-y border-white/5 relative z-10 bg-[#05070A]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Side */}
              <div className="w-full lg:w-1/3 text-center lg:text-left">
                <p className="text-white text-lg font-bold mb-8 uppercase tracking-tight">
                  Built for the devices you use every day.
                </p>
                <div className="grid grid-cols-2 gap-8 items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                  {logos.map((logo, index) => (
                    <img
                      key={index}
                      src={logo}
                      alt={`Supported platform ${index + 1}`}
                      className="h-7 w-auto object-contain mx-auto lg:mx-0"
                    />
                  ))}
                </div>
              </div>

              {/* Right Side */}
              <div className="w-full lg:w-2/3 h-48 lg:h-40 rounded-[40px] overflow-hidden border border-white/10 relative group shadow-2xl">
                <img
                  src={boxImage}
                  alt="Fire Wave VPN interface"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#ADFF2F]/20 via-transparent to-black/60" />

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
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
              <div className="space-y-4 max-w-2xl text-left">
                <div>
                  <Badge className="bg-[#ADFF2F]/10 text-[#ADFF2F] border border-[#ADFF2F]/20 px-4 py-1.5 rounded-full uppercase text-[11px] font-bold tracking-widest">
                    Core Features
                  </Badge>
                </div>
                <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                  All-in-One VPN Protection for Mobile, Desktop & TV
                </h2>
              </div>
              <div>
                <Button     onClick={() => window.open("https://www.amazon.com/FireWave-VPN-for-TV-devices/dp/B0GJZ747ZY/ref=sr_1_1?crid=2MZ27OZ1UWVK8&dib=eyJ2IjoiMSJ9.eE-oaya33Pf7Ev6LoET8vw.DxTpwX05z3Cl8jNq2oHATL5QMGE1aq6nmQx1CFb70jA&dib_tag=se&keywords=firewave+vpn+app&qid=1772427489&sprefix=fire+wave+vpn+app,aps,661&sr=8-1", "_blank")}

                className="rounded-full bg-[#ADFF2F] text-black px-8 h-12 font-black">
                  EXPLORE FEATURES
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
              {/* Large Card */}
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
                  <h3 className="text-3xl font-black text-white leading-tight uppercase">
                    Fast, Secure Connections on Every Device
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    Fire Wave VPN is built for quick connection times, smooth
                    everyday protection, and effortless use across phones,
                    desktops, and smart TVs. Stay connected wherever you stream,
                    browse, and work.
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-2/3 opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <img
                    src="/assets/firewavevpn.webp"
                    className="w-full h-auto rotate-[-10deg]"
                    alt="Fire Wave VPN product preview"
                  />
                </div>
              </div>

              {/* Smaller Cards */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="flex-1 bg-[#0F1115] border border-white/5 rounded-[40px] p-8 relative overflow-hidden group min-h-[220px]">
                  <div className="relative z-20 text-left">
                    <h3 className="text-xl font-black text-white uppercase leading-tight">
                      Privacy-First Protection
                    </h3>
                    <p className="text-sm text-[#94A3B8] mt-2 font-medium">
                      Protect personal browsing, public Wi-Fi sessions, and
                      daily online activity with secure connections and a
                      privacy-focused, no-logs approach built for modern users.
                    </p>
                  </div>
                  <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                    <img
                      src="/assets/ai-img.webp"
                      className="w-full h-full object-cover"
                      alt="Privacy and security background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-transparent to-transparent" />
                  </div>
                </div>

                <div className="flex-1 bg-[#0F1115] border border-white/5 rounded-[40px] p-8 relative overflow-hidden group min-h-[220px]">
                  <div className="relative z-20 text-left">
                    <h3 className="text-xl font-black text-white uppercase leading-tight">
                      Fire TV & Android TV Optimized
                    </h3>
                    <p className="text-sm text-[#94A3B8] mt-2 font-medium">
                      Enjoy a big-screen experience with remote-friendly
                      navigation, quick access to servers, and stable
                      performance designed for Amazon Fire TV and Android TV.
                    </p>
                  </div>
                  <div className="absolute -bottom-12 -right-12 w-48 opacity-40 group-hover:opacity-100 transition-all duration-700 rotate-[15deg]">
                    <img
                      src="/assets/firewavevpn.webp"
                      className="w-full h-auto"
                      alt="Fire Wave VPN TV app mockup"
                    />
                  </div>
                  <div className="absolute right-0 bottom-0 w-32 h-32 bg-[#ADFF2F] blur-[80px] opacity-10 group-hover:opacity-20 transition-all" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="fixed top-0 right-0 w-1/4 h-full bg-gradient-to-l from-[#ADFF2F]/5 to-transparent pointer-events-none -z-10" />
      </main>

      <section className="py-16 px-6 md:px-20 bg-white font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16"
          >
            <motion.div variants={fadeInUp} className="md:w-1/3">
              <span className="px-4 py-1 text-black border border-lime-400 rounded-full text-sm font-medium">
                About Fire Wave VPN
              </span>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:w-2/3">
              <p className="text-gray-600 text-lg leading-relaxed">
                Fire Wave VPN is built for users who want fast protection
                without complexity. We combine secure cross-platform VPN access
                with Firebase-powered authentication, analytics, and real-time
                service updates to deliver a smooth, modern experience across
                mobile, desktop, and smart TV environments.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/assets/firewavevpn.webp"
                  alt="Fire Wave VPN interface preview"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

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
                    Secure Access Built for Modern Devices and Big-Screen
                    Streaming
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    
                        onClick={() => window.open("https://www.amazon.com/FireWave-VPN-for-TV-devices/dp/B0GJZ747ZY/ref=sr_1_1?crid=2MZ27OZ1UWVK8&dib=eyJ2IjoiMSJ9.eE-oaya33Pf7Ev6LoET8vw.DxTpwX05z3Cl8jNq2oHATL5QMGE1aq6nmQx1CFb70jA&dib_tag=se&keywords=firewave+vpn+app&qid=1772427489&sprefix=fire+wave+vpn+app,aps,661&sr=8-1", "_blank")}
                    className="mt-8 bg-[#B4EB3F] hover:bg-[#a3d635] text-black font-bold py-4 px-8 rounded-xl transition-colors shadow-lg shadow-lime-100"
                  >
                    Explore Fire Wave VPN
                  </motion.button>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="bg-gray-50 rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
              >
                {[
                  { label: "Supported Platforms", value: "4+" },
                  { label: "Privacy Focus", value: "No-Logs" },
                  { label: "Smart TV Ready", value: "Fire TV" },
                  { label: "Backend Services", value: "Firebase" },
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

      <section className="px-6 md:px-20 bg-white font-sans">
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
            <div className="flex flex-col gap-6 md:w-2/3">
              <span className="w-fit px-4 py-1 border border-lime-400 text-black rounded-full text-sm font-medium">
                Why choose us
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                Why Choose Fire Wave VPN?
              </h2>
            </div>
            <div className="md:w-1/4 pt-10">
              <p className="text-gray-500 text-sm leading-relaxed">
                Fire Wave VPN is designed to be fast, simple, and reliable
                across touch-first devices and remote-friendly smart TV
                experiences.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="rounded-3xl overflow-hidden h-[420px]"
              >
                <img
                  src="/assets/firewavevpn.webp"
                  className="w-full h-full object-cover"
                  alt="Fire Wave VPN mobile experience"
                />
              </motion.div>

              <div className="flex flex-col gap-5">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="rounded-3xl overflow-hidden h-[200px]"
                >
                  <img
                    src="/assets/ai-img.webp"
                    className="w-full h-full object-cover"
                    alt="Fire Wave VPN smart protection"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="bg-[#0B1222] rounded-3xl p-6 flex flex-col justify-between h-[200px]"
                >
                  <div>
                    <p className="text-[#B4EB3F] text-xs uppercase tracking-wider">
                      Coverage
                    </p>
                    <h3 className="text-white text-4xl font-bold mt-2">
                      All Screens
                    </h3>
                  </div>

                  <button className="w-fit text-white text-xs border border-gray-700 rounded-full px-4 py-2 hover:bg-white hover:text-black transition">
                    See Supported Devices
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-20 bg-white font-sans">
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
            <div className="flex flex-col gap-6 md:w-2/3">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="w-fit px-4 py-1 border border-lime-400 rounded-full text-sm font-medium text-black"
              >
                How It Works
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight"
              >
                Protect Your Connection in Three Simple Steps
              </motion.h2>
            </div>
            <div className="md:w-1/4 pt-10">
              <p className="text-gray-500 text-sm leading-relaxed">
                Install fast, connect in seconds, and enjoy private browsing and
                streaming across all your supported devices.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="bg-[#F3F4F6] rounded-3xl p-8 flex flex-col justify-between min-h-[300px] relative group overflow-hidden"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <button     onClick={() => window.open("https://www.amazon.com/FireWave-VPN-for-TV-devices/dp/B0GJZ747ZY/ref=sr_1_1?crid=2MZ27OZ1UWVK8&dib=eyJ2IjoiMSJ9.eE-oaya33Pf7Ev6LoET8vw.DxTpwX05z3Cl8jNq2oHATL5QMGE1aq6nmQx1CFb70jA&dib_tag=se&keywords=firewave+vpn+app&qid=1772427489&sprefix=fire+wave+vpn+app,aps,661&sr=8-1", "_blank")}
                className="w-fit mt-8 bg-[#B4EB3F] hover:bg-[#a3d635] text-black text-sm font-bold py-3 px-6 rounded-xl transition-all">
                  Get Started
                </button>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative rounded-3xl overflow-hidden min-h-[320px] group cursor-pointer"
            >
              <div className="absolute inset-0">
                <img
                  src="/assets/firewavevpn.webp"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Fire Wave VPN product tour"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 bg-[#B4EB3F] rounded-full flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border border-white/30 scale-125 animate-pulse"></div>
                  <Play className="text-black fill-black ml-1" size={24} />
                </div>
                <span className="text-white font-medium">Watch Product Tour</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[650px] overflow-hidden rounded-[40px] mx-4 md:mx-10 my-20">
        <div className="absolute inset-0 -z-10 bg-[url('/assets/bg-img2.png')] bg-cover bg-center bg-no-repeat" />

        <div className="max-w-7xl mx-auto px-8 md:px-20 py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs border border-white/20">
                  <div className="w-4 h-4 bg-indigo-500 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                  No-Logs Policy
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs border border-white/20">
                  <div className="w-4 h-4 bg-lime-400 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  </div>
                  Fire TV Optimized
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.1]">
                Secure streaming, <br /> private browsing.
              </h2>

             <div className="flex flex-wrap gap-4 pt-4">
  <button
    onClick={() => window.open("https://www.amazon.com/FireWave-VPN-for-TV-devices/dp/B0GJZ747ZY/ref=sr_1_1?crid=2MZ27OZ1UWVK8&dib=eyJ2IjoiMSJ9.eE-oaya33Pf7Ev6LoET8vw.DxTpwX05z3Cl8jNq2oHATL5QMGE1aq6nmQx1CFb70jA&dib_tag=se&keywords=firewave+vpn+app&qid=1772427489&sprefix=fire+wave+vpn+app,aps,661&sr=8-1", "_blank")}
    className="bg-[#B4EB3F] hover:bg-[#a3d635] text-black font-bold py-4 px-8 rounded-2xl flex items-center gap-2 transition-all shadow-lg shadow-lime-400/20"
  >
    Download Apps <Download size={20} />
  </button>

  <button     onClick={() => window.open("https://www.amazon.com/FireWave-VPN-for-TV-devices/dp/B0GJZ747ZY/ref=sr_1_1?crid=2MZ27OZ1UWVK8&dib=eyJ2IjoiMSJ9.eE-oaya33Pf7Ev6LoET8vw.DxTpwX05z3Cl8jNq2oHATL5QMGE1aq6nmQx1CFb70jA&dib_tag=se&keywords=firewave+vpn+app&qid=1772427489&sprefix=fire+wave+vpn+app,aps,661&sr=8-1", "_blank")}
  className="bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-2xl border border-white/20 transition-all backdrop-blur-sm">
    View Features
  </button>
</div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative z-20 w-[90%] md:w-[550px]">
                <img
                  src="/assets/firewavevpn.webp"
                  alt="Fire Wave VPN app mockup"
                  className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={containerRef}
        className="relative min-h-[600px] w-full bg-[#0a0c1a] overflow-hidden px-6 py-20 lg:px-20 flex items-center font-body"
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Phone Mockups */}
          <motion.div
            className="relative h-[400px] md:h-[500px] flex justify-center lg:justify-start"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Back Phone */}
            <motion.div
              className="absolute left-20 md:left-32 top-0 w-[260px] md:w-[320px] aspect-[9/19] bg-[#f8f9fa] rounded-[3rem] border-[8px] border-[#1e2130] shadow-2xl z-10 transform -rotate-6 scale-95 overflow-hidden"
              variants={phoneVariants}
              whileHover={{ scale: 0.98, rotate: -4 }}
            >
              <div className="p-6 text-slate-900">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-xs font-semibold text-gray-400">
                    Fire Wave VPN
                  </div>
                  <div className="h-2 w-6 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-xl font-bold mb-4">Quick Connect</div>
                <div className="w-full h-10 bg-gray-100 rounded-xl mb-6"></div>
                <div className="p-4 bg-[#ccff00] rounded-2xl h-40 flex flex-col justify-between">
                  <div className="text-sm font-medium">Protected Session</div>
                  <div className="text-2xl font-bold">Fastest Server</div>
                </div>
              </div>
            </motion.div>

            {/* Front Phone */}
            <motion.div
              className="absolute left-0 top-10 w-[260px] md:w-[320px] aspect-[9/19] bg-[#1c1e2d] rounded-[3rem] border-[8px] border-[#2a2d3d] shadow-2xl z-20 transform -rotate-12 overflow-hidden"
              variants={phoneFrontVariants}
              whileHover={{ scale: 1.02, rotate: -10 }}
            >
              <div className="p-6 text-white">
                <div className="text-sm font-medium mb-1">Fire Wave</div>
                <div className="text-[10px] text-gray-500 mb-4">VPN STATUS</div>
                <div className="flex gap-2 mb-6">
                  <div className="bg-white/10 px-3 py-1 rounded-full text-[10px]">
                    Quick Connect
                  </div>
                  <div className="bg-white/5 px-3 py-1 rounded-full text-[10px]">
                    Streaming
                  </div>
                </div>
                <div className="h-32 w-full bg-gradient-to-t from-[#ccff00]/20 to-transparent border-b border-[#ccff00]/50 mt-10">
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
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
              variants={itemVariants}
            >
              Ready to Secure Every Device?
            </motion.h1>
            <motion.p
              className="text-[#6b6c75] text-lg md:text-xl mb-10 max-w-md"
              variants={itemVariants}
            >
              Install Fire Wave VPN on mobile, desktop, Amazon Fire TV, and
              Android TV for fast connections, privacy-first protection, and a
              seamless cross-platform experience.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.button

                  onClick={() => window.open("https://www.amazon.com/FireWave-VPN-for-TV-devices/dp/B0GJZ747ZY/ref=sr_1_1?crid=2MZ27OZ1UWVK8&dib=eyJ2IjoiMSJ9.eE-oaya33Pf7Ev6LoET8vw.DxTpwX05z3Cl8jNq2oHATL5QMGE1aq6nmQx1CFb70jA&dib_tag=se&keywords=firewave+vpn+app&qid=1772427489&sprefix=fire+wave+vpn+app,aps,661&sr=8-1", "_blank")}

                className="bg-[#ccff00] hover:bg-[#b4e600] text-black font-bold py-4 px-8 rounded-2xl transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Fire Wave VPN
              </motion.button>
              <motion.button
                  onClick={() => window.open("https://www.amazon.com/FireWave-VPN-for-TV-devices/dp/B0GJZ747ZY/ref=sr_1_1?crid=2MZ27OZ1UWVK8&dib=eyJ2IjoiMSJ9.eE-oaya33Pf7Ev6LoET8vw.DxTpwX05z3Cl8jNq2oHATL5QMGE1aq6nmQx1CFb70jA&dib_tag=se&keywords=firewave+vpn+app&qid=1772427489&sprefix=fire+wave+vpn+app,aps,661&sr=8-1", "_blank")}

                className="bg-[#1e2130] hover:bg-[#2a2d3d] text-white font-medium py-4 px-8 rounded-2xl transition-all border border-white/10"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Supported Devices
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

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