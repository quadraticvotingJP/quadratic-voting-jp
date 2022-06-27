import React, { ComponentPropsWithoutRef } from "react";
import styled, { css } from "styled-components";
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
}

// eslint-disable-next-line react/display-name
export const AtButton: React.FC<Props> = React.memo((props) => (
  <BaseButton {...props}>{props.title}</BaseButton>
));

const BaseButton = styled.button<StyledBaseButtonProps>`
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.8rem 3rem;
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  --tw-text-opacity: 1;
  border-color: rgb(47 155 255);
  color: rgb(47 155 255);
  border-width: 2px;
  border-radius: 9999px;
  width: auto;
  -webkit-appearance: button;
  &:disabled {
    border-color: rgb(191 219 254);
    color: rgb(191 219 254);
    opacity: 1;
  }
  ${(props) => props.main && MainButton};
  ${(props) => props.accent && AccentButton};
  ${(props) => props.fullWidth && FullWidth};
  ${tab`
  `}
  ${sp`
    padding: 0.4rem 1.5rem;
  `}
`;
const MainButton = css`
  background-color: rgb(47 155 255);
  color: rgb(255 255 255);
  &:disabled {
    background-color: rgb(191 219 254);
    border-color: rgb(191 219 254);
    opacity: 1;
    color: ${BASE_CSS.color.white};
  }
`;
const AccentButton = css`
  padding: 1rem 3rem;
  background-color: rgb(0 33 52);
  border: unset;
  color: ${BASE_CSS.color.white};
  width: auto;
  min-width: 200px;
  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    background-color: rgb(203 213 225);
    color: ${BASE_CSS.color.white};
    opacity: 1;
  }
  ${tab`
  `}
  ${sp`
    padding: 0.4rem 1.5rem;
  `}
`;

const FullWidth = css`
  width: 100%;
`;
