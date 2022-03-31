import React from "react";
// component
import { Input } from "@mui/material";
// hook
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  placeholder: string;
  disabled: boolean;
  type: FormType;
  id: string;
  name: string;
  defaultValue?: string;
  register?: UseFormRegisterReturn;
  readOnly?: boolean;
  disableUnderline?: boolean;
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
        placeholder={placeholder}
        disabled={disabled}
        disableUnderline={disableUnderline}
        readOnly={readOnly}
      />
    );
  }
);
export default AtInput;
