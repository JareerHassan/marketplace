'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Landingsectio5 = () => {
    return (
        /* Added bg-[#0B1222] because the shape image needs a dark base to show properly */
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

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-bold text-white leading-[1.1]"
                        >
                            Investors grow <br /> wealth on our <br /> secure platform.
                        </motion.h2>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#B4EB3F] hover:bg-[#a3d635] text-black font-bold py-4 px-8 rounded-2xl flex items-center gap-2 transition-all shadow-lg shadow-lime-400/20"
                            >
                                Download Apps <Download size={20} />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-2xl border border-white/20 transition-all backdrop-blur-sm"
                            >
                                Demo Apps
                            </motion.button>
                        </div>
                    </div>

                    {/* Right Content: Mobile Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-20 w-[90%] md:w-[550px]"
                        >
                            <img
                                src="/assets/mobile2.png"
                                alt="Mobile App Mockup"
                                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Landingsectio5;