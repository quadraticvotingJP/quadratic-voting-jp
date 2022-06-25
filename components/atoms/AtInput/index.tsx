import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
// hook
import { UseFormRegisterReturn } from "react-hook-form";

const InputElement = styled.input`
  width: 100%;
  height: 44px;
  border-bottom: 2px #e3e8ef solid;
  font-size: 20px;
  padding: 0px 0px 0px 4px;
  &:focus {
    outline: none;
    border-bottom: 2px solid #2f9bff;
  }
`;

export type Props = {
  readonly type: Readonly<FormType>;
  readonly id: string;
  readonly register?: UseFormRegisterReturn;
} & ComponentPropsWithoutRef<"input">;

// eslint-disable-next-line react/display-name
export const AtInput: React.FC<Props> = React.memo((props) => {
  return <InputElement {...props.register} {...props} />;
});
