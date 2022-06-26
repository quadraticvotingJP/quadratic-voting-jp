import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { MoLabelTextField, Props } from ".";

const meta: Meta = {
  title: "components/molecules/MoLabelTextField",
  component: MoLabelTextField,
  decorators: [withDesign],
};
export default meta;

const defaultArgs: Props = {
  title: "投票者リンク",
  overView: "参加人数分の投票者リンクです。",
  required: false,
  labelMark: true,
  id: "id",
  name: "name",
  rows: 10,
  readOnly: false,
  defaultValue: `http://localhost:4004/?path=/story/components-molecules-molabeltextfield--label-bar\nhttp://localhost:4004/?path=/story/components-molecules-molabeltextfield--label-bar\nhttp://localhost:4004/?path=/story/components-molecules-molabeltextfield--label-bar\nhttp://localhost:4004/?path=/story/components-molecules-molabeltextfield--label-bar\nhttp://localhost:4004/?path=/story/components-molecules-molabeltextfield--label-bar\nhttp://localhost:4004/?path=/story/components-molecules-molabeltextfield--label-bar\nhttp://localhost:4004/?path=/story/components-molecules-molabeltextfield--label-bar\nhttp://localhost:4004/?path=/story/components-molecules-molabeltextfield--label-bar\nhttp://localhost:4004/?path=/story/components-molecules-molabeltextfield--label-bar`,
};

const defaultDesign = {
  type: "figma",
  url: "",
};

export const LabelTextField: ComponentStoryObj<typeof MoLabelTextField> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: { ...defaultArgs },
};
