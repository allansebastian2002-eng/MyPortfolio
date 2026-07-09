import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Vercel uses its own build system — do NOT set output: "standalone"
     (that's for Docker/self-hosted and causes 404s on Vercel) */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
