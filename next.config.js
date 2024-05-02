/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'next export',
    basePath: '/dashboard',
    distDir: 'dist',
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'wallpapers.com',
            pathname: '/**'
        }],
      },
}

module.exports = nextConfig
    