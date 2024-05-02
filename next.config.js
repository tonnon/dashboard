/** @type {import('next').NextConfig} */

const nextConfig = {
    distDir: 'dist',
    basePath: '/dashboard',
    images: {
        unoptimized: true,
            remotePatterns: [{
            protocol: 'https',
            hostname: 'wallpapers.com',
            pathname: '/**'
        }],
      },
}

module.exports = nextConfig
    