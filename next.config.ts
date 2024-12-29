import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.otruyenapi.com",
                port: "",
                pathname: "/uploads/**",
            },
            {
                protocol: "https",
                hostname: "sv1.otruyencdn.com",
                port: "",
                pathname: "/uploads/**",
            },
        ],
    },
};

export default nextConfig;
