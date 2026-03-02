import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5005',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '5005',
        pathname: '/**',
      },
      // allow whatever host our uploads base resolves to (may include marketplacebackend)
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_UPLOADS_HOST || 'marketplacebackend.oxmite.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'templates.studioniskala.com',
        pathname: '**',
      },
            {
        protocol: 'http',
        hostname: 'googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
    // Allow unoptimized images as fallback
    unoptimized: false,
  },
};

export default nextConfig;
