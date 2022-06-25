import React from "react";
import { BASE_CSS } from "@/utils/baseCss";
// styled components
import styled from "styled-components";

export type Props = {
  readonly title: string;
  readonly required: boolean;
};

// eslint-disable-next-line react/display-name
export const AtNoMarkLabel: React.FC<Props> = React.memo(
  ({ title, required = false }) => {
    return (
      <LabelElement>
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
const Label = styled.label`
  color: ${BASE_CSS.text.label.color};
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  margin-right: 10px;
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
