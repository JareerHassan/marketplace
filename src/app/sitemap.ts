import axios from "axios";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://aiappspace.com";

  // =========================
  // STATIC PAGES
  // =========================
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
    "/products/ai-prompt-creator",
    "/products/fire-wave-vpn",
    "/products/learning-app",
    "/products/ai-phone-fix",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // =========================
  // BLOG URLS
  // =========================
  let blogUrls: MetadataRoute.Sitemap = [];

  try {
    const blogRes = await axios.get(
      "https://marketplacebackend.oxmite.com/api/blogs"
    );

    const blogs = blogRes.data;

    blogUrls = blogs
      .filter((blog: any) => blog?.seo?.slug)
      .map((blog: any) => ({
        url: `${baseUrl}/blogs/${blog.seo.slug}`,
        lastModified: new Date(
          blog.updatedAt || blog.createdAt || Date.now()
        ),
      }));
  } catch (error) {
    console.log("Blog Sitemap Error:", error);
  }

  // =========================
  // PRODUCT URLS
  // =========================
  let productUrls: MetadataRoute.Sitemap = [];

  try {
    const productRes = await axios.get(
      "https://marketplacebackend.oxmite.com/api/products"
    );

    const products = productRes.data;

    productUrls = products
      .filter(
        (product: any) =>
          product?.slug || product?.seo?.slug
      )
      .map((product: any) => ({
        // IMPORTANT:
        // Change /product/ to /products/
        // if your dynamic folder is:
        // app/products/[slug]

        url: `${baseUrl}/product/${
          product.slug || product.seo?.slug
        }`,

        lastModified: new Date(
          product.updatedAt || product.createdAt || Date.now()
        ),
      }));
  } catch (error) {
    console.log("Product Sitemap Error:", error);
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