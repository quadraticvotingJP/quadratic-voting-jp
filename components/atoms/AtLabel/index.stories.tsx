import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { AtLabel, Props } from ".";

const meta: Meta = {
  title: "components/atoms/shared/AtLabel",
  component: AtLabel,
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

export const Required: ComponentStoryObj<typeof AtLabel> = {
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

export const Any: ComponentStoryObj<typeof AtLabel> = {
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
