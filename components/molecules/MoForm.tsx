import React from "react";
// component
import { AtInputLabel } from "@/components/atoms/AtInputLabel";
import { AtInput } from "@/components/atoms/AtInput";
// hook
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  // label
  title: string;
  required: boolean;
  focused?: boolean;
  // form
  register: UseFormRegisterReturn;
  placeholder: string;
  disabled: boolean;
  disableUnderline: boolean;
  type: FormType;
  readOnly: boolean;
  id: string;
  name: string;
  error: any;
};

// eslint-disable-next-line react/display-name
export const MoForm: React.FC<Props> = React.memo(
  ({
    // label
    title,
    focused,
    required,
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
        <div className="mb-4">
          <AtInputLabel required={required} focused={focused} title={title} />
        </div>
        <AtInput
          register={register}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          disableUnderline={disableUnderline}
          readOnly={readOnly}
        />
        {error && <span>{error.message}</span>}
      </>
    );
  }
);
