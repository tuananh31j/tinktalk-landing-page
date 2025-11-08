// @ts-check
import BundleAnalyzer from '@next/bundle-analyzer';
import { NextConfig } from 'next';


const withBundleAnalyzer = BundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'http.cat',
                port: '',
                pathname: '/**',
            },
        ],
        domains: [
            'res.cloudinary.com',
            'avatars.githubusercontent.com',
            'lfupbsuudntberju.public.blob.vercel-storage.com',
        ],
    },
    compiler: {
        removeConsole: process.env.NEXT_ENV === 'production',
    },
};

export default withBundleAnalyzer(nextConfig)
