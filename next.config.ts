import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  // Enable compression
  compress: true,

  // Optimize production builds
  productionBrowserSourceMaps: false,

};

export default nextConfig;
