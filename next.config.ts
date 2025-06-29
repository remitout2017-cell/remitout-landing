import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: ["localhost"], // 👈 allow localhost
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001", // 👈 match your Payload server port
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
