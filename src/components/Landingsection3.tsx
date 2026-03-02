'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Landingsec3 = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const features = [
        {
            id: "01.",
            title: "AI-Powered Insights",
            desc: "Get real-time market analysis for your goals smart decisions."
        },
        {
            id: "02.",
            title: "Start with Just $1",
            desc: "Investing is now accessible to everyone. Start building your portfolio with as little as a single dollar."
        },
        {
            id: "03.",
            title: "Zero Hidden Fees",
            desc: "Transparent pricing with no surprise charges. We believe in keeping more money in your pocket."
        },
        {
            id: "04.",
            title: "Bank-Grade Security",
            desc: "Your data and assets are protected by industry-leading encryption and security protocols."
        }
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className=" px-6 md:px-20 bg-white font-sans">
            <div >

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
                    <div className="flex flex-col gap-6 md:w-2/3">
                        <span className="w-fit px-4 py-1 border border-lime-400 text-black rounded-full text-sm font-medium">
                            Why choose us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                            We use technology and expert <br /> guidance to maximize your <br /> money.
                        </h2>
                    </div>
                    <div className="md:w-1/4 pt-10">
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Investing is effortless with technology, security, and guidance.
                        </p>
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
    );
};

export default Landingsec3;