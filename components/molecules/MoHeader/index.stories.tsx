import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { MoHeader } from ".";

const meta: Meta = {
  title: "components/molecules/MoHeader",
  component: MoHeader,
  decorators: [withDesign],
};
export default meta;

const defaultDesign = {
  type: "figma",
  url: "",
};

export const Header: ComponentStoryObj<typeof MoHeader> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: {},
};
