import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { AtBar, Props } from ".";

const meta: Meta = {
  title: "components/atoms/AtBar",
  component: AtBar,
  decorators: [withDesign],
};
export default meta;

const defaultArgs: Props = {
  data: {
    datasets: [
      {
        indexAxis: "y",
        label: "投票数",
        data: [2, 8],
        backgroundColor: "rgba(254,97,132,0.2)",
        borderColor: "rgba(254,97,132)",
        borderWidth: 1,
      },
      {
        indexAxis: "y",
        label: "投票率",
        data: [20, 80],
        backgroundColor: "rgba(59 130 246 / 0.2)",
        borderColor: "rgba(59 130 246)",
        borderWidth: 1,
      },
    ],
    labels: ["選択肢1", "選択肢2"],
  },
  height: 2 * 30,
};

const defaultDesign = {
  type: "figma",
  url: "",
};

export const Bar: ComponentStoryObj<typeof AtBar> = {
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
