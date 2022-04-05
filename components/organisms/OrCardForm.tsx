import React from "react";
// component
import { MoLabelForm } from "@/components/molecules/EntryPoint";
import { Card } from "@mui/material";

// hook
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  // label
  readonly title: string;
  readonly required: boolean;
  readonly focused?: boolean;
  readonly overView?: string;
  // form
  readonly placeholder: string;
  readonly disabled: boolean;
  readonly type: FormType;
  readonly id: string;
  readonly name: string;
  readonly register?: UseFormRegisterReturn;
  readonly error?: any;
  readonly disableUnderline?: boolean;
  readonly defaultValue?: string;
  readonly min?: string;
  readonly readOnly?: boolean;
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
  min,
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
          min={min}
          error={error}
        />
      </Card>
    </>
  );
};
export default OrCardForm;
