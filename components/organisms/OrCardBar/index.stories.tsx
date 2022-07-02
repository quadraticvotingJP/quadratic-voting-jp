import { ComponentStoryObj, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { OrCardBar, Props } from ".";

const meta: Meta = {
  title: "components/organisms/OrCardBar",
  component: OrCardBar,
  decorators: [withDesign],
};
export default meta;

const defaultArgs: Props = {
  title: "投票数・投票率",
  overView:
    "投票数：1選択肢における投票数を集計\n投票率：選択肢の投票数 / 全体投票数",
  required: false,
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
  button: { title: "ボタン", disabled: false, onClick: () => {} },
};

const defaultDesign = {
  type: "figma",
  url: "",
};

export const LabelBar: ComponentStoryObj<typeof OrCardBar> = {
  parameters: {
    design: {
      ...defaultDesign,
      url: "",
    },
  },
  args: { ...defaultArgs },
};
