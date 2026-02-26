import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export const dynamic = "force-dynamic";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://marketplacebackend.oxmite.com/api";

type Blog = {
  _id: string;
  title?: string;
  coverImage?: string;
  category?: string;
  createdAt?: string;
  tags?: string[];
};

async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch blogs");
      return [];
    }

    const data = await res.json();
    return data.blogs || data.data || data || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function BlogsPage() {
  const blogs: Blog[] = await getBlogs();

  return (
    <>
      <HeroSection />

      <div className="min-h-screen py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Latest <span className="text-blue-600">Blogs</span>
          </h1>

          {blogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No blogs available yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog: Blog) => (
                <article
                  key={blog._id}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 sm:p-6 flex flex-col overflow-hidden"
                >
                  {blog.coverImage && (
                    <div className="relative w-full h-44 sm:h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={blog.coverImage}
                        alt={blog.title || "Blog image"}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {blog.category && (
                    <p className="text-xs text-indigo-600 font-semibold uppercase mb-2">
                      {blog.category}
                    </p>
                  )}

                  <p className="text-sm text-gray-500 mb-2">
                    {blog.createdAt
                      ? new Date(blog.createdAt).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })
                      : "No date"}
                  </p>

                  <Link href={`/blogs/${blog._id}`}>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 hover:text-blue-600 mb-4 line-clamp-2">
                      {blog.title}
                    </h2>
                  </Link>

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

                  <Link
                    href={`/blogs/${blog._id}`}
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
    </>
  );
}