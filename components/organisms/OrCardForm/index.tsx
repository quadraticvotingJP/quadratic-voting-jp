import React from "react";
// component
import { MoLabelForm } from "@/components/molecules/EntryPoint";
import { Card } from "@/components/shared/EntryPoint";

// hook
import { UseFormRegisterReturn } from "react-hook-form";

export type Props = {
  // label
  readonly title: string;
  readonly required: boolean;
  readonly overView?: string;
  // form
  readonly placeholder: string;
  readonly disabled: boolean;
  readonly type: Readonly<FormType>;
  readonly id: string;
  readonly name: string;
  readonly register?: UseFormRegisterReturn;
  readonly error?: any;
  readonly defaultValue?: string;
  readonly readOnly?: boolean;
  readonly showSave?: boolean;
  readonly onClick?: () => void;
  readonly onWheel?: <T>(arg: T) => void;
};

// eslint-disable-next-line react/display-name
export const OrCardForm: React.FC<Props> = ({
  // label
  title,
  required,
  overView,
  // form
  register,
  id,
  name,
  placeholder,
  disabled,
  defaultValue,
  type,
  readOnly,
  error,
  showSave,
  onClick,
  onWheel,
}) => {
  return (
    <>
      <Card>
        <MoLabelForm
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
          readOnly={readOnly}
          error={error}
          showSave={showSave}
          onClick={onClick}
          onWheel={onWheel}
        />
      </Card>
    </>
  );
};
