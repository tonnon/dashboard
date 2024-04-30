/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'wallpapers.com',
            pathname: '/**'
        }],
      },
      basePath: '/dashboard',
      assetPrefix: '/dashboard/',
}

module.exports = nextConfig
    