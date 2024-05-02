/** @type {import('next').NextConfig} */

const { generateStaticParams } = require('./app/dashboard/products/[id]');

const nextConfig = {
    async exportPathMap() {
        const paths = await generateStaticParams();
        // Retorna os caminhos gerados pela função generateStaticParams()
        return {
            '/dashboard/products/[id]': { page: '/dashboard/products/[id]', query: { id: '1' } } // Substitua '1' pelo ID real do produto
        };
    },
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
    