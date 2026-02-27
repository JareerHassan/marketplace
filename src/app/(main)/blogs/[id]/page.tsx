import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { renderEditorJSBlocks, calculateReadingTime, resolveImageUrl } from "@/lib/blog-utils";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://marketplacebackend.oxmite.com/api';
// strip trailing "/api" so we can build direct URLs to uploaded files
const UPLOADS_BASE_URL = API_BASE_URL.replace(/\/api\/?$/, '') || 'https://marketplacebackend.oxmite.com';

async function getBlogById(idOrSlug: string) {
  try {
    let res;
    // ObjectId regex check
    const isMongoId = /^[0-9a-fA-F]{24}$/.test(idOrSlug);
    if (isMongoId) {
      res = await axios.get(`${API_BASE_URL}/blogs/id/${idOrSlug}`);
    } else {
      // assume slug
      res = await axios.get(`${API_BASE_URL}/blogs/slug/${idOrSlug}`);
    }
    return res.data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const blog = await getBlogById(resolvedParams.id);
  if (!blog) return { title: 'Blog not found' };

  const seo = blog.seo || {};

  let metadataBase: URL | undefined;
  if (seo.canonical_url) {
    try {
      metadataBase = new URL(seo.canonical_url);
    } catch {
      metadataBase = undefined;
    }
  }

  return {
    title: seo.meta_title || blog.title || 'Blog',
    description: seo.meta_description || '',
    alternates: {
      canonical: seo.canonical_url || undefined,
    },
    openGraph: {
      title: seo.og_title || seo.meta_title || blog.title,
      description: seo.og_description || seo.meta_description || '',
      images: seo.og_image ? [{ url: seo.og_image }] : undefined,
      url: seo.canonical_url || undefined,
    },
    twitter: {
      title: seo.og_title || seo.meta_title || blog.title,
      description: seo.og_description || seo.meta_description || '',
      images: seo.og_image ? [seo.og_image] : undefined,
    },
    robots: seo.robots ? { index: seo.robots.includes('index'), follow: seo.robots.includes('follow') } : undefined,
    metadataBase,
    // schema markup is complicated but could be added via script tags in the page
  };
}

export default async function BlogDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const blog = await getBlogById(resolvedParams.id);

  // if we looked up by id but slug exists, redirect to slug canonical URL
  if (blog && blog.seo?.slug && resolvedParams.id !== blog.seo.slug) {
    redirect(`/blogs/${blog.seo.slug}`);
  }

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
    <article className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50/60 pb-20 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
          <Link
            href="/blogs"
            className="group flex items-center text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            <span className="mr-2 rounded-full bg-slate-100 px-2 py-1 text-xs transition-transform group-hover:-translate-x-1 dark:bg-slate-800">
              ←
            </span>
            All blogs
          </Link>
          <span className="text-xs text-slate-400 dark:text-slate-500">
            Digital Assets Marketplace · Insights
          </span>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="bg-gradient-to-b from-indigo-50/80 via-white to-white pb-10 pt-10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
        <div className="mx-auto max-w-4xl px-6">
          {/* Breadcrumb */}
          <nav className="mb-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1 sm:gap-1.5">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-slate-800 dark:hover:text-slate-200"
                >
                  Home
                </Link>
              </li>
              <li className="text-slate-400 dark:text-slate-500">/</li>
              <li>
                <Link
                  href="/blogs"
                  className="transition-colors hover:text-slate-800 dark:hover:text-slate-200"
                >
                  Blogs
                </Link>
              </li>
              <li className="text-slate-400 dark:text-slate-500">/</li>
              <li className="max-w-[55%] truncate text-slate-700 dark:text-slate-300" aria-current="page">
                {blog.title || blog.seo?.meta_title || 'Blog'}
              </li>
            </ol>
          </nav>
          {/* Category */}
          {blog.category && (
            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold uppercase px-3 py-1 rounded-full mb-4">
              {blog.category}
            </span>
          )}

          {/* Date and Reading Time */}
          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <time
              dateTime={blog.createdAt}
              className="inline-flex items-center gap-1 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-200/80 dark:bg-slate-900/60 dark:text-slate-200 dark:ring-slate-800"
            >
              {blog.createdAt
                ? new Date(blog.createdAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })
                : 'No date'}
            </time>
            {readingTime > 0 && (
              <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-300 dark:ring-indigo-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                {readingTime} min read
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl md:leading-[1.1] dark:text-white">
            {blog.title}
          </h1>

          {/* Cover Image */}
          {blog.coverImage && (
            <div className="relative mb-8 overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200/80 dark:ring-slate-800/80">
              <div className="relative h-64 w-full md:h-96">
                <Image
                  src={resolveImageUrl(blog.coverImage) || ''}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-[1200ms] hover:scale-105"
                  unoptimized={true}
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
            </div>
          )}

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {blog.tags.map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-900 dark:text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Body Content */}
      <div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2.3fr)_minmax(0,1fr)]">
          {/* Main article */}
          <div className="prose prose-lg prose-slate max-w-none rounded-2xl bg-white/95 p-6 shadow-sm ring-1 ring-slate-100 dark:prose-invert dark:bg-slate-950/90 dark:ring-slate-800 sm:p-8">
            {blocks.length > 0 ? (
              renderEditorJSBlocks(blocks)
            ) : (
              <div className="rounded-xl bg-slate-50 p-6 text-center text-sm italic text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                <p>No content available for this article yet.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 self-start rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-slate-100 dark:bg-slate-950/90 dark:ring-slate-800 lg:sticky lg:top-24">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Article overview
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {blog.seo?.meta_description ||
                  "Key information about this article at a glance."}
              </p>
            </div>

            <dl className="grid gap-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-900/60">
                <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Published
                </dt>
                <dd className="ml-3 text-right">
                  {blog.createdAt
                    ? new Date(blog.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "Not available"}
                </dd>
              </div>

              {readingTime > 0 && (
                <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-900/60">
                  <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Reading time
                  </dt>
                  <dd className="ml-3 text-right">{readingTime} min</dd>
                </div>
              )}

              {blog.category && (
                <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-900/60">
                  <dt className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Category
                  </dt>
                  <dd className="ml-3 truncate text-right">{blog.category}</dd>
                </div>
              )}
            </dl>

            {blog.tags && blog.tags.length > 0 && (
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-900 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-dashed border-slate-200 pt-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
              <p>
                Found this useful? Share it with your team or save it for later
                in your bookmarks.
              </p>
            </div>
          </aside>
        </div>

        {/* Footer call-to-action */}
        <section className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 px-5 py-4 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-200 sm:flex-row sm:items-center sm:px-6 sm:py-5">
          <div>
            <p className="font-medium">Continue exploring the marketplace blog.</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Discover more guides, insights, and announcements from our team.
            </p>
          </div>
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white"
          >
            ← Back to all blogs
          </Link>
        </section>
      </div>
    </article>
  );
}
