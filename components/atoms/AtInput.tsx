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
  className: string;
};

// eslint-disable-next-line react/display-name
export const AtInput: React.FC<Props> = React.memo(
  ({
    register,
    className,
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
        {...register}
        className={className}
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
