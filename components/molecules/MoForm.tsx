import React from "react";
// component
import {
  AtInputLabel,
  AtInput,
  AtInputLabelNoMark,
} from "@/components/atoms/EntryPoint";

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
  labelMark?: boolean;
};

// eslint-disable-next-line react/display-name
const MoForm: React.FC<Props> = ({
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
  labelMark = true,
}) => {
  return (
    <>
      <div className="mb-3">
        <div className="mb-1">
          {labelMark ? (
            <AtInputLabel required={required} focused={focused} title={title} />
          ) : (
            <AtInputLabelNoMark
              required={required}
              focused={focused}
              title={title}
            />
          )}
        </div>
        {overView && <div>{overView}</div>}
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
      {error && <span className="text-red-600">{error.message}</span>}
    </>
  );
};
export default MoForm;
