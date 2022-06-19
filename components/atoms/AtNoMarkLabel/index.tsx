import React from "react";
// styled components
import styled from "styled-components";

const LabelElement = styled.div`
  display: flex;
  height: 32px;
`;

const Label = styled.label`
  color: #00022e;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  margin-right: 10px;
`;

const LabelRequired = styled.div`
  color: red;
  font-size: 20px;
  font-weight: bold;
`;

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
        {required && <LabelRequired>*</LabelRequired>}
      </LabelElement>
    );
  }
);
