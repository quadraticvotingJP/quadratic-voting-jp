import React from "react";
import { ChartData } from "chart.js";
import { BASE_CSS } from "@/utils/baseCss";
import { sp, tab } from "@/media";
// component
import { AtLabel, AtBar } from "@/components/atoms/EntryPoint";
import { LabelArea, LabelTitle } from "@/components/shared/EntryPoint";
// styled components
import styled from "styled-components";

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
const OverView = styled.div`
  font-size: ${BASE_CSS.form.pc.overView};
  white-space: pre-wrap;
  ${tab`
  `}
  ${sp`
    font-size: ${BASE_CSS.form.sp.overView};
  `}
`;
