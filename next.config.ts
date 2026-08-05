import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['three'],
  images: {
    qualities: [60, 75],
    deviceSizes: [640, 750, 828, 1080, 1200, 1410, 1440, 1920, 2048, 3840],
  },
};

export default nextConfig;
