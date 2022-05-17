import React from "react";
// component
import { Input } from "@mui/material";
// hook
import { UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";

const Form = styled(Input)`
  width: 100%;
  padding: 0.25rem;
  border-radius: 0.5rem;
  background-color: white;
`;

type Props = {
  readonly placeholder: string;
  readonly disabled: boolean;
  readonly type: Readonly<FormType>;
  readonly id: string;
  readonly name: string;
  readonly defaultValue?: string;
  readonly register?: UseFormRegisterReturn;
  readonly readOnly?: boolean;
  readonly disableUnderline?: boolean;
  readonly min?: string;
  readonly max?: string;
  readonly onWheel?: <T>(arg: T) => void;
};

// eslint-disable-next-line react/display-name
const AtInput: React.FC<Props> = React.memo(
  ({
    register,
    id,
    name,
    placeholder,
    disabled,
    type,
    defaultValue,
    min,
    max,
    disableUnderline = false,
    readOnly = false,
    onWheel,
  }) => {
    return (
      <Form
        {...register}
        defaultValue={defaultValue}
        id={id}
        name={name}
        type={type}
        inputProps={{ min: min, max: max }}
        placeholder={placeholder}
        disabled={disabled}
        disableUnderline={disableUnderline}
        readOnly={readOnly}
        onWheel={onWheel}
      />
    );
  }
);
export default AtInput;
