import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { BASE_CSS } from "@/utils/baseCss";
import { sp, tab } from "@/media";
// hook
import { UseFormRegisterReturn } from "react-hook-form";

const InputElement = styled.input`
  width: 100%;
  height: ${BASE_CSS.form.pc.formHeight};
  border-bottom: 2px #e3e8ef solid;
  font-size: ${BASE_CSS.form.pc.formFontSize};
  padding: 0px 0px 0px 4px;
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
  border-bottom: 2px solid ${BASE_CSS.color.gray};
  &:focus {
    outline: none;
    border-bottom: 2px solid ${BASE_CSS.color.main};
  }
  ::placeholder {
    color: #ccc;
  }
  ${tab`
  `}
  ${sp`
    font-size: ${BASE_CSS.form.sp.formFontSize};
    height: ${BASE_CSS.form.sp.formHeight};
  `}
`;

export type Props = {
  readonly register?: UseFormRegisterReturn;
} & ComponentPropsWithoutRef<"input">;

// eslint-disable-next-line react/display-name
export const AtInput: React.FC<Props> = React.memo((props) => (
  <InputElement {...props.register} {...props} />
));
