const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    // NOTE: use this if Node < v18
    enableUndici: true,
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2pyzcqibfhr70.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hotel-01.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
});
