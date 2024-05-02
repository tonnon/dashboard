/** @type {import('next').NextConfig} */
const nextConfig = {
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
    