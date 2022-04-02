import React from "react";
import { ChartData } from "chart.js";
// component
import { MoLabelBar } from "@/components/molecules/EntryPoint";
import { Card } from "@mui/material";

type Props = {
  // label
  title: string;
  required: boolean;
  focused?: boolean;
  // bar
  data: ChartData<"bar", number[], string>;
};

// eslint-disable-next-line react/display-name
const OrCardBar: React.FC<Props> = ({
  // label
  title,
  focused,
  required,
  // bar
  data,
}) => {
  return (
    <>
      <Card className="p-6">
        <MoLabelBar
          focused={focused}
          title={title}
          required={required}
          data={data}
        />
      </Card>
    </>
  );
};
export default OrCardBar;
