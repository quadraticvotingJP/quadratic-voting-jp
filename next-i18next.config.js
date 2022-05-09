const path = require("path");
module.exports = {
  /** i18n settings */
  i18n: {
    locales: ["ja"],
    defaultLocale: "ja",
    localePath: path.resolve("./public/locales"),
  },
};
