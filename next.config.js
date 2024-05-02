/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'next export',
    basePath: '',
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'wallpapers.com',
            pathname: '/**'
        }],
      },
}

module.exports = nextConfig
    