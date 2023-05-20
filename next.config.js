/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'en.adererror.com',
        port: '',
        pathname: '/upload/**'
      },
      {
        protocol: 'http',
        hostname: '**',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**'
      }
    ]
  }
};

module.exports = nextConfig;
