/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: [
      // firebase storage
      "firebasestorage.googleapis.com",
      //a8
      "px.a8.net",
      "www27.a8.net",
      "www26.a8.net",
      "www22.a8.net",
      "www21.a8.net",
      "www16.a8.net",
      "www15.a8.net",
      "www13.a8.net",
      "www12.a8.net",
      "www11.a8.net",
      "www10.a8.net",
      "www8.a8.net",
    ],
  },
};

module.exports = nextConfig;
