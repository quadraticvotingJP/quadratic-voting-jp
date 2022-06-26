import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { MoLabelText, Props } from ".";

const meta: Meta = {
  title: "components/molecules/MoLabelText",
  component: MoLabelText,
  decorators: [withDesign],
};
export default meta;

const defaultArgs: Props = {
  title: "タイトル",
  required: false,
  contents: "2022/0626",
  showEdit: false,
  disabled: false,
  labelMark: true,
};

const defaultDesign = {
  type: "figma",
  url: "",
};

export const LabelText: ComponentStoryObj<typeof MoLabelText> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: { ...defaultArgs },
};

export const NoMarkLabelText: ComponentStoryObj<typeof MoLabelText> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: { ...defaultArgs, labelMark: false },
};

export const EditLabelText: ComponentStoryObj<typeof MoLabelText> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: { ...defaultArgs, showEdit: true, required: true },
};
