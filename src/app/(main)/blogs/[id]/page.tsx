import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { renderEditorJSBlocks, calculateReadingTime } from "@/lib/blog-utils";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://marketplacebackend.oxmite.com/api';

async function getBlogById(id: string) {
  try {
    const res = await axios.get(`${API_BASE_URL}/blogs/byid/${id}`);
    return res.data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

export default async function BlogDetails({ params }: { params: { id: string } }) {
  const blog = await getBlogById(params.id);

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-semibold text-gray-900">Blog not found</h1>
        <Link href="/blogs" className="mt-4 text-indigo-600 hover:underline">
          Return to blogs
        </Link>
      </div>
    );
  }

  const blocks = blog.content?.blocks || [];
  const readingTime = calculateReadingTime(blocks);

  return (
    <article className="min-h-screen pb-20">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-4">
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
        <div className="max-w-3xl mx-auto px-6">
          {/* Category */}
          {blog.category && (
            <p className="text-sm text-indigo-600 font-semibold uppercase mb-4">
              {blog.category}
            </p>
          )}

          {/* Date and Reading Time */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <time dateTime={blog.createdAt}>
              {blog.createdAt
                ? new Date(blog.createdAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })
                : 'No date'}
            </time>
            {readingTime > 0 && (
              <>
                <span>•</span>
                <span>{readingTime} min read</span>
              </>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-gray-900 mb-8">
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
      <div className="max-w-3xl mx-auto px-6">
        <div className="prose prose-lg max-w-none">
          {blocks.length > 0 ? (
            renderEditorJSBlocks(blocks)
          ) : (
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic">No content available.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-900">Digital Assets Marketplace</p>
              <p className="text-xs text-gray-500">Industry Insights & News</p>
            </div>
            <Link
              href="/blogs"
              className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
            >
              ← Back to Blogs
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
