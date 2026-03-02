'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';

const GrowSection = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const phoneVariants = {
    hidden: { opacity: 0, x: -100, rotate: -20 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: -6,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
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

  return (
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
            Ready to Grow Your <br />
            <motion.span 
              className="text-white"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              Wealth?
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-[#6b6c75] text-lg md:text-xl mb-10 max-w-md"
            variants={itemVariants}
          >
            Join 100K+ investors already building their future with our secure, all-in-one platform.
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
              Start Investing
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
  );
};

export default GrowSection;