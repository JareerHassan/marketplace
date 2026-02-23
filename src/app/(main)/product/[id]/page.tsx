'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Icons } from '@/components/icons';
import { ProductCard } from '@/components/product-card';
import api from '@/lib/api';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  // Update SEO meta tags
  useEffect(() => {
    if (product) {
      // Update document title
      document.title = product.seo?.meta_title || product.name || 'Product';
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', product.seo?.meta_description || product.shortDescription || '');
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = product.seo?.meta_description || product.shortDescription || '';
        document.getElementsByTagName('head')[0].appendChild(meta);
      }

      // Update keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      const keywords = product.seo?.focus_keyword || (product.tags || []).join(', ');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else if (keywords) {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.getElementsByTagName('head')[0].appendChild(meta);
      }

      // Update Open Graph tags
      if (product.seo?.og_title) {
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
          ogTitle.setAttribute('content', product.seo.og_title);
        } else {
          const meta = document.createElement('meta');
          meta.setAttribute('property', 'og:title');
          meta.content = product.seo.og_title;
          document.getElementsByTagName('head')[0].appendChild(meta);
        }
      }

      if (product.seo?.og_description) {
        let ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
          ogDesc.setAttribute('content', product.seo.og_description);
        } else {
          const meta = document.createElement('meta');
          meta.setAttribute('property', 'og:description');
          meta.content = product.seo.og_description;
          document.getElementsByTagName('head')[0].appendChild(meta);
        }
      }

      if (product.seo?.og_image) {
        let ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) {
          ogImage.setAttribute('content', product.seo.og_image);
        } else {
          const meta = document.createElement('meta');
          meta.setAttribute('property', 'og:image');
          meta.content = product.seo.og_image;
          document.getElementsByTagName('head')[0].appendChild(meta);
        }
      }

      // Add canonical URL
      if (product.seo?.canonical_url) {
        let canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
          canonical.setAttribute('href', product.seo.canonical_url);
        } else {
          const link = document.createElement('link');
          link.rel = 'canonical';
          link.href = product.seo.canonical_url;
          document.getElementsByTagName('head')[0].appendChild(link);
        }
      }

      // Add robots meta
      if (product.seo?.robots) {
        let robots = document.querySelector('meta[name="robots"]');
        if (robots) {
          robots.setAttribute('content', product.seo.robots);
        } else {
          const meta = document.createElement('meta');
          meta.name = 'robots';
          meta.content = product.seo.robots;
          document.getElementsByTagName('head')[0].appendChild(meta);
        }
      }

      // Add schema markup
      if (product.seo?.schema_markup) {
        let schemaScript = document.querySelector('script[type="application/ld+json"]');
        if (schemaScript) {
          schemaScript.textContent = JSON.stringify(product.seo.schema_markup);
        } else {
          const script = document.createElement('script');
          script.type = 'application/ld+json';
          script.textContent = JSON.stringify(product.seo.schema_markup);
          document.getElementsByTagName('head')[0].appendChild(script);
        }
      }
    }
  }, [product]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/products/${params.id}`);
      setProduct(response.data);
      
      // Fetch related products
      if (response.data.category) {
        const categoryId = typeof response.data.category === 'object' 
          ? response.data.category._id || response.data.category.id
          : response.data.category;
        
        const relatedResponse = await api.get('/products', {
          params: { category: categoryId }
        });
        const filtered = (relatedResponse.data || []).filter(
          (p: any) => (p._id || p.id) !== (response.data._id || response.data.id)
        );
        setRelatedProducts(filtered.slice(0, 3));
      }
    } catch (err: any) {
      console.error('Error fetching product:', err);
      setError(err.response?.data?.message || 'Product not found');
      if (err.response?.status === 404) {
        notFound();
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center justify-center py-24">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center py-24">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">{error || 'The product you are looking for does not exist.'}</p>
          <Button onClick={() => router.push('/products')}>Browse Products</Button>
        </div>
      </div>
    );
  }

  // Construct proper image URL
  const getImageUrl = () => {
    const rawImage = product.image;
    if (!rawImage) return '/placeholder.png';
    
    // If it's already a full URL (starts with http:// or https://)
    if (typeof rawImage === 'string' && (rawImage.startsWith('http://') || rawImage.startsWith('https://'))) {
      return rawImage;
    }
    
    // If it's a relative path starting with /
    if (typeof rawImage === 'string' && rawImage.startsWith('/')) {
      return rawImage;
    }
    
    // If it's a relative path (like uploads/image.jpg), construct full URL
    if (typeof rawImage === 'string' && rawImage.trim() !== '') {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://marketplacebackend.oxmite.com';
      // Remove leading slash if present to avoid double slashes
      const cleanPath = rawImage.startsWith('/') ? rawImage.slice(1) : rawImage;
      return `${API_BASE_URL}/${cleanPath}`;
    }
    
    // Fallback to placeholder
    return '/placeholder.png';
  };
  
  const productImage = getImageUrl();
  const isExternalImage = productImage.startsWith('http://') || productImage.startsWith('https://');
  const categoryName = product.category?.name || product.category || 'Uncategorized';
  const categorySlug = product.category?.slug || '';
  const pricingModel = product.pricingModel || 'free';
  const isFree = pricingModel === 'free' || pricingModel === 'Free';
  const price = product.price || 0;
  const pros = product.pros || product.features || [];
  const limitations = product.limitations || [];
  const tags = product.tags || [];
  const useCase = product.useCase || '';
  const bestFor = product.bestFor || '';
  const fullDescription = product.fullDescription || product.description || product.shortDescription || '';

  return (
    <>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="space-y-6">
          {/* Breadcrumb */}
          {product.seo?.breadcrumb_title && (
            <nav className="text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              {' / '}
              <Link href="/products" className="hover:text-primary">Explore</Link>
              {' / '}
              {categorySlug && (
                <>
                  <Link href={`/products?category=${categorySlug}`} className="hover:text-primary">{categoryName}</Link>
                  {' / '}
                </>
              )}
              <span className="text-foreground">{product.seo.breadcrumb_title || product.name}</span>
            </nav>
          )}

          {/* Header Section */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-4">
            <div className="flex-1">
              <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
                {product.seo?.meta_title || product.name}
              </h1>
              <div className="flex items-center gap-4 mt-4">
                {categoryName && (
                  <Link href={`/products?category=${categorySlug || categoryName}`}>
                    <Badge variant="outline" className="text-lg px-3 py-1">{categoryName}</Badge>
                  </Link>
                )}
                {useCase && (
                  <Badge variant="secondary" className="text-sm">{useCase}</Badge>
                )}
              </div>

              {/* Stats Section */}
              <div className="flex flex-wrap gap-6 mt-6">
                <div className="flex flex-col items-center bg-card p-4 rounded-xl shadow-md w-32">
                  <p className="text-2xl font-bold">{product.rating || 'N/A'}</p>
                  <span className="text-sm text-muted-foreground">Rating</span>
                </div>
                <div className="flex flex-col items-center bg-card p-4 rounded-xl shadow-md w-32">
                  <p className="text-2xl font-bold">{product.reviewCount || 0}</p>
                  <span className="text-sm text-muted-foreground">Reviews</span>
                </div>
                <div className="flex flex-col items-center bg-card p-4 rounded-xl shadow-md w-32">
                  <p className="text-2xl font-bold">{isFree ? 'Free' : `$${price.toFixed(2)}`}</p>
                  <span className="text-sm text-muted-foreground">Price</span>
                </div>
              </div>
            </div>
            <div className="relative w-full md:w-60 h-60 rounded-lg overflow-hidden border-2 border-accent/30">
              {isExternalImage ? (
                <img 
                  src={productImage} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.png';
                  }}
                />
              ) : (
                <Image 
                  src={productImage} 
                  alt={product.name} 
                  fill 
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.png';
                  }}
                />
              )}
            </div>
          </div>

          {/* Description */}
          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground">{fullDescription}</p>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag: string, index: number) => (
                <Link key={index} href={`/products?search=${encodeURIComponent(tag)}`}>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          )}

          {/* Purchase Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {product.websiteLink && (
              <Button size="lg" variant="ghost" className="w-full border" asChild>
                <a href={product.websiteLink} target="_blank" rel="noopener noreferrer">
                  <Icons.ArrowRight className="mr-2 h-5 w-5" /> View Website
                </a>
              </Button>
            )}
            {!isFree && (
              <Button size="lg" variant="default" className="w-full">
                Buy Now - ${price.toFixed(2)}
              </Button>
            )}
          </div>

          {/* Pros/Features */}
          {pros.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Features & Benefits</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {pros.map((pro: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <Icons.CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground/80">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Limitations */}
          {limitations.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Limitations</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {limitations.map((limitation: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <Icons.X className="h-5 w-5 text-muted-foreground" />
                    <span className="text-foreground/80">{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Best For */}
          {bestFor && (
            <Card>
              <CardHeader>
                <CardTitle>Best For</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{bestFor}</p>
              </CardContent>
            </Card>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((p: any) => (
                  <ProductCard key={p._id || p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
