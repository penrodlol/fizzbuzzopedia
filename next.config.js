const { withContentlayer } = require('next-contentlayer');
const dayjs = require('dayjs');

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
  env: {
    DOMAIN: process.env.DOMAIN,
    REPO: 'https://github.com/penrodlol/fizzbuzzopedia',
    COPYRIGHT_YEAR: dayjs().year(),
    LAST_UPDATE: dayjs().format('YYYY-MM-DD hh:mm A'),
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
