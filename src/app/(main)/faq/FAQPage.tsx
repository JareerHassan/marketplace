"use client"

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import HeroSection from "@/components/HeroSection";

// Define the type for the FAQ item
interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

// 1. Comprehensive FAQ Data
const faqData: FAQItem[] = [
  {
    category: 'FAQS',
    question: "What is AI APP SPACE?",
    answer: "AI APP SPACE is a digital marketplace where users can discover, explore, and buy AI tools, business tools, SaaS products, and digital apps. It is designed to help startups, freelancers, businesses, and digital teams find useful tools in one place.",
  },
  {
    category: 'FAQS',
    question: "What kind of products can I find on AI APP SPACE?",
    answer: "You can find AI tools, business apps, SaaS products, ecommerce tools, productivity software, automation tools, and other digital products that help improve workflows, marketing, business growth, and daily operations.",
  },
  {
    category: 'FAQS',
    question: "How do I buy AI tools online from AI APP SPACE?",
    answer: "You can browse products, choose the tool that fits your needs, and complete the checkout process online. After your purchase is confirmed, you will receive access to the digital product based on the delivery method provided.",
  },
  {
    category: 'FAQS',
    question: "Is AI APP SPACE only for businesses?",
    answer: "No. AI APP SPACE is useful for businesses, startups, freelancers, marketers, agencies, ecommerce sellers, students, and anyone looking for practical AI tools and digital business solutions.",
  },
  {
    category: 'FAQS',
    question: "Can I buy AI tools in Pakistan from AI APP SPACE?",
    answer: "Yes. AI APP SPACE is suitable for buyers in Pakistan who want to explore and purchase AI tools, business software, and digital apps online from a single marketplace.",
  },
  {
    category: 'FAQS',
    question: "Are the products on AI APP SPACE digital or physical?",
    answer: "The products on AI APP SPACE are digital products. That means you do not need physical delivery. Access is usually provided online after the purchase is completed.",
  },
  {
    category: 'FAQS',
    question: "How are digital products delivered after purchase?",
    answer: "Digital products are normally delivered through download access, account access, license details, product files, or instructions provided after successful payment. Delivery may vary depending on the product type.",
  },
  {
    category: 'FAQS',
    question: "Are AI tools on AI APP SPACE useful for small businesses?",
    answer: "Yes. Many AI tools and business apps are especially useful for small businesses because they can help save time, reduce manual work, improve marketing, automate tasks, and support business growth.",
  },
  {
    category: 'FAQS',
    question: "What are the best AI tools for business growth?",
    answer: "The best AI tools for business growth depend on your needs. Some businesses need AI marketing tools, others need productivity tools, automation software, chatbot tools, or ecommerce apps. AI APP SPACE helps users compare tools by category and use case.",
  },
  {
    category: 'FAQS',
    question: "How do I choose the right AI tool for my business?",
    answer: "Start by identifying your main goal, such as content creation, lead generation, automation, customer support, or ecommerce growth. Then compare tool features, pricing, ease of use, and business fit before making a decision.",
  },
  {
    category: 'FAQS',
    question: "Does AI APP SPACE offer AI tools for freelancers?",
    answer: "Yes. Freelancers can find AI tools for writing, design, productivity, automation, client communication, research, and business management to help them work faster and serve clients better.",
  },
  {
    category: 'FAQS',
    question: "Can startups use AI APP SPACE to find affordable business tools?",
    answer: "Yes. Startups can use AI APP SPACE to explore affordable AI tools, SaaS products, and business apps that support growth, efficiency, and digital operations without needing a large software budget.",
  },
  {
    category: 'FAQS',
    question: "What are AI business tools?",
    answer: "AI business tools are software solutions that use artificial intelligence to help businesses automate work, improve productivity, create content, manage customer support, analyze data, and make better decisions faster.",
  },
  {
    category: 'FAQS',
    question: "Are there AI tools for ecommerce businesses on AI APP SPACE?",
    answer: "Yes. Ecommerce businesses can find AI tools for product content, customer support, marketing, automation, store management, analytics, and sales growth depending on the categories available on the marketplace.",
  },
  {
    category: 'FAQS',
    question: "Can I compare different AI tools before buying?",
    answer: "Yes. AI APP SPACE is built to help users browse tools, explore categories, and compare digital products so they can choose the best option based on features, use case, and business goals.",
  },
  {
    category: 'FAQS',
    question: "Is AI APP SPACE a trusted marketplace for digital products?",
    answer: "AI APP SPACE is designed as a professional digital marketplace focused on AI tools, business apps, and SaaS products. Trust can be strengthened further by reviewing product details, seller information, and support policies before purchase.",
  },
  {
    category: 'FAQS',
    question: "Can I sell my AI tool on AI APP SPACE?",
    answer: "Yes. If you are a creator, developer, or business owner with a digital product, you may be able to apply as a seller and submit your AI tool or app for listing on the marketplace.",
  },
  {
    category: 'FAQS',
    question: "How do I list my AI app on AI APP SPACE?",
    answer: "To list your AI app, you usually need to apply as a seller, provide product details, pricing, descriptions, and any required files or access information. Once approved, your product can be published on the marketplace.",
  },
  {
    category: 'FAQS',
    question: "What should I look for before buying an AI tool online?",
    answer: "Before buying an AI tool online, check the product features, pricing model, business use case, compatibility, delivery method, support details, and whether the tool actually solves your problem.",
  },
  {
    category: 'FAQS',
    question: "Why should I use an AI tools marketplace instead of searching manually?",
    answer: "An AI tools marketplace saves time by putting multiple tools, categories, and product options in one place. Instead of searching manually across many websites, users can browse, compare, and discover business-ready tools more efficiently.",
  },
  {
    category: 'Beginner / Awareness (TOFU)',
    question: "What is an AI tools marketplace?",
    answer: "An AI tools marketplace is a platform where users can discover, compare, and access different AI tools for business, productivity, marketing, and automation--all in one place. It helps you save time by finding the best tools without searching multiple websites.",
  },
  {
    category: 'Beginner / Awareness (TOFU)',
    question: "What are AI tools used for?",
    answer: "AI tools are used to automate tasks, create content, analyze data, improve marketing, enhance customer support, and increase productivity. Businesses use them to save time and reduce manual work.",
  },
  {
    category: 'Beginner / Awareness (TOFU)',
    question: "Are AI tools difficult to use?",
    answer: "Most modern AI tools are designed to be beginner-friendly. Many require no coding skills and come with simple dashboards, tutorials, and templates.",
  },
  {
    category: 'Beginner / Awareness (TOFU)',
    question: "Are AI tools free or paid?",
    answer: "AI tools can be:\nFree\nFreemium (limited features)\nPaid (premium features)\nThe right option depends on your needs and budget.",
  },
  {
    category: 'Beginner / Awareness (TOFU)',
    question: "Why should I use an AI tools marketplace instead of searching manually?",
    answer: "An AI marketplace saves time by:\nShowing curated tools\nComparing features easily\nHelping you find the best tools faster",
  },
  {
    category: 'Consideration (MOFU)',
    question: "How do I choose the best AI tool for my business?",
    answer: "You should consider:\nYour business goal (marketing, automation, content)\nBudget\nEase of use\nFeatures\nReviews or ratings",
  },
  {
    category: 'Consideration (MOFU)',
    question: "Which AI tools are best for small businesses?",
    answer: "The best AI tools for small businesses are:\nAI writing tools\nAI marketing tools\nAI automation tools\nThese help reduce workload and increase efficiency.",
  },
  {
    category: 'Consideration (MOFU)',
    question: "What are the best AI tools for productivity?",
    answer: "Popular categories include:\nTask automation tools\nAI writing assistants\nWorkflow automation platforms\nThese tools help you save time and work smarter.",
  },
  {
    category: 'Consideration (MOFU)',
    question: "Can AI tools replace human work?",
    answer: "AI tools do not fully replace humans--they enhance productivity. They help automate repetitive tasks so humans can focus on strategy and creativity.",
  },
  {
    category: 'Consideration (MOFU)',
    question: "Are AI tools safe to use?",
    answer: "Most AI tools are safe if you:\nUse trusted platforms\nCheck privacy policies\nAvoid sharing sensitive data unnecessarily",
  },
  {
    category: 'Decision / Buyer Intent (BOFU)',
    question: "How much do AI tools cost?",
    answer: "Prices vary depending on the tool:\nFree tools -> $0\nBasic plans -> $5-$30/month\nAdvanced tools -> $50+ per month",
  },
  {
    category: 'Decision / Buyer Intent (BOFU)',
    question: "Are paid AI tools worth it?",
    answer: "Yes, paid AI tools usually offer:\nBetter performance\nMore features\nHigher limits\nThey are ideal for businesses and professionals.",
  },
  {
    category: 'Decision / Buyer Intent (BOFU)',
    question: "How can AI tools help my business grow?",
    answer: "AI tools help by:\nAutomating tasks\nImproving marketing\nIncreasing efficiency\nSaving time and costs",
  },
  {
    category: 'Decision / Buyer Intent (BOFU)',
    question: "Can I try AI tools before buying?",
    answer: "Yes, most AI tools offer:\nFree trials\nFreemium versions\nThis allows you to test before committing.",
  },
  {
    category: 'Decision / Buyer Intent (BOFU)',
    question: "What are the best AI tools for startups?",
    answer: "Startups benefit from:\nAI marketing tools\nAI automation tools\nAI content tools\nThese reduce costs and improve growth speed.",
  },
  {
    category: 'Platform-Specific',
    question: "How does AI App Space work?",
    answer: "AI App Space helps you discover, compare, and explore the best AI tools across different categories like marketing, automation, content creation, and business tools--all in one platform.",
  },
  {
    category: 'Platform-Specific',
    question: "Is AI App Space free to use?",
    answer: "Yes, browsing and discovering AI tools on AI App Space is completely free.",
  },
  {
    category: 'Platform-Specific',
    question: "Do you provide AI tools directly?",
    answer: "No, AI App Space is a marketplace that connects you with the best AI tools and platforms.",
  },
  {
    category: 'Platform-Specific',
    question: "How often are tools updated?",
    answer: "We regularly update our listings to include new and trending AI tools.",
  },
  {
    category: 'Platform-Specific',
    question: "Can I submit my AI tool?",
    answer: "Yes, you can submit your AI tool to be featured on our platform.",
  },
  {
    category: 'SEO + Featured Snippet',
    question: "What is the best AI tools marketplace?",
    answer: "The best AI tools marketplace is one that offers a wide range of tools, easy navigation, trusted listings, and updated content--like AI App Space.",
  },
  {
    category: 'SEO + Featured Snippet',
    question: "Which AI tools are best for business automation?",
    answer: "The best AI tools for automation include workflow automation platforms, AI chatbots, and task automation tools.",
  },
  {
    category: 'SEO + Featured Snippet',
    question: "What are the best free AI tools?",
    answer: "Some of the best free AI tools include AI writing tools, design tools, and chatbot tools with freemium plans.",
  },
  {
    category: 'SEO + Featured Snippet',
    question: "How to find the best AI tools quickly?",
    answer: "Use a trusted AI tools marketplace where tools are categorized, reviewed, and easy to compare.",
  },
  {
    category: 'SEO + Featured Snippet',
    question: "Are AI tools worth using in 2026?",
    answer: "Yes, AI tools are becoming essential for businesses to stay competitive, improve efficiency, and scale operations.",
  },
];
const FAQItemComponent: React.FC<{
  item: FAQItem;
  index: number;
  open: boolean;
  toggle: (index: number) => void;
}> = ({ item, index, open, toggle }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={() => toggle(index)}
        className="w-full flex justify-between items-start sm:items-center gap-4 px-4 py-4 sm:px-6 sm:py-5 text-left transition duration-300"
      >
        <span className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100 leading-snug">
          {item.question}
        </span>

        <Plus
          className={`min-w-[22px] w-5 h-5 sm:w-6 sm:h-6 text-primary transition-transform duration-300 ${open ? "rotate-45" : ""
            }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ${open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <p className="px-4 pb-4 sm:px-6 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const App = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [
    "All",
    ...Array.from(new Set(faqData.map((item) => item.category))),
  ];

  const filteredFaqData =
    activeCategory === "All"
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  return (
    <>
      <HeroSection />

      <div className="min-h-screen font-sans px-3 sm:px-6 lg:px-10 py-6 sm:py-10">

        {/* HEADER */}
        <header className="text-center mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
            Everything You Need to Know
          </h2>

          <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-400">
            Here you’ll find answers related to digital purchases, product access,
            payments, licensing, and selling on our platform.
          </p>
        </header>

        <main className=" mx-auto">

          {/* CATEGORY FILTER */}
          <div className="flex overflow-x-auto sm:flex-wrap justify-start sm:justify-center gap-2 mb-6 sm:mb-10 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null);
                }}
                className={`whitespace-nowrap px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200
                ${activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-[#1b1541] text-gray-700 dark:text-gray-200 hover:bg-[#1b1541] hover:text-orange-500"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ LIST */}
          <div className="bg-white dark:bg-[#0f0b2c] rounded-xl shadow-md overflow-hidden">
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
              <div className="p-6 text-center text-gray-500">
                No FAQs found.
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-10 sm:mt-14 p-5 sm:p-8 text-center bg-[#1b1541] rounded-xl">
            <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">
              Still have questions?
            </h3>

            <p className="text-sm sm:text-base text-white mb-4">
              If you cannot find the answer, contact our support team.
            </p>

            <a
              href="/contact"
              className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full bg-primary text-white hover:scale-105 transition"
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