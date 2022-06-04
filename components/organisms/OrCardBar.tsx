import React from "react";
import { ChartData } from "chart.js";
// component
import { MoLabelBar } from "@/components/molecules/EntryPoint";
import { AtButton } from "@/components/atoms/EntryPoint";
import { Card } from "@mui/material";

interface Button {
  readonly disabled: boolean;
  readonly title: string;
  readonly onClick?: () => void;
}

type Props = {
  // label
  readonly title: string;
  readonly overView: string;
  readonly required: boolean;
  readonly focused?: boolean;
  // bar
  readonly data: ChartData<"bar", number[], string>;
  // button
  readonly button: Button;
};

// eslint-disable-next-line react/display-name
const OrCardBar: React.FC<Props> = ({
  // label
  title,
  overView,
  focused,
  required,
  // bar
  data,
  // button
  button,
}) => {
  return (
    <>
      <Card className="p-6">
        <div className="mb-3">
          <MoLabelBar
            focused={focused}
            title={title}
            overView={overView}
            required={required}
            data={data}
          />
        </div>
        <div className="flex justify-center">
          <AtButton
            className="bg-black-900 hover:bg-black-900 hover:bg-opacity-80 text-white text-xs w-40 h-10 py-2 px-6 rounded"
            title={button.title}
            disabled={button.disabled}
            onClick={button.onClick}
          />
        </div>
      </Card>
    </>
  );
};
export default OrCardBar;
