/** @type {import('next').NextConfig} */
const nextConfig = {
      output: "export",  // <=== enables static exports
  reactStrictMode: true,
  basePath: "/dashboard",

    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'wallpapers.com',
            pathname: '/**'
        }],
      },
}

module.exports = nextConfig
    