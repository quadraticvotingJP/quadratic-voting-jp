import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { MoAccordion, Props } from ".";

const meta: Meta = {
  title: "components/molecules/MoAccordion",
  component: MoAccordion,
  decorators: [withDesign],
};
export default meta;

const defaultArgs: Props = {
  size: "small",
  option: {
    id: 0,
    title: "選択肢のタイトル",
    overview: "石の上にも三年。",
    url: "https://www.figma.com/file/IdmP8Caxdqb8NCG7BMrjRL/QuadraticVoarding.jp?node-id=0%3A1",
  },
  disabled: false,
};

const defaultDesign = {
  type: "figma",
  url: "",
};

export const Accordion: ComponentStoryObj<typeof MoAccordion> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: { ...defaultArgs },
};
