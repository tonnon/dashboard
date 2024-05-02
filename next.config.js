/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: '/dashboard-seven-gray-28.vercel.app',
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
    