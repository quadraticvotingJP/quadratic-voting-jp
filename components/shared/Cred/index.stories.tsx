import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Card } from ".";

const meta: Meta = {
  title: "components/shared/Card",
  component: Card,
  decorators: [withDesign],
};
export default meta;

const defaultDesign = {
  type: "figma",
  url: "",
};

export const DefaultCard: ComponentStoryObj<typeof Card> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: {},
};
