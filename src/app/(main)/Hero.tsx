"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useRouter } from "next/navigation";

interface HeroBg {
  id: string;
  imageUrl: string;
  description: string;
  imageHint?: string;
}

interface HeroSectionProps {
  heroBg?: HeroBg;
}

const dynamicWords = ["AI Tools", "Apps", "Digital Products"];
const quickCategories = [ "AI Chatbot", "Fire Wave VPN", "Web Security", "Device Scan", "AI Voice Tool"];

const HeroSection: React.FC<HeroSectionProps> = ({ heroBg }) => {
  const background = heroBg || PlaceHolderImages.find((p) => p.id === "hero-background");
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [typedWord, setTypedWord] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [forward, setForward] = useState(true);

  const [imgLoaded, setImgLoaded] = useState(false);

  const typingRef = useRef<NodeJS.Timeout | null>(null);

  // Typing effect
  useEffect(() => {
    const currentWord = dynamicWords[currentWordIndex];
    let charIndex = forward ? 0 : currentWord.length;

    const type = () => {
      if (forward) {
        if (charIndex <= currentWord.length) {
          setTypedWord(currentWord.slice(0, charIndex));
          charIndex++;
          if (charIndex > currentWord.length) {
            typingRef.current = setTimeout(() => setForward(false), 1000);
          } else {
            typingRef.current = setTimeout(type, 150);
          }
        }
      } else {
        if (charIndex >= 0) {
          setTypedWord(currentWord.slice(0, charIndex));
          charIndex--;
          if (charIndex < 0) {
            setForward(true);
            setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
          }
          typingRef.current = setTimeout(type, 100);
        }
      }
    };

    type();
    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [currentWordIndex, forward]);

  return (
    <section className="w-full  flex flex-col items-center justify-center text-center px-4 relative">

      {/* Content */}
      <div className="relative z-10 max-w-3xl pb-24 pt-32"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          Explore the World <br />
          of <span className="text-primary">{typedWord}</span>
          <span className="animate-blink">|</span>
        </h1>

        {/* Search Bar */}
        <div className="mt-8 relative">
          <div className="flex items-center w-full rounded-full border border-gray-700 dark:bg-gray-700/50 bg-background/50 backdrop-blur-sm hover:shadow-md transition-all duration-200">
            <div className="pl-5 pr-3">
              <Icons.Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search by tool name, tags, use case, or category to find exactly what you need."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && searchTerm.trim()) {
                  router.push(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
                }
              }}
              className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-lg py-6 pr-4 bg-transparent placeholder-gray-300 focus:border-0"
            />
            <div className="pr-3 flex items-center gap-2">
              {searchTerm && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchTerm("")}
                  className="h-8 w-8 p-0"
                >
                  <Icons.X className="h-4 w-4" />
                </Button>
              )}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => {
                  const query = searchTerm.trim();
                  if (query) {
                    router.push(`/ai-search?q=${encodeURIComponent(query)}`);
                  } else {
                    router.push('/ai-search');
                  }
                }}
                className="h-9 px-3 rounded-full transition-all hover:bg-accent"
              >
                <Icons.Bot className="h-4 w-4 mr-1.5" />
                <span className="text-sm font-medium">AI</span>
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => {
                  if (searchTerm.trim()) {
                    router.push(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
                  }
                }}
                className="h-9 px-4 rounded-full"
              >
                <Icons.Search className="h-4 w-4 mr-1.5" />
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Categories */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {quickCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => window.location.href = `/products?search=${encodeURIComponent(cat)}`}
              className="px-3 py-1 text-sm border border-1 border-gray-700 rounded-lg dark:bg-transparent dark:hover:bg-[#1c153e] hover:border-primary transition-all duration-300"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[120vw] blur-3xl rounded-full"
        style={{
          background: "var(--bg-gradient)",
        }}
      />


      <style jsx>{`
    .animate-blink {
      animation: blink 1s step-start infinite;
    }
    @keyframes blink {
      50% { opacity: 0; }
    }
  `}</style>
    </section >

  );
};

export default HeroSection;