'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';

const testimonials = [
  {
    rating: 5,
    quote: "Finally, one app that lets me track stocks, ETFs, and crypto in one place. Super convenient and secure.",
    image: "https://templates.studioniskala.com/invemon/wp-content/uploads/sites/22/2025/08/2-people-having-a-v-3628WWS.png",
    name: 'Daniel R.',
    profession: 'Crypto Enthusiast'
  },
  {
    rating: 5,
    quote: "Auto-invest is a lifesaver. I set it once and my investments keep growing while I focus on my career.",
    image: "https://templates.studioniskala.com/invemon/wp-content/uploads/sites/22/2025/08/5-people-having-a-v-3628WWS.png",
    name: 'Lina K.',
    profession: 'Working Professional'
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-[#ccff00]' : 'fill-gray-300'}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={containerRef} className="bg-white py-24 px-6 md:px-12 lg:px-20 font-body overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header and Controls */}
        <motion.div 
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.button 
            className="border border-[#1a1c29]/10 text-[#1a1c29] text-xs font-bold py-3 px-6 rounded-full uppercase tracking-wider"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            What Our Investors Say
          </motion.button>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-[52px] font-bold text-[#1a1c29] leading-[1.1] text-center lg:text-left max-w-[700px] tracking-tight"
            variants={itemVariants}
          >
            Real stories from real people growing their wealth with us.
          </motion.h2>

          <motion.button 
            className="bg-[#ccff00] hover:bg-[#b4e600] text-black font-bold py-4 px-10 rounded-2xl transition-all text-sm hidden lg:block"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            See more
          </motion.button>
        </motion.div>

        {/* Testimonials Slider/Grid */}
        {/* Added 'overflow-x-auto snap-x' to make it a scrollable slider on mobile/tablet */}
        <motion.div 
          className="flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory no-scrollbar pb-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Main Video Card */}
          <motion.div 
            className="min-w-[85vw] md:min-w-[45vw] lg:min-w-0 snap-center relative group aspect-[4/3] rounded-[2.5rem] overflow-hidden"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="https://templates.studioniskala.com/invemon/wp-content/uploads/sites/22/2025/08/successf-46DXS95.jpeg"
              alt="Investor group"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="bg-[#ccff00] text-[#1a1c29] p-6 rounded-full shadow-2xl scale-90 group-hover:scale-100 transition-transform"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={32} fill="currentColor" />
              </motion.div>
            </div>
            <motion.div 
              className="absolute bottom-8 left-8 text-white text-xl font-semibold tracking-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.8 }}
            >
                Real stories
            </motion.div>
            <motion.div 
              className="absolute bottom-8 right-8 p-2.5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ccff00] to-[#b4f000]"></div>
            </motion.div>
          </motion.div>

          {/* Testimonial Cards */}
          {testimonials.map((testimonial, index) => (
             <motion.div 
               key={index} 
               className="min-w-[85vw] md:min-w-[45vw] lg:min-w-0 snap-center bg-[#f7f8fa] p-12 rounded-[2.5rem] flex flex-col justify-between"
               variants={cardVariants}
               whileHover={{ y: -5, transition: { duration: 0.2 } }}
             >
                <div>
                   <RatingStars rating={testimonial.rating} />
                   <blockquote className="text-2xl leading-[1.4] text-[#1a1c29] font-medium mb-12">
                       &quot;{testimonial.quote}&quot;
                   </blockquote>
                </div>
                
                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  <motion.div 
                    className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div>
                    <div className="text-lg font-bold text-[#1a1c29]">{testimonial.name}</div>
                    <div className="text-sm font-medium text-[#6b6c75]">{testimonial.profession}</div>
                  </div>
                </motion.div>
             </motion.div>
          ))}
        </motion.div>
        
        {/* Mobile-only See More button */}
        <motion.div 
          className="lg:hidden mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button 
            className="w-full bg-[#ccff00] hover:bg-[#b4e600] text-black font-bold py-4 rounded-2xl transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            See more
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;