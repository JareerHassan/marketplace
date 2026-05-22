import axios from "axios";
import { MetadataRoute } from "next";

// Regenerate sitemap at most once every 12 hours
export const revalidate = 43200;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const baseUrl = "https://aiappspace.com";

  // =========================
  // STATIC PAGES
  // =========================
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/blogs`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/categories`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/featuredapps`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/ai-search`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/chatbot`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    // Static product landing pages
    { url: `${baseUrl}/products/ai-prompt-creator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/products/fire-wave-vpn`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/products/learning-app`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/products/ai-phone-fix`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  // =========================
  // BLOG URLS
  // =========================
  let blogUrls: MetadataRoute.Sitemap = [];

  try {
    const blogRes = await axios.get(
      "https://marketplacebackend.oxmite.com/api/blogs",
      { timeout: 10000 }
    );

    const blogs = blogRes.data;

    blogUrls = blogs
      .filter((blog: any) => blog?.seo?.slug)
      .map((blog: any) => ({
        url: `${baseUrl}/blogs/${blog.seo.slug}`,
        lastModified: new Date(blog.updatedAt || blog.createdAt || Date.now()),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }));
  } catch (error) {
    console.error("Blog Sitemap Error:", error);
  }

  // =========================
  // PRODUCT URLS
  // =========================
  let productUrls: MetadataRoute.Sitemap = [];

  try {
    const productRes = await axios.get(
      "https://marketplacebackend.oxmite.com/api/products",
      { timeout: 10000 }
    );

    const products = productRes.data;

    productUrls = products
      .filter((product: any) => product?._id)
      .map((product: any) => ({
        url: `${baseUrl}/product/${product._id}`,
        lastModified: new Date(product.updatedAt || product.createdAt || Date.now()),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }));
  } catch (error) {
    console.error("Product Sitemap Error:", error);
  }

  // =========================
  // RETURN ALL URLS
  // =========================
  return [
    ...staticPages,
    ...blogUrls,
    ...productUrls,
  ];
}
