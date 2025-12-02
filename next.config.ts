import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["motion"],
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
    qualities: [75, 90],
  },
  experimental: {
    optimizePackageImports: ["motion", "framer-motion", "some-package"],
  },
};

export default nextConfig;
