'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import axios from 'axios';
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  'https://marketplacebackend.oxmite.com/api';

// Default icon mapping
const categoryIconMap: Record<string, keyof typeof Icons> = {
  chatbots: 'Bot',
  prompts: 'Terminal',
  automations: 'Zap',
  templates: 'ClipboardCopy',
  apis: 'Code',
  datasets: 'Database',
  widgets: 'Component',
  tools: 'Wrench',
  default: 'Component',
};

export default function CategoriesPage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE_URL}/categories/active`);
      setCategories(res.data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 CATEGORY FILTERS
 // 🔹 CATEGORY FILTERS using type
const businessCategories = categories.filter(
  (c) => c.type?.toLowerCase() === 'business'
);

const toolsCategories = categories.filter(
  (c) => c.type?.toLowerCase() === 'tools' || c.type?.toLowerCase() === 'tool'
);

const otherCategories = categories.filter(
  (c) =>
    c.type?.toLowerCase() !== 'business' &&
    c.type?.toLowerCase() !== 'tools' &&
    c.type?.toLowerCase() !== 'tool'
);

  const getCategoryIcon = (category: any) => {
    if (category.icon) return null;
    const slug =
      category.slug?.toLowerCase() ||
      category.name?.toLowerCase() ||
      '';
    const iconName = categoryIconMap[slug] || categoryIconMap.default;
    return Icons[iconName] || Icons.Component;
  };

  const getCategoryIconUrl = (category: any) => {
    if (!category.icon) return null;

    const API_BASE_URL =
      process.env.NEXT_PUBLIC_API_URL ||
      'https://marketplacebackend.oxmite.com';

    if (category.icon.startsWith('http')) return category.icon;

    return `${API_BASE_URL}/${category.icon}`;
  };

  const CategoryCard = ({ category }: any) => {
    const [showImage, setShowImage] = useState(!!category.icon);
    const IconComponent = getCategoryIcon(category);
    const iconUrl = getCategoryIconUrl(category);
    const categorySlug = category.slug || category._id || category.id;

    return (
      <Link href={`/products?category=${categorySlug}`} className="group">
        <Card
          className="p-6 flex flex-col items-start gap-3
        bg-gray-300 dark:bg-gray-900
        border-2 border-transparent hover:border-primary/50
        transition-all duration-300 min-h-[230px]"
        >
          {showImage && iconUrl ? (
            <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-gray-500 shadow-lg">
              <img
                src={iconUrl}
                alt={category.name}
                className="w-full h-full object-cover"
                onError={() => setShowImage(false)}
              />
            </div>
          ) : IconComponent ? (
            <IconComponent
              className="h-24 w-24 text-white bg-gray-500
            border shadow rounded-xl p-4"
            />
          ) : (
            <Icons.Component
              className="h-24 w-24 text-white bg-gray-500
            border shadow rounded-xl p-4"
            />
          )}

          <h3 className="mt-4 text-md font-semibold">{category.name}</h3>
        </Card>
      </Link>
    );
  };

  const Section = ({ title, items }: any) => {
    if (!items.length) return null;

    return (
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6">{title}</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((category: any) => (
            <CategoryCard
              key={category._id || category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <HeroSection />

      <div className="container mx-auto px-4 py-8 md:py-12">

        <header className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#b3ec25] via-[#b3ec25] to-[#b3ec25] bg-clip-text text-transparent">
            Product Categories
          </h2>

          <p className="mt-3 max-w-4xl text-lg text-muted-foreground">
            Our marketplace is organized to make discovery simple and scalable.
          </p>
        </header>

        {loading ? (
          <div className="flex justify-center py-24">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : categories.length === 0 ? (
          <div className="text-center py-24 text-muted-foreground">
            <p>No categories available.</p>
          </div>
        ) : (
          <>
            {/* BUSINESS */}
            <Section
              title="Business Categories"
              items={businessCategories}
            />

            {/* TOOLS */}
            <Section
              title="Tools Categories"
              items={toolsCategories}
            />

            {/* OTHER */}
            <Section
              title="Other Categories"
              items={otherCategories}
            />
          </>
        )}
      </div>

      {/* NEWSLETTER */}
      <div className="mt-20 mb-5 px-3">
        <div
          className="
          rounded-2xl overflow-hidden border border-primary/20
          bg-gradient-to-br from-primary/5 via-background to-primary/5
          dark:from-primary/10 dark:via-gray-950 dark:to-primary/10
          p-8 md:p-12 lg:p-16 text-center"
        >
          <div className="max-w-3xl mx-auto">

            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Stay Updated with the Latest AI Tools
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              The AI landscape evolves rapidly. New prompts,
              automation workflows, templates and SaaS tools are
              added regularly.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="you@example.com"
                className="bg-background/80 backdrop-blur-sm h-12"
              />

              <Button size="lg" className="h-12 px-8">
                Subscribe
              </Button>
            </form>

            <p className="mt-6 text-sm text-muted-foreground">
              We respect your privacy. Unsubscribe anytime.
            </p>

          </div>
        </div>
      </div>
    </>
  );
}