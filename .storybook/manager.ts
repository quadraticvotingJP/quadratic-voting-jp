// https://storybook.js.org/docs/react/configure/theming
import { addons } from "@storybook/addons";
import { theme } from "./theme";

addons.setConfig({
  theme,
});
