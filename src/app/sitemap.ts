import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://aiappspace.com";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://marketplacebackend.oxmite.com/api";

type BlogEntry = {
  _id?: string;
  updatedAt?: string;
  createdAt?: string;
  seo?: { slug?: string };
};

async function getBlogPaths(): Promise<{ path: string; lastModified?: Date }[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const payload = await res.json();
    const blogs: BlogEntry[] = Array.isArray(payload)
      ? payload
      : Array.isArray(payload?.data)
        ? payload.data
        : [];
    if (!blogs.length) return [];
    return blogs.map((blog) => {
      const slug = blog.seo?.slug || blog._id;
      if (!slug) return null;
      const raw = blog.updatedAt || blog.createdAt;
      const lastModified = raw ? new Date(raw) : undefined;
      return { path: `/blogs/${slug}`, lastModified };
    }).filter(Boolean) as { path: string; lastModified?: Date }[];
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPaths: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/blogs`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/categories`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/featuredapps`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/products`, lastModified: now, changeFrequency: "daily", priority: 0.95 },
    { url: `${SITE_URL}/chatbot`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/submit-tool`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/ai-search`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/products/learning-app`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/products/ai-phone-fix`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/products/fire-wave-vpn`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const blogEntries = await getBlogPaths();
  const blogUrls: MetadataRoute.Sitemap = blogEntries.map(({ path, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: lastModified ?? now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPaths, ...blogUrls];
}
