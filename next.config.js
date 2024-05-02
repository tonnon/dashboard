/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone' | 'export',
    basePath: '/dashboard',
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'wallpapers.com',
            pathname: '/**'
        }],
      },
}

module.exports = nextConfig
    