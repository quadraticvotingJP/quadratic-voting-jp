import React from "react";
import { ChartData } from "chart.js";
// component
import { AtLabel, AtBar } from "@/components/atoms/EntryPoint";
import {
  LabelArea,
  LabelTitle,
  OverView,
} from "@/components/shared/EntryPoint";

export type Props = {
  // label
  readonly title: string;
  readonly overView: string;
  readonly required: boolean;
  // bar
  readonly data: ChartData<"bar", number[], string>;
};

// eslint-disable-next-line react/display-name
export const MoLabelBar: React.FC<Props> = ({
  // label
  title,
  overView,
  required,
  // bar
  data,
}) => {
  return (
    <>
      <LabelArea>
        <LabelTitle>
          <AtLabel required={required} title={title} />
        </LabelTitle>
        {overView && <OverView>{overView}</OverView>}
      </LabelArea>
      <AtBar data={data} />
    </>
  );
};
