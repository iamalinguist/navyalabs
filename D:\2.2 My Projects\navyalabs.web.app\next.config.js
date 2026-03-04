/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    turbopack: {
      root: process.cwd(),
    },
  },
};

module.exports = nextConfig;
