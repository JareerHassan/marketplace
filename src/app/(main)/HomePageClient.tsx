'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/lib/dummy-data';
import { ProductCard } from '@/components/product-card';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import HeroSection from './Hero';
import HoverProductCards from './HoverProductCards';
import AIBanner from './AIBannerPage';
import AgentControlSection from "./AIAgentsComponent"
import api from '@/lib/api';
import axios from 'axios';
import { SearchParamsWrapper } from './SearchParamsWrapper';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://marketplacebackend.oxmite.com/api';

// Default icon mapping for categories
const categoryIconMap: Record<string, keyof typeof Icons> = {
  'chatbots': 'Bot',
  'prompts': 'Terminal',
  'automations': 'Zap',
  'templates': 'ClipboardCopy',
  'apis': 'Code',
  'datasets': 'Database',
  'widgets': 'Component',
  'tools': 'Wrench',
  'default': 'Component',
};

export default function HomePage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [products, setProducts] = useState<any[]>([]);

  const handleCategoryChange = useCallback((category: string | null, categoryProducts: any[]) => {
    setProducts(categoryProducts);
  }, []);

  useEffect(() => {
    fetchCategories();
    fetchFeaturedProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoadingCategories(true);
      const response = await axios.get(`${API_BASE_URL}/categories/active`);
      setCategories(response.data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setCategories([]);
    } finally {
      setLoadingCategories(false);
    }
  };

  const fetchFeaturedProducts = async () => {
    try {
      setLoadingProducts(true);
      const response = await api.get('/products', {
        params: { sort: 'latest' }
      });
      // Get latest 3 products as featured
      const products = response.data || [];
      setFeaturedProducts(products.slice(0, 3));
    } catch (error) {
      console.error('Error fetching products:', error);
      setFeaturedProducts([]);
    } finally {
      setLoadingProducts(false);
    }
  };


  const getCategoryIcon = (category: any) => {
    // If category has an icon image, return null to use image instead
    if (category.icon) {
      return null;
    }
    // Otherwise use icon mapping
    const slug = category.slug?.toLowerCase() || category.name?.toLowerCase() || '';
    const iconName = categoryIconMap[slug] || categoryIconMap['default'];
    return Icons[iconName] || Icons.Component;
  };

  const getCategoryIconUrl = (category: any) => {
    if (!category.icon) return null;
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://marketplacebackend.oxmite.com';
    if (category.icon.startsWith('http')) return category.icon;
    return `${API_BASE_URL}/${category.icon}`;
  };

  // Category Card Component
  function CategoryCard({ category, iconUrl, IconComponent, categorySlug }: any) {
    const [showImage, setShowImage] = useState(!!iconUrl);

    return (
      <>
        <Link href={`/products?category=${categorySlug}`} className="group">
          <Card className="p-6  items-center justify-start gap-2  text-start
         bg-gray-300 dark:bg-gray-900 border-2 border-transparent hover:border-primary/50 transition-all duration-300 min-h-[200px]">
            {showImage && iconUrl ? (
              <div className="w-24 h-20  rounded-xl overflow-hidden border-2 border-gray-500 shadow-lg">
                <img
                  src={iconUrl}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  onError={() => setShowImage(false)}
                />
              </div>
            ) : IconComponent ? (
              <IconComponent className="h-20 w-20 text-white bg-gray-500 border shadow rounded-xl
             p-4 transition-transform" />
            ) : (
              <Icons.Component className="h-20 w-20 text-white bg-gray-500 border shadow rounded-xl
             p-4 transition-transform" />
            )}
            <h3 className="mt-4 text-md font-semibold">{category.name}</h3>
          </Card>
        </Link>

      </>
    );
  }

  return (



    <Suspense fallback={<div />}>
      <SearchParamsWrapper onCategoryChange={handleCategoryChange} />
      <div className="flex flex-col min-h-screen   ">
        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection />
          <HoverProductCards />

          {/* Trending Categories */}
          <section className=" mx-auto container">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-[#b3ec25] via-from-[#b3ec25] to-purple-200 bg-clip-text text-transparent">
                Trending Categories
              </h2>
              <p className="mt-2 max-w-6xl text-muted-foreground">
Discover AI tools for business organized by niche, use case, and functionality. Whether you are looking for AI writing tools, AI marketing tools, AI coding tools, AI cybersecurity tools, AI agents, or AI productivity tools, our AI tools marketplace makes it easy to find the right solution for your goals. Our structured AI tools categories are designed to support intelligent discovery, helping users explore the best AI apps marketplace for business growth, automation, and efficiency. Browse industry-specific and function-based categories to quickly access the most relevant AI business tools and AI software for business.                           </p>
              {loadingCategories ? (
                <div className="mt-12 flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : categories.length === 0 ? (
                <div className="mt-12 text-center py-12 text-muted-foreground">
                  <p>No categories available at the moment.</p>
                </div>
              ) : (
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                  {categories.slice(0, 4).map((category) => {
                    const IconComponent = getCategoryIcon(category);
                    const iconUrl = getCategoryIconUrl(category);
                    const categorySlug = category.slug || category._id || category.id;

                    return (

                      <CategoryCard
                        key={category._id || category.id}
                        category={category}
                        iconUrl={iconUrl}
                        IconComponent={IconComponent}
                        categorySlug={categorySlug}
                      />


                    );
                  })}
                </div>
              )}
              <div className="mt-12 text-center">
                <Link href="/categories">
                  <Button className='bg-gradient-to-r from-[#b3ec25] via-[#b3ec25] to-[#b3ec25]' variant="outline" size="lg">
                    Explore All Categories <Icons.ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

          </section>

          {/* Featured Products */}
          <section className="py-16 mx-auto container">
            <div className="px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-[#b3ec25] via-[#b3ec25] to-purple-200 bg-clip-text text-transparent">Featured AI Tools</h2>
              <p className="mt-2 text-muted-foreground">Explore featured AI tools and high-value digital assets hand-picked from our growing AI tools marketplace. Each solution is selected based on reliability, innovation, and real-world business value. Our featured section includes the best AI tools, AI apps for business, and AI business tools that help companies automate operations, improve decision-making, enhance creative output, and scale efficiently. Every product is reviewed to meet marketplace quality standards and deliver a secure, trusted experience for users searching for powerful AI software for business and top-performing SaaS tools.
              </p>
              {loadingProducts ? (
                <div className="mt-12 flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : featuredProducts.length === 0 ? (
                <div className="mt-12 text-center py-12 text-muted-foreground">
                  <p>No featured products available at the moment.</p>
                  <Link href="/products" className="mt-4 inline-block">
                    <Button variant="outline" size="lg">
                      Explore All Products <Icons.ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              ) : (
                <>
                  <div className="mt-12 container grid justify-center grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-10">
                    {featuredProducts.map((product) => (
                      <ProductCard key={product._id || product.id} product={product} />
                    ))}
                  </div>
                  <div className="mt-12 text-center">
                    <Link href="/products">
                      <Button className='bg-gradient-to-r from-[#b3ec25] via-[#b3ec25] to-[#b3ec25]' variant="outline" size="lg">
                        Explore All Products <Icons.ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </section>

          <AgentControlSection />
          <AIBanner />

          {/* How It Works */}
          <section className="mb-12 mx-auto container">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tight text-center">How It Works</h2>
              <div className="mt-12 grid md:grid-cols-2 gap-12">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 border-2 border-primary/30">
                    <Icons.ShoppingCart className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">For Buyers</h3>
                  <p className="mt-2 text-muted-foreground">Discover the best AI tools, AI apps for business, and digital solutions across multiple industries and use cases. Compare features, evaluate real-world applications, and securely purchase through our trusted AI tools marketplace. From AI business tools and AI productivity tools to advanced AI software for business, our platform makes it easy to find and implement the right solutions directly into your workflow without delays.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-accent/10 border-2 border-accent/30">
                    <Icons.DollarSign className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">For Sellers</h3>
                  <p className="mt-2 text-muted-foreground">List your applications, AI models, APIs, SaaS tools, templates, and digital products in a growing AI apps marketplace built for scale. Reach a global audience searching for innovative AI tools for business, manage sales through an advanced dashboard, and monetize your expertise with transparent reporting, structured revenue models, and a marketplace designed to support long-term digital growth.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          {/* <section className="py-16 md:py-24 bg-card/50 mx-auto container">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tight text-center">From the Community</h2>
              <p className="mt-2 text-center  text-muted-foreground max-w-5xl mx-auto">Professionals across industries rely on this ecosystem to discover and deploy high-performance digital tools. The platform has become a trusted source for scalable AI solutions and production-ready software assets. Sellers benefit from streamlined monetization and marketplace visibility, while buyers appreciate the quality control and curated experience.
              </p>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-card border-2 border-border/50 p-6">
                    <CardContent className="p-0">
                      <p className="text-foreground/90">"{testimonial.quote}"</p>
                      <div className="mt-6 flex items-center gap-4">
                        <Avatar className="h-12 w-12 border-2 border-primary/50">
                          <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint="person portrait" />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section> */}

        </main>
      </div>
    </Suspense>
  );
}
