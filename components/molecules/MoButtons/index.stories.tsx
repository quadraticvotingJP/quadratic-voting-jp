import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { MoButtons, Props } from ".";

const meta: Meta = {
  title: "components/molecules/MoButtons",
  component: MoButtons,
  decorators: [withDesign],
};
export default meta;

const defaultArgs: Props = {
  left: { title: "ボタン1", disabled: false, onClick: () => {} },
  right: { title: "ボタン2", disabled: false, onClick: () => {} },
};

const defaultDesign = {
  type: "figma",
  url: "",
};

export const Accordion: ComponentStoryObj<typeof MoButtons> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: { ...defaultArgs },
};
