import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.otruyenapi.com',
                port: '',
                pathname: '/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'sv1.otruyencdn.com',
                port: '',
                pathname: '/uploads/**',
            },
        ],

        unoptimized: true,
    },

    // rewrites
    async rewrites() {
        return [
            {
                source: '/lich-su.html',
                destination: '/lich-su',
            },
        ];
    },
};

export default nextConfig;
