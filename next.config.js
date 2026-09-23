/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'content3.jdmagicbox.com',
      },
      {
        protocol: 'https',
        hostname: 'content.jdmagicbox.com',
      },
    ],
  },
};

module.exports = nextConfig;
