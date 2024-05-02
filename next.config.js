/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'next export',
    distDir: 'out',
    basePath: '/dashboard/',
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'wallpapers.com',
            pathname: '/**'
        }],
      },
}

module.exports = nextConfig
    