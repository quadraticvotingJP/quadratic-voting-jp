import React from "react";
// component
import { AtInput } from "@/components/atoms/EntryPoint";

// hook
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
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
  className: string;
};

// eslint-disable-next-line react/display-name
const MoForm: React.FC<Props> = ({
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
  className,
}) => {
  return (
    <>
      <div className={className}>
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
      </div>
      {error && <span className="text-red-600">{error.message}</span>}
    </>
  );
};
export default MoForm;
