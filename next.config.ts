import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["react-slick", "slick-carousel"],
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "somedomain.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
