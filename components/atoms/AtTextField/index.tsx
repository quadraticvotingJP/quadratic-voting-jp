import React, { ComponentPropsWithoutRef } from "react";
import styled, { css } from "styled-components";
import { BASE_CSS } from "@/utils/baseCss";
export type CssProps = {
  voteCredits?: boolean;
};
export type Props = {
  voteCredits?: boolean;
} & ComponentPropsWithoutRef<"textarea">;

// eslint-disable-next-line react/display-name
export const AtTextField: React.FC<Props> = React.memo((props) => (
  <TextAreaElement {...props} voteCredits={props.voteCredits} readOnly />
));

const TextAreaElement = styled.textarea<CssProps>`
  width: 100%;
  border: 2px #e3e8ef solid;
  border-radius: 4px;
  font-size: 14px;
  padding: 10px;
  resize: none;
  ${(props) => props.voteCredits && voteCredits}
  &:focus {
    outline: none;
    border: 2px solid ${BASE_CSS.color.base};
  }
`;
const voteCredits = css`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;
