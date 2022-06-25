import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { AtErrorMessage, Props } from ".";

const meta: Meta = {
  title: "components/atoms/shared/AtErrorMessage",
  component: AtErrorMessage,
  decorators: [withDesign],
};
export default meta;

const defaultArgs: Props = {
  error: { message: "必須です。" },
};

const defaultDesign = {
  type: "figma",
  url: "",
};

export const ErrorMessage: ComponentStoryObj<typeof AtErrorMessage> = {
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
