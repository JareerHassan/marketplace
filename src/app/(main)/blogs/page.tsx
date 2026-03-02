import axios from "axios";
import Link from "next/link";
import Image from "next/image";

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
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-14">
          Latest <span className="text-blue-600">Blogs</span>
        </h1>

        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No blogs available yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog: any) => (
              <article
                key={blog._id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col overflow-hidden"
              >
                {/* Cover Image */}
                {blog.coverImage && (
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Category */}
                {blog.category && (
                  <p className="text-xs text-indigo-600 font-semibold uppercase mb-2">
                    {blog.category}
                  </p>
                )}

                {/* Date */}
                <p className="text-sm text-gray-500 mb-2">
                  {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  }) : 'No date'}
                </p>

                {/* Title */}
                <Link href={`/blogs/${blog.seo?.slug || blog._id}`}>
                  <h2 className="text-xl font-bold text-gray-900 hover:text-blue-600 mb-4 line-clamp-2">
                    {blog.title}
                  </h2>
                </Link>

                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 3).map((tag: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {blog.tags.length > 3 && (
                      <span className="px-2 py-1 text-gray-500 text-xs">
                        +{blog.tags.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                {/* Read More Link */}
                <Link
                  href={`/blogs/${blog.seo?.slug || blog._id}`}
                  className="mt-auto text-blue-600 font-semibold hover:underline"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
