import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { AtInput, Props } from ".";

const meta: Meta = {
  title: "components/atoms/AtInput",
  component: AtInput,
  decorators: [withDesign],
};
export default meta;

const defaultArgs: Props = {
  defaultValue: "ほげほげほげほげほげほげほげほげ",
};

const defaultDesign = {
  type: "figma",
  url: "",
};

export const Input: ComponentStoryObj<typeof AtInput> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: {
    ...defaultArgs,
  },
};
