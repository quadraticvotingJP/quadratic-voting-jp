import React, { ComponentPropsWithoutRef } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { sp, tab } from "@/media";
import { BASE_CSS } from "@/utils/baseCss";

export type Props = {
  readonly title: string;
} & StyledBaseButtonProps &
  ComponentPropsWithoutRef<"button">;

interface StyledBaseButtonProps {
  main?: boolean;
  accent?: boolean;
  fullWidth?: boolean;
  square?: boolean;
}

// eslint-disable-next-line react/display-name
export const AtButton: React.FC<Props> = React.memo((props) => (
  <BaseButton {...props}>{props.title}</BaseButton>
));

const BaseButton = styled.button<StyledBaseButtonProps>`
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.8rem 3rem;
  border-color: ${BASE_CSS.color.main};
  background-color: ${BASE_CSS.color.base};
  color: rgb(47 155 255);
  border-width: 2px;
  width: auto;
  -webkit-appearance: button;
  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    border-color: rgb(191 219 254);
    color: rgb(191 219 254);
    opacity: 1;
  }
  ${(props) => props.main && MainButton};
  ${(props) => props.accent && AccentButton};
  ${(props) => props.fullWidth && FullWidth};
  ${(props) => props.square && SquareButton};
  ${tab`
  `}
  ${sp`
    padding: 0.4rem 1.5rem;
  `}
`;
const MainButton = css`
  background-color: ${BASE_CSS.color.main};
  color: rgb(255 255 255);
  border-radius: 9999px;
  &:disabled {
    background-color: rgb(191 219 254);
    border-color: rgb(191 219 254);
    opacity: 1;
    color: ${BASE_CSS.color.base};
  }
`;
const AccentButton: FlattenSimpleInterpolation = css`
  padding: 1rem 3rem;
  border: unset;
  background-color: ${BASE_CSS.color.accent};
  color: ${BASE_CSS.color.base};
  width: auto;
  min-width: 200px;
  border-radius: 9999px;
  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    background-color: rgb(203 213 225);
    color: ${BASE_CSS.color.base};
    opacity: 1;
  }
  ${tab`
  `}
  ${sp`
    padding: 0.4rem 1.5rem;
  `}
`;

const FullWidth = css`
  border-radius: 9999px;
  width: 100%;
`;
const SquareButton = css`
  margin-top: 14px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: unset;
  background-color: ${BASE_CSS.color.accent};
  color: ${BASE_CSS.color.base};
  width: auto;
  min-width: 164px;
  height: 34px;
  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    background-color: rgb(203 213 225);
    color: ${BASE_CSS.color.base};
    opacity: 1;
  }
`;
