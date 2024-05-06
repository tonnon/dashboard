/** @type {import('next').NextConfig} */

const nextConfig = {
    
    output: 'export',
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
    