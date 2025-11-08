import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Tinktalk's Home Page",
        short_name: 'Tinktalk',
        background_color: '#050505',
        theme_color: '#050505',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
            {
                src: '/favicon-light-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                src: '/favicon-dark-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                src: '/favicon-light-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                src: '/favicon-dark-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                src: '/favicon-light-500x500.png',
                sizes: '500x500',
                type: 'image/png',
            },
            {
                src: '/favicon-dark-500x500.png',
                sizes: '500x500',
                type: 'image/png',
            },
        ],
    };
}
