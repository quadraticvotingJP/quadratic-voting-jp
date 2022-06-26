import React from "react";
import styled, { css } from "styled-components";

export type Props = {
  readonly title: string;
  readonly disabled: boolean;
  readonly onClick?: () => void;
  readonly type?: Readonly<ButtonType>;
  readonly className?: string;
  readonly main?: boolean;
  readonly accent?: boolean;
  readonly fullWidth?: boolean;
};

interface StyledBaseButtonProps {
  main?: boolean;
  accent?: boolean;
  fullWidth?: boolean;
}

// eslint-disable-next-line react/display-name
export const AtButton: React.FC<Props> = React.memo(
  ({ title, disabled, onClick, type = "button", main, accent, fullWidth }) => {
    return (
      <>
        <BaseButton
          type={type}
          disabled={disabled}
          onClick={onClick}
          main={main}
          accent={accent}
          fullWidth={fullWidth}
        >
          {title}
        </BaseButton>
      </>
    );
  }
);

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
`;
const MainButton = css`
  background-color: rgb(47 155 255);
  color: rgb(255 255 255);
  &:disabled {
    background-color: rgb(191 219 254);
    border-color: rgb(191 219 254);
    opacity: 1;
    color: white;
  }
`;
const AccentButton = css`
  padding: 1rem 3rem;
  background-color: rgb(0 33 52);
  border: unset;
  color: white;
  width: auto;
  min-width: 200px;
  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    background-color: rgb(203 213 225);
    color: white;
    opacity: 1;
  }
`;

const FullWidth = css`
  width: 100%;
`;
