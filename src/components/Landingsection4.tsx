'use client';

import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Landingsect4 = () => {
  const steps = [
    {
      id: "#01",
      title: "Sign Up & Verify",
      desc: "Create your account in minutes and complete secure verification.",
    },
    {
      id: "#02",
      title: "Choose Your Portfolio",
      desc: "Choose AI portfolios or create your investment plan.",
    },
    {
      id: "#03",
      title: "Grow & Track",
      desc: "Track investments with real-time insights.",
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
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
              From Imagination to <br /> Monetization in Minutes
            </motion.h2>
          </div>
          <div className="md:w-1/4 pt-10">
            <p className="text-gray-500 text-sm leading-relaxed">
              Investing is effortless with technology, security, and guidance.
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
  );
};

export default Landingsect4;