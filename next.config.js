/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'next export',
    distDir: 'dist',
    basePath: 'https://tonnon.github.io/dashboard/',
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'wallpapers.com',
            pathname: '/**'
        }],
      },
}

module.exports = nextConfig
    