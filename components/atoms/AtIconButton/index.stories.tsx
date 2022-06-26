import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { AtIconButton, Props } from ".";

const meta: Meta = {
  title: "components/atoms/AtIconButton",
  component: AtIconButton,
  decorators: [withDesign],
};
export default meta;

const defaultArgs: Props = {
  size: "medium",
  disabled: false,
  showEdit: false,
  showDelete: false,
  showSave: false,
};

const defaultDesign = {
  type: "figma",
  url: "",
};

export const showEdit: ComponentStoryObj<typeof AtIconButton> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: {
    ...defaultArgs,
    showEdit: true,
  },
};

export const showDelete: ComponentStoryObj<typeof AtIconButton> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: {
    ...defaultArgs,
    showDelete: true,
  },
};
export const showSave: ComponentStoryObj<typeof AtIconButton> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: {
    ...defaultArgs,
    showSave: true,
  },
};
