import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { MoLabelForm, Props } from ".";

const meta: Meta = {
  title: "components/molecules/MoLabelForm",
  component: MoLabelForm,
  decorators: [withDesign],
};
export default meta;

const defaultArgs: Props = {
  title: "タイトル",
  overView: "イベントタイトルを40文字で入力してください。",
  required: false,
  placeholder: "定期旅行の行き先決め",
  defaultValue: "",
  disabled: false,
  type: "text",
  id: "id",
  name: "name",
};

const defaultDesign = {
  type: "figma",
  url: "",
};

export const AnyLabelForm: ComponentStoryObj<typeof MoLabelForm> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: { ...defaultArgs },
};
export const RequiredLabelForm: ComponentStoryObj<typeof MoLabelForm> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: { ...defaultArgs, required: true },
};
