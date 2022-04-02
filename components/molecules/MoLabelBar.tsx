import React from "react";
import { ChartData } from "chart.js";
// component
import { AtInputLabel, AtBar } from "@/components/atoms/EntryPoint";

type Props = {
  // label
  title: string;
  required: boolean;
  focused?: boolean;
  // bar
  data: ChartData<"bar", number[], string>;
};

// eslint-disable-next-line react/display-name
const MoLabelBar: React.FC<Props> = ({
  // label
  title,
  focused,
  required,
  // bar
  data,
}) => {
  return (
    <>
      <div className="mb-3">
        <div className="mb-1">
          <AtInputLabel required={required} focused={focused} title={title} />
        </div>
      </div>
      <AtBar data={data} />
    </>
  );
};
export default MoLabelBar;
