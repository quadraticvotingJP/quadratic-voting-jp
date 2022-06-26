import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { OrCardForm, Props } from ".";

const meta: Meta = {
  title: "components/organisms/OrCardForm",
  component: OrCardForm,
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

export const CardForm: ComponentStoryObj<typeof OrCardForm> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: { ...defaultArgs },
};
