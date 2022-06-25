import React from "react";
import styled from "styled-components";
import { BASE_CSS } from "@/utils/baseCss";
// component
import { MoLabelForm } from "@/components/molecules/EntryPoint";

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

const Card = styled.div`
  padding: 24px;
  background-color: ${BASE_CSS.color.white};
  border-radius: 0.75rem;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;
