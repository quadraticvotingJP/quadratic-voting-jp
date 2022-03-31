import React from "react";
// component
import { MoLabelForm } from "@/components/molecules/EntryPoint";
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
  placeholder: string;
  disabled: boolean;
  type: FormType;
  id: string;
  name: string;
  register?: UseFormRegisterReturn;
  error?: any;
  disableUnderline?: boolean;
  defaultValue?: string;
  readOnly?: boolean;
};

// eslint-disable-next-line react/display-name
const OrCardForm: React.FC<Props> = ({
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
  defaultValue,
  type,
  readOnly,
  error,
}) => {
  return (
    <>
      <Card className="p-6">
        <MoLabelForm
          focused={focused}
          title={title}
          required={required}
          overView={overView}
          register={register}
          defaultValue={defaultValue}
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
export default OrCardForm;
