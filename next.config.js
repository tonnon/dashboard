/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: '/dashboard/dashboard',
    distDir: 'dist',
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
    