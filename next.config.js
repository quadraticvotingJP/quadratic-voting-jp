/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  env: {
    GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
  },
};

module.exports = nextConfig;
