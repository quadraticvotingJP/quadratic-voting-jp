import React from "react";
// component
import { Input } from "@mui/material";
// hook
import { UseFormRegisterReturn } from "react-hook-form";

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
  }) => {
    return (
      <Input
        className="w-full px-0.5 py-0.5 rounded-l-lg rounded-r-lg bg-white"
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
      />
    );
  }
);
export default AtInput;
