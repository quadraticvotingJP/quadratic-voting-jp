import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { AtNoMarkLabel, Props } from ".";

const meta: Meta = {
  title: "components/atoms/shared/AtNoMarkLabel",
  component: AtNoMarkLabel,
  decorators: [withDesign],
};
export default meta;

const defaultArgs: Props = {
  title: "タイトル",
  required: true,
};

const defaultDesign = {
  type: "figma",
  url: "",
};

export const Required: ComponentStoryObj<typeof AtNoMarkLabel> = {
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

export const Any: ComponentStoryObj<typeof AtNoMarkLabel> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: {
    ...defaultArgs,
    required: false,
  },
};
