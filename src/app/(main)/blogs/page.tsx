import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://marketplacebackend.oxmite.com/api';

async function getBlogs() {
  try {
    const res = await axios.get(`${API_BASE_URL}/blogs`);
    return res.data || [];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className=" min-h-screen">
      <HeroSection />

      <div className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-300 mb-4 tracking-tight">
              Latest <span className="text-[#ADFF2F]">Insights</span>
            </h2>
            <div className="h-1.5 w-20 bg-[#ADFF2F] mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Explore our latest articles, tutorials, and news from the marketplace.
            </p>
          </div>

          {blogs.length === 0 ? (
            <div className="text-center py-20  rounded-3xl shadow-sm border border-gray-100">
              <div className="mb-4 flex justify-center">
                <svg className="h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-gray-500 text-xl font-medium">No blogs available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog: any) => (
                <article
                  key={blog._id}
                  className="group  text-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Cover Image Container */}
                  <div className="relative w-full h-56 overflow-hidden">
                    {blog.coverImage ? (
                      <Image
                        src={blog.coverImage}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400 font-medium italic">No Image Provided</span>
                      </div>
                    )}

                    {/* Floating Category Badge */}
                    {blog.category && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-white/90 backdrop-blur-md text-indigo-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm">
                          {blog.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Date */}
                    <div className="flex items-center text-xs text-gray-300 mb-3 font-semibold tracking-wide uppercase">
                      <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      }) : 'Coming Soon'}
                    </div>

                    {/* Title */}
                    <Link href={`/blogs/${blog.seo?.slug || blog._id}`}>
                      <h2 className="text-xl font-bold text-gray-300 group-hover:text-[#ADFF2F] transition-colors duration-200 mb-3 line-clamp-2 leading-snug">
                        {blog.title}
                      </h2>
                    </Link>

                    {/* Tags Section */}
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {blog.tags.slice(0, 3).map((tag: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-gray-50 text-gray-600 text-[11px] font-medium rounded-md border border-gray-100 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                        {blog.tags.length > 3 && (
                          <span className="text-[11px] text-gray-400 self-center">
                            +{blog.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Read More Footer */}
                    <div className="mt-auto pt-5 border-t border-gray-50 flex items-center justify-between">
                      <Link
                        href={`/blogs/${blog.seo?.slug || blog._id}`}
                        className="inline-flex items-center text-sm font-bold text-[#ADFF2F] group/link transition-all"
                      >
                        READ ARTICLE
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}