import React from "react";
import { ChartData } from "chart.js";
// component
import { MoLabelBar } from "@/components/molecules/EntryPoint";
import { AtButton } from "@/components/atoms/EntryPoint";
import { Card } from "@mui/material";

interface Button {
  readonly disabled: boolean;
  readonly title: string;
  readonly size: Readonly<ButtonSize>;
  readonly onClick?: () => void;
}

type Props = {
  // label
  readonly title: string;
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
            className={{
              color: "white",
              backgroundColor: "#002134 !important",
              "&:hover": {
                backgroundColor: "#002134",
                opacity: "80%",
                color: "white",
              },
            }}
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
