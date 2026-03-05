import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { renderEditorJSBlocks, calculateReadingTime } from "@/lib/blog-utils";


const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://marketplacebackend.oxmite.com/api';

async function getBlogBySlug(slug: string) {
  try {
    const res = await axios.get(`${API_BASE_URL}/blogs/blogdet/${slug}`);
    return res.data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug);
  
  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  const seo = blog.seo || {};
  
  return {
    title: seo.meta_title || blog.title,
    description: seo.meta_description || '',
    keywords: seo.focus_keyword || '',
    openGraph: {
      title: seo.og_title || seo.meta_title || blog.title,
      description: seo.og_description || seo.meta_description || '',
      images: seo.og_image || blog.coverImage ? [seo.og_image || blog.coverImage] : [],
      type: 'article',
    },
    robots: seo.robots || 'index, follow',
    alternates: {
      canonical: seo.canonical_url || `${process.env.NEXT_PUBLIC_SITE_URL || ''}/blogs/${params.slug}`,
    },
    other: {
      'article:published_time': blog.createdAt,
      'article:modified_time': seo.last_updated || blog.updatedAt,
    },
  };
}

export default async function BlogDetails({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-semibold ">Blog not found</h1>
        <Link href="/blogs" className="mt-4 text-[#ADFF2F] hover:underline">
          Return to blogs
        </Link>
      </div>
    );
  }

  const blocks = blog.content?.blocks || [];
  const readingTime = calculateReadingTime(blocks);
  const seo = blog.seo || {};

  return (
    <>
    
      {/* JSON-LD Schema Markup */}
      {seo.schema_markup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema_markup) }}
        />
      )}



      <article className="min-h-screen pb-20 ">
        {/* Navigation */}
        <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className=" mx-auto px-6 py-4">
            <Link
              href="/blogs"
              className="group flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
              Back to Blogs
            </Link>
          </div>
        </nav>

        {/* Hero Header */}
        <header className="pt-16 pb-12">
          <div className=" mx-auto px-6">
            {/* Category */}
            {blog.category && (
              <p className="text-sm  font-semibold uppercase mb-4">
                {blog.category}
              </p>
            )}

            {/* Date and Reading Time */}
            <div className="flex items-center space-x-2 text-sm  mb-6">
              <time dateTime={blog.createdAt}>
                {blog.createdAt
                  ? new Date(blog.createdAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })
                  : 'No date'}
              </time>
              {seo.last_updated && (
                <>
                  <span>•</span>
                  <span>Updated: {new Date(seo.last_updated).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}</span>
                </>
              )}
              {readingTime > 0 && (
                <>
                  <span>•</span>
                  <span>{readingTime} min read</span>
                </>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]  mb-8">
              {blog.title}
            </h1>

            {/* Cover Image */}
            {blog.coverImage && (
              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {blog.tags.map((tag: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Body Content */}
        <div className=" mx-auto px-6">
          <div>
            {blocks.length > 0 ? (
              renderEditorJSBlocks(blocks)
            ) : (
              <div className="p-6 rounded-lg">
                <p className=" italic">No content available.</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold ">Digital Assets Marketplace</p>
                <p className="text-xs ">Industry Insights & News</p>
              </div>
              <Link
                href="/blogs"
                className="text-sm text-[#ADFF2F]  font-medium"
              >
                ← Back to Blogs
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
}
