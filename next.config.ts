import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Disable source maps in production to avoid 404 errors
  productionBrowserSourceMaps: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value: '<https://fonts.googleapis.com>; rel=preconnect; crossorigin, <https://fonts.gstatic.com>; rel=preconnect; crossorigin, <https://www.googletagmanager.com>; rel=preconnect; crossorigin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

