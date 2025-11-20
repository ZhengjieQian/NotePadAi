import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure Turbopack treats this folder as the workspace root
  // This helps it pick the correct lockfile and load `.env.local` here
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
