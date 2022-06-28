import React from "react";
import styled from "styled-components";
import { ChartData } from "chart.js";
// component
import { MoLabelBar } from "@/components/molecules/EntryPoint";
import { AtButton } from "@/components/atoms/EntryPoint";
import { Card } from "@/components/shared/EntryPoint";

interface Button {
  readonly disabled: boolean;
  readonly title: string;
  readonly onClick?: () => void;
}

export type Props = {
  // label
  readonly title: string;
  readonly overView: string;
  readonly required: boolean;
  // bar
  readonly data: ChartData<"bar", number[], string>;
  // button
  readonly button: Button;
};

// eslint-disable-next-line react/display-name
export const OrCardBar: React.FC<Props> = ({
  // label
  title,
  overView,
  required,
  // bar
  data,
  // button
  button,
}) => {
  return (
    <>
      <Card>
        <Bar>
          <MoLabelBar
            title={title}
            overView={overView}
            required={required}
            data={data}
          />
        </Bar>
        <Button>
          <AtButton
            title={button.title}
            disabled={button.disabled}
            onClick={button.onClick}
            accent={true}
          />
        </Button>
      </Card>
    </>
  );
};

const Bar = styled.div`
  margin-bottom: 24px;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
`;
