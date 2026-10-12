import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.MCLUB_BUILD_DIR || ".next",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "content.rsggroup.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  async headers() {
    return [{
      source: "/optimized/:path*",
      headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
    }];
  },
};

export default nextConfig;
