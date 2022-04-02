import React from "react";
import { ChartData } from "chart.js";
// component
import { MoLabelBar } from "@/components/molecules/EntryPoint";
import { AtButton } from "@/components/atoms/EntryPoint";
import { Card } from "@mui/material";

interface Button {
  disabled: boolean;
  title: string;
  size: ButtonSize;
  onClick?: () => void;
}

type Props = {
  // label
  title: string;
  required: boolean;
  focused?: boolean;
  // bar
  data: ChartData<"bar", number[], string>;
  // button
  button: Button;
};

// eslint-disable-next-line react/display-name
const OrCardBar: React.FC<Props> = ({
  // label
  title,
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
            required={required}
            data={data}
          />
        </div>
        <div className="flex justify-center">
          <AtButton
            title={button.title}
            disabled={button.disabled}
            size={button.size}
            onClick={button.onClick}
          />
        </div>
      </Card>
    </>
  );
};
export default OrCardBar;
