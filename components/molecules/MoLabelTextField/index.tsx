import React from "react";
// component
import {
  AtLabel,
  AtNoMarkLabel,
  AtTextField,
} from "@/components/atoms/EntryPoint";
import styled from "styled-components";

type Props = {
  // label
  readonly title: string;
  readonly required: boolean;
  readonly labelMark?: boolean;
  readonly overView: string;
  // textField
  readonly id: string;
  readonly name: string;
  readonly rows: number;
  readonly defaultValue?: string;
  readonly readOnly?: boolean;
};

// eslint-disable-next-line react/display-name
export const MoLabelTextField: React.FC<Props> = ({
  // label
  title,
  required,
  overView,
  labelMark = true,
  id,
  name,
  defaultValue,
  rows,
}) => {
  return (
    <>
      <LabelElement>
        <Label>
          {labelMark ? (
            <AtLabel required={required} title={title} />
          ) : (
            <AtNoMarkLabel required={required} title={title} />
          )}
        </Label>
        {overView && <OverView>{overView}</OverView>}
      </LabelElement>
      <AtTextField
        id={id}
        name={name}
        defaultValue={defaultValue}
        rows={rows}
      />
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
