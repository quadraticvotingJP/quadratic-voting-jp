import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { AtTextField, Props } from ".";

const meta: Meta = {
  title: "components/atoms/shared/AtTextField",
  component: AtTextField,
  decorators: [withDesign],
};
export default meta;

const defaultArgs: Props = {
  voteCredits: false,
  voteLink: false,
  defaultValue: "ほげほげほげほげほげほげほげほげ",
  rows: 1,
};

const defaultDesign = {
  type: "figma",
  url: "",
};

export const TextField: ComponentStoryObj<typeof AtTextField> = {
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

export const VoteCreditsTextField: ComponentStoryObj<typeof AtTextField> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: {
    ...defaultArgs,
    voteCredits: true,
    defaultValue: 0,
  },
};

export const VoteLinkTextField: ComponentStoryObj<typeof AtTextField> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: {
    ...defaultArgs,
    voteLink: true,
    defaultValue:
      "https://www.figma.com/file/IdmP8Caxdqb8NCG7BMrjRL/QuadraticVoarding.jp?node-id=0%3A1",
  },
};
