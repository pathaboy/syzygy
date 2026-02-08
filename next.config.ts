import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev"
      },
      {
        hostname: "pub-f1f1657027f947e2ab76b33dcfab6b53.r2.dev"
      }
    ]
  },
};

export default nextConfig;
