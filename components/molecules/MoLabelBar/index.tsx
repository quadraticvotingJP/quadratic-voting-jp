import React from "react";
import { ChartData } from "chart.js";
import { BASE_CSS } from "@/utils/baseCss";
import { sp, tab } from "@/media";
// component
import { AtLabel, AtBar } from "@/components/atoms/EntryPoint";
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
      <LabelElement>
        <Label>
          <AtLabel required={required} title={title} />
        </Label>
        {overView && <OverView>{overView}</OverView>}
      </LabelElement>
      <AtBar data={data} />
    </>
  );
};

const LabelElement = styled.div`
  margin-bottom: ${BASE_CSS.form.pc.labelAreaBottom};
  ${tab`
  `}
  ${sp`
    margin-bottom: ${BASE_CSS.form.sp.labelAreaBottom};
  `}
`;
const Label = styled.div`
  margin-bottom: ${BASE_CSS.form.pc.labelTitleBottom};
  ${tab`
  `}
  ${sp`
    margin-bottom: ${BASE_CSS.form.sp.labelTitleBottom};
  `}
`;
const OverView = styled.div`
  font-size: ${BASE_CSS.form.pc.overView};
  white-space: pre-wrap;
  ${tab`
  `}
  ${sp`
    font-size: ${BASE_CSS.form.sp.overView};
  `}
`;
