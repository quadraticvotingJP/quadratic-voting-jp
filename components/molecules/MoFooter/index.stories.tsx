import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { MoFooter } from ".";

const meta: Meta = {
  title: "components/molecules/MoFooter",
  component: MoFooter,
  decorators: [withDesign],
};
export default meta;

const defaultDesign = {
  type: "figma",
  url: "",
};

export const Footer: ComponentStoryObj<typeof MoFooter> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: {},
};
