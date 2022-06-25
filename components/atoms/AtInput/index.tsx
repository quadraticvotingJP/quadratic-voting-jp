import React from "react";
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
  readonly placeholder: string;
  readonly disabled: boolean;
  readonly type: Readonly<FormType>;
  readonly id: string;
  readonly name: string;
  readonly defaultValue?: string;
  readonly register?: UseFormRegisterReturn;
  readonly readOnly?: boolean;
  readonly onWheel?: <T>(arg: T) => void;
};

// eslint-disable-next-line react/display-name
export const AtInput: React.FC<Props> = React.memo(
  ({
    register,
    id,
    placeholder,
    disabled,
    type,
    name,
    defaultValue,
    readOnly = false,
    onWheel,
  }) => {
    return (
      <InputElement
        {...register}
        defaultValue={defaultValue}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        onWheel={onWheel}
      />
    );
  }
);
