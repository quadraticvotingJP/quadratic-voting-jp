const path = require("path");
module.exports = {
  stories: [
    // どのファイルzをstoryを定義したファイルとして扱うかを記述
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    // Storybookのアドオンの設定
    "storybook-addon-designs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: (config) => {
    // https://ocws.jp/blog/post1825/
    // https://www.techpit.jp/courses/109/curriculums/112/sections/841/parts/3119
    config.resolve.alias["@"] = path.resolve(__dirname, "../");
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
