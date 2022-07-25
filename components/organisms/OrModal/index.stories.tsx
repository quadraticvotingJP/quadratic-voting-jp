import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Presentation, OrModalProps } from "./presentation";

const meta: Meta = {
  title: "components/organisms/shared/OrModal",
  component: Presentation,
  decorators: [withDesign],
};
export default meta;

const defaultArgs: OrModalProps = {
  title: "回答確認",
  open: true,
  close: () => {},
};

const defaultDesign = {
  type: "figma",
  url: "",
};

export const DefaultModal: ComponentStoryObj<typeof Presentation> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "https://www.figma.com/file/JG86nnzp5xE6caUrMLkt2N/%E3%82%B9%E3%83%9E%E3%82%B9%E3%82%B1?node-id=250%3A3575",
    },
  },
  args: {
    ...defaultArgs,
  },
};
