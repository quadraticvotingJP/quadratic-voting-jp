import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { AtButton, Props } from ".";

const meta: Meta = {
  title: "components/atoms/AtButton",
  component: AtButton,
  decorators: [withDesign],
};
export default meta;

const defaultArgs: Props = {
  title: "ボタン",
  main: false,
  accent: false,
  fullWidth: false,
};

const defaultDesign = {
  type: "figma",
  url: "",
};

export const Button: ComponentStoryObj<typeof AtButton> = {
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

export const MainButton: ComponentStoryObj<typeof AtButton> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: {
    ...defaultArgs,
    main: true,
  },
};

export const AccentButton: ComponentStoryObj<typeof AtButton> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: {
    ...defaultArgs,
    accent: true,
  },
};

export const FullWidthMainButton: ComponentStoryObj<typeof AtButton> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: {
    ...defaultArgs,
    main: true,
    fullWidth: true,
  },
};

export const FullWidthAccentButton: ComponentStoryObj<typeof AtButton> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: {
    ...defaultArgs,
    accent: true,
    fullWidth: true,
  },
};
