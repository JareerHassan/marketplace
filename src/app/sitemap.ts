import { MetadataRoute } from 'next'

const BASE_URL = 'https://aiappspace.com'
const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || 'https://marketplacebackend.oxmite.com/api'

async function getAllProducts() {
  try {
    const res = await fetch(`${API_BASE}/products?limit=1000`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

async function getAllBlogs() {
  try {
    const res = await fetch(`${API_BASE}/blogs`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const today = new Date().toISOString()

  // ── Static pages ─────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/categories`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/featuredapps`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ai-search`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: '2026-01-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: '2026-01-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: '2026-04-23T00:00:00.000Z',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: '2026-04-23T00:00:00.000Z',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: '2026-04-23T00:00:00.000Z',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // ── Featured static product pages ─────────────────────────────────────────
  const featuredProductPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/products/learning-app`,
      lastModified: '2026-01-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/products/ai-phone-fix`,
      lastModified: '2026-01-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/products/fire-wave-vpn`,
      lastModified: '2026-01-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // ── Dynamic product pages (from API) ──────────────────────────────────────
  const products = await getAllProducts()
  const productPages: MetadataRoute.Sitemap = Array.isArray(products)
    ? products.map((p: any) => ({
        url: `${BASE_URL}/product/${p._id}`,
        lastModified: p.updatedAt || p.createdAt || today,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
    : []

  // ── Dynamic blog pages (from API) ─────────────────────────────────────────
  const blogs = await getAllBlogs()
  const blogPages: MetadataRoute.Sitemap = Array.isArray(blogs)
    ? blogs.map((b: any) => ({
        url: `${BASE_URL}/blogs/${b.seo?.slug || b._id}`,
        lastModified: b.seo?.last_updated || b.updatedAt || b.createdAt || today,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    : []

  return [
    ...staticPages,
    ...featuredProductPages,
    ...productPages,
    ...blogPages,
  ]
}
