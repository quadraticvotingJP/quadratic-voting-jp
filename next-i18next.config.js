// https://it-monk.com/next-i18next-%E9%83%A8%E7%BD%B2%E5%88%B0-vercel-%E7%9A%84-500-error/
const path = require("path");
module.exports = {
  /** i18n settings */
  i18n: {
    locales: ["ja"],
    defaultLocale: "ja",
    localePath: path.resolve("./public/locales"),
  },
};
