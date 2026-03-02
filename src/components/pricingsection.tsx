'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Coffee, Home, BarChart3, LayoutGrid, Plus } from 'lucide-react';

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

const PricingSection = () => {
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={containerRef} className="bg-white py-20 px-6 lg:px-20 font-body">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
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

        {/* Pricing Cards Grid */}
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
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-2 rounded-lg ${plan.highlight ? 'bg-[#1e2130]' : 'bg-[#1a1c29] text-white'}`}>
                  {plan.icon}
                </div>
                <span className="font-bold text-lg">{plan.name}</span>
              </div>

              {/* Price */}
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

              {/* CTA Button */}
              <button className="w-full py-4 rounded-2xl bg-[#ccff00] text-black font-bold text-sm mb-8 hover:brightness-110 transition-all">
                Get Started
              </button>

              {/* Features List */}
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
    </section>
  );
};

export default PricingSection;