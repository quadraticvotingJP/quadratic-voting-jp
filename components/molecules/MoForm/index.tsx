import React from "react";
import styled from "styled-components";
// component
import { AtInput } from "@/components/atoms/EntryPoint";

// hook
import { UseFormRegisterReturn } from "react-hook-form";

export type Props = {
  // form
  readonly register: UseFormRegisterReturn;
  readonly placeholder: string;
  readonly disabled: boolean;
  readonly type: Readonly<FormType>;
  readonly readOnly?: boolean;
  readonly id: string;
  readonly name: string;
  readonly error: any;
};

// eslint-disable-next-line react/display-name
export const MoForm: React.FC<Props> = ({
  // form
  register,
  id,
  name,
  placeholder,
  disabled,
  type,
  readOnly,
  error,
}) => {
  return (
    <>
      <Hidden>
        <AtInput
          register={register}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
        />
      </Hidden>
      {error && <Error>{error.message}</Error>}
    </>
  );
};

const Hidden = styled.div`
  display: none;
`;
const Error = styled.span`
  color: red;
`;
