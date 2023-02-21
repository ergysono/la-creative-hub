/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lacreativehub.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};