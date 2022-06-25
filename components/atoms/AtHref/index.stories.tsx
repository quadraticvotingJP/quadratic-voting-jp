import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { AtHref, Props } from ".";

const meta: Meta = {
  title: "components/atoms/shared/AtHref",
  component: AtHref,
  decorators: [withDesign],
};
export default meta;

const defaultArgs: Props = {
  blank: false,
  title: "https://github.com/quadraticvotingJP/quadratic-voting-jp",
  link: "https://github.com/quadraticvotingJP/quadratic-voting-jp",
};

const defaultDesign = {
  type: "figma",
  url: "",
};

export const NotBlank: ComponentStoryObj<typeof AtHref> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: {
    ...defaultArgs,
  },
};

export const Blank: ComponentStoryObj<typeof AtHref> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: {
    ...defaultArgs,
    blank: true,
  },
};
