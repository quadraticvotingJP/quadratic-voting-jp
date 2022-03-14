import React from "react";
// component
import { Input } from "@mui/material";
// hook
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  register: UseFormRegisterReturn;
  placeholder: string;
  disabled: boolean;
  disableUnderline: boolean;
  type: FormType;
  readOnly: boolean;
  id: string;
  name: string;
};

// eslint-disable-next-line react/display-name
const AtInput: React.FC<Props> = React.memo(
  ({
    register,
    id,
    name,
    placeholder,
    disabled,
    disableUnderline,
    type,
    readOnly,
  }) => {
    return (
      <Input
        className="w-6/12 px-0.5 py-0.5 rounded-l-lg rounded-r-lg bg-white"
        {...register}
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
