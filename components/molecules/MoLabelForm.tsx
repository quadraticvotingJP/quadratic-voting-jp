import React from "react";
// component
import {
  AtInputLabel,
  AtInput,
  AtInputLabelNoMark,
  AtIconButton,
} from "@/components/atoms/EntryPoint";

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
  readonly disableUnderline?: boolean;
  readonly type: Readonly<FormType>;
  readonly id: string;
  readonly name: string;
  readonly error?: any;
  readonly register?: UseFormRegisterReturn;
  readonly defaultValue?: string;
  readonly readOnly?: boolean;
  readonly labelMark?: boolean;
  readonly min?: string;
  readonly showSave?: boolean;
  readonly onClick?: () => void;
  readonly onWheel?: <T>(arg: T) => void;
};

// eslint-disable-next-line react/display-name
const MoLabelForm: React.FC<Props> = ({
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
  defaultValue,
  error,
  min,
  showSave,
  onClick,
  onWheel,
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
        {overView && <div className="whitespace-pre-wrap">{overView}</div>}
      </div>
      <div className={showSave ? "flex justify-between" : ""}>
        <div>
          <AtInput
            defaultValue={defaultValue}
            register={register}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            disableUnderline={disableUnderline}
            readOnly={readOnly}
            min={min}
            onWheel={onWheel}
          />
          {error && <span className="text-red-600">{error.message}</span>}
        </div>
        {showSave && (
          <AtIconButton size="small" showSave={showSave} onClick={onClick} />
        )}
      </div>
    </>
  );
};
export default MoLabelForm;
