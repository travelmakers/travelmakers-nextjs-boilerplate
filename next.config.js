const { withSentryConfig } = require('@sentry/nextjs');

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(
  {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      appDir: true,
      // NOTE: use this if Node < v18
      enableUndici: true,
    },
    compiler: {
      styledComponents: true,
    },
    sentry: {
      hideSourceMaps: true,
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
  },
  sentryWebpackPluginOptions
);
