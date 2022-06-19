import React from "react";
import { ChartData } from "chart.js";
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
  margin-bottom: 14px;
`;
const Label = styled.div`
  margin-bottom: 16px;
`;
const OverView = styled.div`
  font-size: 20px;
  white-space: pre-wrap;
`;
