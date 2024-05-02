/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'next export',
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
    