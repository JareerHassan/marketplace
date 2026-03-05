"use client"

import React, { useState } from 'react';
import { Plus, MessageCircle, ShoppingCart, Truck, CreditCard } from 'lucide-react';
import HeroSection from "@/components/HeroSection";

// Define the type for the FAQ item
interface FAQItem {
  category: 'General' | 'Orders & Access' | 'Shipping' | 'Payments' | 'Returns & Refunds' | 'Sellers & Licensing' | 'Delivery & Availability';
  question: string;
  answer: string;
}

// 1. Comprehensive FAQ Data
const faqData: FAQItem[] = [
  {
    category: 'General',
    question: "What makes your AI marketplace unique?",
    answer: "Our platform focuses on high-quality, scalable AI tools, apps, SaaS products, and digital solutions built for real-world implementation. We combine industry-based and functional AI categories to simplify discovery while maintaining strict quality standards and secure transactions.",
  },
  {
    category: 'General',
    question: "Who is this marketplace built for?",
    answer: "Our marketplace is designed for developers, startups, founders, freelancers, agencies, and digital entrepreneurs looking for reliable AI tools and digital products to build and scale their businesses.",
  },
  {
    category: 'General',
    question: "Do you review products before listing them?",
    answer: "Yes. All products go through a structured review process to ensure clarity, quality, functionality, and compliance with our marketplace standards.",
  },

  // Orders & Access
  {
    category: 'Orders & Access',
    question: "How do I receive my product after purchase?",
    answer: "All products are delivered digitally. Once your payment is successfully processed, you receive instant access through your account dashboard, including download links or access credentials where applicable.",
  },
  {
    category: 'Orders & Access',
    question: "Can I change or cancel my order?",
    answer: "Due to the instant nature of digital delivery, completed purchases generally cannot be canceled once access is granted. If you experience a technical issue, please contact support for assistance.",
  },
  {
    category: 'Orders & Access',
    question: "Will I get lifetime access?",
    answer: "Access depends on the specific license and product terms. Some products offer lifetime access, while others may include subscription-based or version-based updates. Licensing details are clearly mentioned on each product page.",
  },

  // Delivery & Availability
  {
    category: 'Delivery & Availability',
    question: "How long does delivery take?",
    answer: "There is no physical shipping. All products are available immediately after payment confirmation.",
  },
  {
    category: 'Delivery & Availability',
    question: "Do you offer international access?",
    answer: "Yes. Our digital marketplace is accessible globally. As long as your payment method is supported, you can purchase and access products from anywhere in the world.",
  },

  // Returns & Refunds
  {
    category: 'Returns & Refunds',
    question: "What is your refund policy?",
    answer: "Due to the digital nature of our products, refunds are limited. However, if a product is defective, inaccessible, or significantly misrepresented, you may contact support for review. We aim to maintain fairness for both buyers and sellers.",
  },

  // Payments
  {
    category: 'Payments',
    question: "What payment methods do you accept?",
    answer: "We accept secure online payments through trusted payment gateways. Available methods may include credit cards, debit cards, and other supported digital payment systems.",
  },
  {
    category: 'Payments',
    question: "When will I be charged?",
    answer: "You are charged at the time of checkout once your payment is successfully authorized.",
  },
  {
    category: 'Payments',
    question: "Is my payment information secure?",
    answer: "Yes. All transactions are encrypted and processed through secure payment providers. We do not store sensitive card information on our servers.",
  },

  // Sellers & Licensing
  {
    category: 'Sellers & Licensing',
    question: "Can I sell my AI tools or digital products here?",
    answer: "Yes. Developers and creators can apply to become sellers. Once approved, you can upload products, set pricing, manage updates, and track sales through your seller dashboard.",
  },
  {
    category: 'Sellers & Licensing',
    question: "What types of products can I sell?",
    answer: "You can sell AI tools, SaaS applications, mobile apps, website templates, automation workflows, developer resources, and other digital solutions that comply with our marketplace guidelines.",
  },
  {
    category: 'Sellers & Licensing',
    question: "How do licensing terms work?",
    answer: "Each product includes clear licensing information. Buyers must review and comply with the licensing terms specified by the seller before use.",
  },
];

// Map categories to icons
const categoryIcons: Record<FAQItem['category'], React.ElementType> = {
  General: MessageCircle,
  'Orders & Access': ShoppingCart,
  'Shipping': Truck,
  Payments: CreditCard,
  'Returns & Refunds': MessageCircle,
  'Sellers & Licensing': MessageCircle,
  'Delivery & Availability': Truck,
};

// 2. FAQ Accordion Component
const FAQItemComponent: React.FC<{ item: FAQItem, index: number, open: boolean, toggle: (index: number) => void }> = ({ item, index, open, toggle }) => {

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={() => toggle(index)}
        // Simplified classes, keeping p-5 for spacing
        className="w-full flex justify-between items-center p-5 text-left transition duration-300 "
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        {/* Simplified content: just the question span */}
        <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
          {item.question}
        </span>
        {/* Reverted to Plus icon with rotate-45 animation, using orange color for consistency */}
        <Plus
          className={`w-6 h-6 text-primary  transform transition-transform duration-300 ${open ? 'rotate-45' : ''
            }`}
        />
      </button>
      <div
        id={`faq-answer-${index}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <p className="p-5 pt-0 text-gray-600 dark:text-gray-300 leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

// 3. Main Application Component
const App = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<FAQItem['category'] | 'All'>('All');

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = ['All', ...Array.from(new Set(faqData.map(item => item.category)))] as ('All' | FAQItem['category'])[];

  const filteredFaqData = activeCategory === 'All'
    ? faqData
    : faqData.filter(item => item.category === activeCategory);

  return (
    <>
      <HeroSection />

      <div className="min-h-screen font-sans p-4 sm:p-8">
        <header className="text-center py-12">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight sm:text-6xl">
            Everything You Need to Know
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Here you’ll find answers related to digital purchases, product access, payments, licensing, and selling on our platform. If you cannot find your answer, our support team is ready to help.          </p>
        </header>

        <main className="max-w-5xl mx-auto">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 p-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null); // Close any open accordion when changing category
                }}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm
                ${activeCategory === category
                    ? 'bg-primary text-white shadow-primary-500/50'
                    : ' text-gray-700 hover:bg-[#1b1541] hover:text-orange-600 dark:text-gray-200 dark:hover:bg-[#1b1541]'
                  }
              `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="rounded-xl overflow-hidden">
            {filteredFaqData.length > 0 ? (
              filteredFaqData.map((item, index) => (
                <FAQItemComponent
                  key={index}
                  item={item}
                  index={index}
                  open={openIndex === index}
                  toggle={toggleIndex}
                />
              ))
            ) : (
              <div className="p-10 text-center text-gray-500 dark:text-gray-400">
                No FAQs found in the "{activeCategory}" category.
              </div>
            )}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 p-8 text-center bg-[#1b1541] dark:bg-[#1b1541]/20 rounded-xl border border-gray/10 shadow-inner">
            <h3 className="text-2xl font-bold text-white  mb-3">Still have questions?</h3>
            <p className="text-white mb-4">
              If you cannot find the answer to your question, please reach out to our customer support team for assistance.            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-primary hover:bg-primary/80 transition duration-150 ease-in-out transform hover:scale-105"
            >
              Contact Support
            </a>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;