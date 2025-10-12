import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: ["localhost", "remitout-cms.vercel.app", "loan.remitout.com"], // 👈 allow localhost
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001", // 👈 match your Payload server port
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "remitout-cms.vercel.app",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "loan.remitout.com",
        pathname: "/media/**", // <-- allow production media
      },
    ],
  },
};

export default nextConfig;
