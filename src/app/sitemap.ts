import axios from "axios";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://aiappspace.com";

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/blogs",
    "/categories",
    "/contact",
    "/faq",
    "/featuredapps",
    "/products",
    "/chatbot",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/submit-tool",
    "/ai-search",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // Fetch blogs from backend
  const blogRes = await axios.get(
    "https://marketplacebackend.oxmite.com/api/blogs"
  );

  const blogs = blogRes.data;

  const blogUrls = blogs.map((blog: any) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.updatedAt || blog.createdAt),
  }));

  // Fetch products if needed
  const productRes = await axios.get(
    "https://marketplacebackend.oxmite.com/api/products"
  );

  const products = productRes.data;

  const productUrls = products.map((product: any) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(product.updatedAt || product.createdAt),
  }));

  return [
    ...staticPages,
    ...blogUrls,
    ...productUrls,
  ];
}