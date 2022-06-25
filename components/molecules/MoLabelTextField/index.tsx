import React from "react";
import { BASE_CSS } from "@/utils/baseCss";
import { sp, tab } from "@/media";
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
