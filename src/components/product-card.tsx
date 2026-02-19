'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import type { Product } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  // Use slug if available, otherwise fall back to id
  const productSlug = (product as any).slug || product.id;
  const rawImage = (product as any).image || product.imageUrl;
  const productName = product.name;
  const productDescription = (product as any).shortDescription || product.description;
  const productPrice = (product as any).pricingModel === 'free' || (product as any).pricingModel === 'Free' ? 0 : (product.price || 0);
  const categoryName = (product as any).category?.name || product.category;
  
  // Construct proper image URL
  const getImageUrl = () => {
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
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5005';
      // Remove leading slash if present to avoid double slashes
      const cleanPath = rawImage.startsWith('/') ? rawImage.slice(1) : rawImage;
      return `${API_BASE_URL}/${cleanPath}`;
    }
    
    // Fallback to placeholder
    return '/placeholder.png';
  };
  
  const productImage = getImageUrl();
  const isExternalImage = productImage.startsWith('http://') || productImage.startsWith('https://');
  
  return (
    <Card className={cn("group relative flex flex-col overflow-hidden border-2 border-transparent dark:bg-gray-900 hover:border-accent/50 transition-all duration-300", className)}>
        <CardHeader className="p-0">
          <Link href={`/product/${productSlug}`} className="block">
            <div className="relative aspect-video">
                {isExternalImage ? (
                  // Use regular img tag for external images to avoid Next.js Image optimization issues
                  <img
                    src={productImage}
                    alt={productName || 'Product image'}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.png';
                    }}
                  />
                ) : (
                  <Image
                    src={productImage}
                    alt={productName || 'Product image'}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="AI product"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.png';
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
            </div>
          </Link>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-lg leading-tight">
              <Link href={`/product/${productSlug}`} className="hover:text-primary transition-colors">
                {productName}
              </Link>
            </CardTitle>
            <Badge variant="secondary" className="font-mono text-sm whitespace-nowrap bg-primary/10 text-primary border border-primary/20">
              {productPrice === 0 ? 'Free' : `$${productPrice.toFixed(2)}`}
            </Badge>
          </div>
          {categoryName && (
            <Badge variant="outline" className="mt-2 text-xs">
              {categoryName}
            </Badge>
          )}
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{productDescription}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                {(product.rating || product.rating === 0) && (
                  <>
                    <div className="flex items-center gap-1">
                        <Icons.Star className="w-4 h-4 text-primary" />
                        <span>{product.rating}</span>
                    </div>
                    {product.reviewCount && (
                      <span>({product.reviewCount} reviews)</span>
                    )}
                  </>
                )}
            </div>
            <Button asChild size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Link href={`/product/${productSlug}`}>
                    View
                    <Icons.ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </CardFooter>
    </Card>
  );
}
