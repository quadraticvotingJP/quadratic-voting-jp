import React from "react";
// component
import { MoForm } from "@/components/molecules/EntryPoint";
import { Card } from "@mui/material";

// hook
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  // label
  title: string;
  required: boolean;
  focused?: boolean;
  overView?: string;
  // form
  register: UseFormRegisterReturn;
  placeholder: string;
  disabled: boolean;
  disableUnderline?: boolean;
  type: FormType;
  readOnly?: boolean;
  id: string;
  name: string;
  error: any;
};

// eslint-disable-next-line react/display-name
const OrForm: React.FC<Props> = ({
  // label
  title,
  focused,
  required,
  overView,
  // form
  register,
  id,
  name,
  placeholder,
  disabled,
  disableUnderline,
  type,
  readOnly,
  error,
}) => {
  return (
    <>
      <Card className="p-6">
        <MoForm
          focused={focused}
          title={title}
          required={required}
          overView={overView}
          register={register}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          disableUnderline={disableUnderline}
          readOnly={readOnly}
          error={error}
        />
      </Card>
    </>
  );
};
export default OrForm;
