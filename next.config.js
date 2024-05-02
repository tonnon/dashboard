/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'next export',
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'wallpapers.com',
            pathname: '/**'
        }],
      },
}

module.exports = nextConfig
    