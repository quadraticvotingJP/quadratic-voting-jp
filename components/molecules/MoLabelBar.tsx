import React from "react";
import { ChartData } from "chart.js";
// component
import { AtLabel, AtBar } from "@/components/atoms/EntryPoint";

type Props = {
  // label
  readonly title: string;
  readonly overView: string;
  readonly required: boolean;
  // bar
  readonly data: ChartData<"bar", number[], string>;
};

// eslint-disable-next-line react/display-name
const MoLabelBar: React.FC<Props> = ({
  // label
  title,
  overView,
  required,
  // bar
  data,
}) => {
  return (
    <>
      <div className="mb-3">
        <div className="mb-1">
          <AtLabel required={required} title={title} />
        </div>
        {overView && <div className="mb-3 whitespace-pre-wrap">{overView}</div>}
      </div>
      <AtBar data={data} />
    </>
  );
};
export default MoLabelBar;
