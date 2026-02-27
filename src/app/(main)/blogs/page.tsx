import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";

export const dynamic = "force-dynamic";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://marketplacebackend.oxmite.com/api";

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

export const metadata = {
  title: 'Latest Blogs | Digital Assets Marketplace',
  description: 'Read the latest articles on AI tools, trends, and industry insights from Digital Assets Marketplace.',
};

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
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}