'use client';

import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion'

const Landingsection = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
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
              Founded by a team of finance experts and tech innovators, our mission 
              is to break down barriers to investing. We combine advanced AI 
              technology, global market access, and user-first design to help you 
              make smarter financial moves.
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
                  Empowering Everyone <br /> to Grow Wealth
                </h2>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 bg-[#B4EB3F] hover:bg-[#a3d635] text-black font-bold py-4 px-8 rounded-xl transition-colors shadow-lg shadow-lime-100"
                >
                  Learn More
                </motion.button>
              </motion.div>

              {/* Video Button with Pulse Animation */}
              <motion.div 
                variants={fadeInUp}
                className="flex items-center gap-4 cursor-pointer group"
              >
                <div className="w-16 h-16 bg-[#0B1222] rounded-full flex items-center justify-center relative">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] , opacity: [0.5, 0.2, 0.5]}}
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
                { label: "Assets Managed", value: "$250B" },
                { label: "App Rating", value: "4.5+" },
                { label: "Countries Served", value: "50+" }
              ].map((stat, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex flex-col gap-1">
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <h3 className="text-3xl font-bold text-[#B4EB3F]">{stat.value}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landingsection;