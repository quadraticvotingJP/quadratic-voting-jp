import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { MoProcess, Props } from ".";

const meta: Meta = {
  title: "components/molecules/MoProcess",
  component: MoProcess,
  decorators: [withDesign],
};
export default meta;

const defaultArgs: Props = {
  title: "タイトル",
  molecule: "2",
  denominator: "10",
};

const defaultDesign = {
  type: "figma",
  url: "",
};

export const Process: ComponentStoryObj<typeof MoProcess> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: { ...defaultArgs },
};
