import React from "react";
import { BASE_CSS } from "@/utils/baseCss";
import { sp, tab } from "@/media";
// styled components
import styled from "styled-components";

export type Props = {
  readonly title: string;
  readonly required: boolean;
};

// フォームのrequiredの色はstyles/globals.cssに設定
// eslint-disable-next-line react/display-name
export const AtLabel: React.FC<Props> = React.memo(
  ({ title, required = false }) => {
    return (
      <LabelElement>
        <LabelMark />
        <Label>{title}</Label>
        <RequiredElement>
          {required && <LabelRequired>*</LabelRequired>}
        </RequiredElement>
      </LabelElement>
    );
  }
);

const LabelElement = styled.div`
  display: flex;
  height: 32px;
`;
const LabelMark = styled.div`
  background-color: ${BASE_CSS.color.main};
  width: 6px;
  margin-right: 8px;
`;
const Label = styled.label`
  color: ${BASE_CSS.text.label.color};
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: ${BASE_CSS.form.pc.title};
  margin-right: 10px;
  ${tab`
  `}
  ${sp`
    font-size: ${BASE_CSS.form.sp.title};
  `}
`;
const RequiredElement = styled.div`
  position: relative;
`;
const LabelRequired = styled.div`
  color: ${BASE_CSS.color.red};
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  top: -2px;
  left: 0px;
`;
