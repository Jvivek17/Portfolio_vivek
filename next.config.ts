import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname), // Explicitly sets this directory as the root
  },
};

export default nextConfig;
