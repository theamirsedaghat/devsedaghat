import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
    qualities: [75, 100],
  },
  experimental: {
    optimizePackageImports: ["some-package"],
  },
};

export default nextConfig;
