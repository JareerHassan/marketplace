import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl text-muted-foreground mt-4">Page not found</p>
      <Link href="/" className="mt-6">
        <button className="px-6 py-2 bg-primary text-white rounded-lg">
          Go back home
        </button>
      </Link>
    </div>
  );
}
