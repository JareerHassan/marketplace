'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { CreditCard, BarChart3, PieChart, Zap, Plus, DollarSign } from 'lucide-react';

const featurePanels = [
  {
    icon: <CreditCard className="w-8 h-8 text-[#ccff00]" />,
    title: "Personalized Portfolios",
    description: "Build investment plans tailored to your goals and risk level."
  },
  {
    icon: <PieChart className="w-8 h-8 text-[#ccff00]" />,
    title: "Multi-Asset Access",
    description: "Trade stocks, ETFs, crypto, mutual funds, and bonds from one dashboard."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-[#ccff00]" />,
    title: "Real-Time Analytics",
    description: "Track your portfolio performance with live data and smart alerts."
  },
  {
    icon: <Zap className="w-8 h-8 text-[#ccff00]" />,
    title: "Automated Investing",
    description: "Set recurring investments and let your money work for you 24/7."
  }
];

const ProductOverview = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

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

  return (
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
            Your All-in-One Investment Platform
          </motion.h2>
          <motion.p 
            className="text-[#6b6c75] mt-6 text-xl font-medium max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Everything you need to start, manage, and grow your wealth — in one simple app.
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
  );
};

export default ProductOverview;