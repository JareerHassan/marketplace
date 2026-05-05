import type { Metadata } from 'next'
import ProductDetailClient from './ProductDetailClient'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://marketplacebackend.oxmite.com/api'

async function getProduct(id: string) {
  try {
    const res = await fetch(`${API_BASE}/products/${id}`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const product = await getProduct(params.id)
  if (!product) {
    return { title: 'Product Not Found | AI App Space' }
  }

  const isFree = product.pricingModel?.toLowerCase() === 'free'
  const priceLabel = isFree ? 'Free' : `$${Number(product.price || 0).toFixed(2)}`
  const description =
    product.description || product.tagline || `Discover ${product.name} on AI App Space.`
  const imageUrl =
    product.image?.startsWith('http')
      ? product.image
      : product.image
      ? `${API_BASE.replace('/api', '')}/${product.image.replace(/^\/+/, '')}`
      : 'https://aiappspace.com/logo.png'

  return {
    title: `${product.name} – ${priceLabel} | AI App Space`,
    description,
    keywords: [
      product.name,
      product.category?.name,
      'AI tools',
      'AI apps marketplace',
      'buy AI tools',
      'SaaS marketplace',
    ].filter(Boolean),
    alternates: {
      canonical: `https://aiappspace.com/product/${params.id}`,
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: product.name,
      description,
      url: `https://aiappspace.com/product/${params.id}`,
      siteName: 'AI App Space',
      type: 'website',
      locale: 'en_US',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: product.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description,
      images: [imageUrl],
    },
  }
}

export default async function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const product = await getProduct(params.id)

  const imageUrl =
    product?.image?.startsWith('http')
      ? product.image
      : product?.image
      ? `${API_BASE.replace('/api', '')}/${product.image.replace(/^\/+/, '')}`
      : 'https://aiappspace.com/logo.png'

  const isFree = product?.pricingModel?.toLowerCase() === 'free'

  const jsonLd = product
    ? {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        '@id': `https://aiappspace.com/product/${params.id}`,
        name: product.name,
        description: product.description || product.tagline || '',
        url: `https://aiappspace.com/product/${params.id}`,
        applicationCategory: product.category?.name || 'BusinessApplication',
        operatingSystem: 'Web Browser',
        image: imageUrl,
        offers: {
          '@type': 'Offer',
          price: isFree ? '0' : String(product.price || 0),
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: product.websiteLink || `https://aiappspace.com/product/${params.id}`,
        },
        ...(Number(product.rating) > 0
          ? {
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: Number(product.rating).toFixed(1),
                reviewCount: product.reviewCount || 1,
                bestRating: 5,
                worstRating: 1,
              },
            }
          : {}),
        publisher: { '@id': 'https://aiappspace.com/#organization' },
        isPartOf: { '@id': 'https://aiappspace.com/#website' },
        inLanguage: 'en',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aiappspace.com' },
            { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://aiappspace.com/products' },
            {
              '@type': 'ListItem',
              position: 3,
              name: product.name,
              item: `https://aiappspace.com/product/${params.id}`,
            },
          ],
        },
      }
    : null

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ProductDetailClient />
    </>
  )
}
