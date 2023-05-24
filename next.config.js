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
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '**'
      }
    ]
  }
};

module.exports = nextConfig;
