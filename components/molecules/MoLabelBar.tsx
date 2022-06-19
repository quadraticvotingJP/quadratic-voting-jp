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
export default MoLabelBar;

const LabelElement = styled.div`
  margin-bottom: 32px;
`;
const Label = styled.div`
  margin-bottom: 17px;
`;
const OverView = styled.div`
  white-space: pre-wrap;
`;
