/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'wallpapers.com',
            pathname: '/**'
        }],
      },
}


module.exports = nextConfig
    