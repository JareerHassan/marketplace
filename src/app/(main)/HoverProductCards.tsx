"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from '@/lib/api';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

interface Product {
    _id?: string;
    id?: string;
    name: string;
    image?: string;
    imageUrl?: string;
    slug?: string;
    shortDescription?: string;
    description?: string;
    rating?: number;
    reviewCount?: number;
    downloads?: string;
    hoverImage?: string;
}

export default function HoverProductCards() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTrendingProducts();
    }, []);

    const fetchTrendingProducts = async () => {
        try {
            setLoading(true);
            const response = await api.get('/products', {
                params: { sort: 'latest' }
            });
            // Get first 8 products for trending section
            const fetchedProducts = (response.data || []).slice(0, 8);
            setProducts(fetchedProducts);
        } catch (error) {
            console.error('Error fetching trending products:', error);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    // Construct image URL helper
    const getImageUrl = (product: Product) => {
        const rawImage = product.image || product.imageUrl;
        if (!rawImage) return '/placeholder.png';

        if (typeof rawImage === 'string' && (rawImage.startsWith('http://') || rawImage.startsWith('https://'))) {
            return rawImage;
        }

        if (typeof rawImage === 'string' && rawImage.startsWith('/')) {
            return rawImage;
        }

        if (typeof rawImage === 'string' && rawImage.trim() !== '') {
            const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://marketplacebackend.oxmite.com';
            const cleanPath = rawImage.startsWith('/') ? rawImage.slice(1) : rawImage;
            return `${API_BASE_URL}/${cleanPath}`;
        }

        return '/placeholder.png';
    };

    return (
        <section className="py-16 container mx-auto">
            <div className="px-4 md:px-6 mx-auto">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-[#b3ec25] via-[#b3ec25]to-purple-200 bg-clip-text text-transparent">
                    Trending AI Tools
                </h2>
               <div className="flex gap-6 ">
                <p className="mt-2 max-w-6xl text-muted-foreground">
                    Explore powerful tools crafted for creators, developers, startups, and digital entrepreneurs. Our marketplace highlights innovative AI-driven solutions designed to automate workflows, enhance productivity, and accelerate product development. Every tool featured here reflects quality, performance, and real-world usability for modern digital professionals.
                </p>
       
                </div>

                {loading ? (
                    <div className="mt-12 flex items-center justify-center py-12">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                ) : products.length === 0 ? (
                    <div className="mt-12 text-center py-12 text-muted-foreground">
                        <p>No trending products available at the moment.</p>
                    </div>
                ) : (
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
                        {products.map((product, i) => (
                            <HoverCard
                                key={product._id || product.id || i}
                                product={product}
                                index={i}
                                getImageUrl={getImageUrl}
                            />
                        ))}
                    </div>
                )}
            </div>
                     <div className="mt-12 text-center">
          <Link href="/products">
            <Button className='bg-gradient-to-r from-[#b3ec25] via-[#b3ec25] to-[#b3ec25]' variant="outline" size="lg">
              Explore All Products <Icons.ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        </section>
    );
}

function HoverCard({
    product,
    index,
    getImageUrl
}: {
    product: Product;
    index: number;
    getImageUrl: (product: Product) => string;
}) {
    const [hover, setHover] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const router = useRouter();

    // Apply mt on even columns (index % 2 === 1), mb on odd columns (index % 2 === 0)
    const marginClass = index % 2 === 1 ? "mt-8" : "mb-8";

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursorPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const productSlug = product.slug || product._id || product.id;
    const productImage = getImageUrl(product);
    const downloads = product.downloads || `${(product.reviewCount || 0)}+`;
    const productName = product.name || 'Unnamed Product';

    return (
        <div
            onClick={() => router.push(`/product/${productSlug}`)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseMove={handleMouseMove}
            className={`relative cursor-pointer p-4 rounded-2xl border border-gray-800 dark:bg-gray-900 overflow-hidden transform transition-all duration-300 hover:-translate-y-2 ${marginClass}`}
        >
            {/* Arrow follows cursor */}
            {hover && (
                <div
                    style={{
                        left: cursorPos.x,
                        top: cursorPos.y,
                        transform: "translate(-50%, -50%)",
                    }}
                    className="absolute w-16 h-16 rounded-full bg-[#b3ec25] flex items-center justify-center pointer-events-none z-10"
                >
                    <span className="text-lg font-semibold">&rarr;</span>
                </div>
            )}

            {/* NAME ABOVE IMAGE */}
            <h3 className="text-2xl font-semibold">{productName}</h3>
            <h6 className="text-xl">{downloads}</h6>

            {/* IMAGE */}
            <div className="h-64 mt-4 w-full overflow-hidden">
                <img
                    src={productImage}
                    alt={productName}
                    className="h-full w-full object-cover rounded-xl transition-all duration-300"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.png';
                    }}
                />
            </div>
        </div>
    );
}


