'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { resolveImageUrl } from '@/lib/blog-utils';

type Blog = {
  _id: string;
  title?: string;
  category?: string;
  coverImage?: string;
  createdAt?: string;
  tags?: string[];
  seo?: {
    meta_title?: string;
    meta_description?: string;
    slug?: string;
  };
};

export default function BlogCard({ blog }: { blog: Blog }) {
  const [imgError, setImgError] = useState(false);
  
  // Construct proper image URL (no external placeholder to avoid noisy errors)
  const resolvedSrc = blog.coverImage ? resolveImageUrl(blog.coverImage) : null;
  const imageSrc = !imgError && resolvedSrc ? resolvedSrc : null;
  
  const slugOrId = blog.seo?.slug || blog._id;

  return (
    <Link
      href={`/blogs/${slugOrId}`}
      className="group block"
    >
      <article
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white/95 to-slate-50/90 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-xl dark:border-slate-800/80 dark:from-slate-900/95 dark:to-slate-950"
      >
        {imageSrc && (
          <div className="relative w-full h-52 sm:h-56">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
            <Image
              src={imageSrc}
              alt={blog.title || "Blog image"}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => {
                setImgError(true);
              }}
              unoptimized={true}
              priority={false}
            />
          </div>
        )}

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-3 flex items-center justify-between gap-2">
            {blog.category && (
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                {blog.category}
              </span>
            )}
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {blog.createdAt
                ? new Date(blog.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                : "No date"}
            </span>
          </div>

          <h2 className="mb-2 line-clamp-2 text-base sm:text-lg font-semibold tracking-tight text-slate-900 group-hover:text-indigo-600 dark:text-slate-50">
            {blog.seo?.meta_title || blog.title}
          </h2>

          {blog.seo?.meta_description && (
            <p className="mb-3 line-clamp-3 text-sm text-slate-600 dark:text-slate-300">
              {blog.seo.meta_description}
            </p>
          )}

          {blog.tags && blog.tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-1.5">
              {blog.tags.slice(0, 3).map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {tag}
                </span>
              ))}
              {blog.tags.length > 3 && (
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  +{blog.tags.length - 3} more
                </span>
              )}
            </div>
          )}

          <span className="mt-auto inline-flex items-center text-sm font-semibold text-indigo-600 transition-colors group-hover:text-indigo-700 dark:text-indigo-400">
            Read more
            <span className="ml-1 transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </span>
        </div>
      </article>
    </Link>
  );
}
