'use client'

import { useState, useEffect, useMemo } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Star, Share2, Heart, ArrowRight, CheckCircle2, XCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Skeleton } from '@/components/ui/skeleton'
import { ProductCard } from '@/components/product-card'
import api from '@/lib/api'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function ProductDetailPage() {
  const { id } = useParams()
  const router = useRouter()

  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // ─── Fetch data ────────────────────────────────────────
  useEffect(() => {
    if (!id) return
    loadProduct()
  }, [id])

  const loadProduct = async () => {
    try {
      setLoading(true)
      const { data } = await api.get(`/products/${id}`)
      setProduct(data)

      if (data?.category?._id || data?.category) {
        const catId = data.category._id || data.category
        const res = await api.get('/products', { params: { category: catId, limit: 6 } })
        const others = (res.data || []).filter(p => p._id !== data._id)
        setRelated(others.slice(0, 4))
      }
    } catch (err) {
      const msg = err?.response?.data?.message || 'Product not found'
      setError(msg)
      if (err?.response?.status === 404) notFound()
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <ProductSkeleton />
  if (error || !product) return <ProductNotFound error={error} />

  // Helpers / derived values
  const mainImage = getMainImage(product)
  const gallery = product.gallery || (product.image ? [product.image] : [])
  const isFree = product.pricingModel?.toLowerCase() === 'free'
  const priceStr = isFree ? 'Free' : `$${Number(product.price || 0).toFixed(2)}`
  const rating = Number(product.rating || 0)
  const hasRating = rating > 0

  return (
    <>
      {/* ─── Floating mobile bar ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur-lg md:hidden">
        <div className="container flex items-center justify-between gap-4 px-4 py-3">
          <div className="font-semibold text-lg">{priceStr}</div>
          <div className="flex gap-3 flex-1">
            {product.websiteLink && (
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <a href={product.websiteLink} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </Button>
            )}
            {!isFree && (
              <Button size="sm" className="flex-1">
                Buy Now
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-6 md:py-10 lg:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-primary">Products</Link>
          {product.category?.slug && (
            <>
              <span className="mx-2">/</span>
              <Link
                href={`/products?category=${product.category.slug}`}
                className="hover:text-primary"
              >
                {product.category.name || product.category}
              </Link>
            </>
          )}
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </nav>

        {/* Hero – Title + Gallery + Price/CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 mb-12">
          {/* Left – Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-2xl border bg-muted">
              <Image
                src={mainImage}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                onError={e => (e.currentTarget.src = '/placeholder.png')}
              />
            </div>

            {gallery.length > 1 && (
              <Carousel className="w-full">
                <CarouselContent className="-ml-2">
                  {gallery.map((img, i) => (
                    <CarouselItem key={i} className="basis-1/3 pl-2 sm:basis-1/4">
                      <div className="relative aspect-square rounded-lg overflow-hidden border bg-muted cursor-pointer hover:opacity-90 transition">
                        <Image
                          src={img}
                          alt={`${product.name} screenshot ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="120px"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            )}
          </div>

          {/* Right – Title, price, actions, meta */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                {product.category?.name && (
                  <Badge variant="secondary" className="text-base px-3 py-1">
                    {product.category.name}
                  </Badge>
                )}
                {product.useCase && (
                  <Badge variant="outline" className="text-sm border border-0">
                    {product.useCase}
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                {product.name}
              </h1>

              {product.tagline && (
                <p className="mt-3 text-xl text-muted-foreground">
                  {product.tagline}
                </p>
              )}
            </div>

            {/* Price + Rating */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-end gap-3">
                <span className="text-4xl md:text-5xl font-bold">{priceStr}</span>
                {hasRating && (
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="flex">
                      {Array(5).fill(0).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.round(rating)
                              ? 'fill-primary text-primary'
                              : 'text-muted-foreground/40'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-medium">{rating.toFixed(1)}</span>
                    <span className="text-muted-foreground text-sm">
                      ({product.reviewCount || 0})
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4 text-muted-foreground">
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Main CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              {product.websiteLink && (
                <Button size="lg" className="flex-1 gap-2 text-base" asChild>
                  <a href={product.websiteLink} target="_blank" rel="noopener noreferrer">
                    <ArrowRight className="h-5 w-5" />
                    Visit Website
                  </a>
                </Button>
              )}

              {!isFree && (
                <Button size="lg" variant="default" className="flex-1 text-base">
                  Buy Now • {priceStr}
                </Button>
              )}
            </div>

            {/* Quick tags / badges */}
            {/* {product.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {product.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            )} */}
          </div>
        </div>

        {/* Tabs section */}
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="bg-transparent border-b w-full justify-start rounded-none h-auto p-0 mb-8">
            <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none pb-4 text-base">
              Overview
            </TabsTrigger>
            <TabsTrigger value="features" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none pb-4 text-base">
              Features
            </TabsTrigger>
            {product.limitations?.length > 0 && (
              <TabsTrigger value="limitations" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none pb-4 text-base">
                Limitations
              </TabsTrigger>
            )}
            {product.bestFor && (
              <TabsTrigger value="best-for" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none pb-4 text-base">
                Best For
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="overview" className="space-y-10">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2 className="text-2xl font-bold mb-6">Description</h2>
              <div dangerouslySetInnerHTML={{ __html: product.fullDescription || product.description || '' }} />
            </div>
          </TabsContent>

          <TabsContent value="features">
            {product.pros?.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {product.pros.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-lg leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No features listed yet.</p>
            )}
          </TabsContent>

          <TabsContent value="limitations">
            <div className="grid md:grid-cols-2 gap-6">
              {product.limitations.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <XCircle className="h-6 w-6 text-muted-foreground mt-1 flex-shrink-0" />
                  <p className="text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="best-for">
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                  {product.bestFor}
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related products */}
        {related.length > 0 && (
          <section className="py-12 md:py-16 border-t mt-16">
            <h2 className="text-3xl font-bold mb-8">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map(p => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}

// ─── Skeleton ────────────────────────────────────────────────
function ProductSkeleton() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-10">
      <div className="grid lg:grid-cols-2 gap-12">
        <Skeleton className="aspect-square rounded-2xl" />
        <div className="space-y-8">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-14 w-3/4" />
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    </div>
  )
}

function ProductNotFound({ error }) {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-bold mb-4">Product not found</h1>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        {error || "The product you're looking for doesn't exist or has been removed."}
      </p>
      <Button asChild size="lg">
        <Link href="/products">Browse All Products</Link>
      </Button>
    </div>
  )
}

function getMainImage(product) {
  if (!product?.image) return '/placeholder.png'
  if (typeof product.image === 'string' && product.image.startsWith('http')) return product.image
  if (product.image.startsWith('/')) return product.image
  
  const base = process.env.NEXT_PUBLIC_API_URL || 'https://marketplacebackend.oxmite.com'
  return `${base}/${product.image.replace(/^\/+/, '')}`
}