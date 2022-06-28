import React from "react";
import styled from "styled-components";
import { UseFormRegisterReturn } from "react-hook-form";
// component
import { MoForm, MoAccordion } from "@/components/molecules/EntryPoint";
import { AtLabel } from "@/components/atoms/EntryPoint";
import { Card } from "@/components/shared/EntryPoint";

export type Props = {
  readonly title: string;
  readonly required: boolean;
  // Options
  readonly options: Option[];
  readonly onClickEdit: (index: number) => void;
  readonly onClickDelete: (index: number) => void;
  readonly register: UseFormRegisterReturn;
  readonly placeholder: string;
  readonly disabled: boolean;
  readonly type: FormType;
  readonly readOnly?: boolean;
  readonly id: string;
  readonly name: string;
  readonly error: any;
};

// eslint-disable-next-line react/display-name
export const OrAccordion: React.FC<Props> = React.memo(
  ({
    required,
    title,
    // Options
    options,
    onClickDelete,
    onClickEdit,
    register,
    placeholder,
    disabled,
    type,
    readOnly,
    id,
    name,
    error,
  }) => {
    return (
      <>
        <Card>
          <LabelElement>
            <Label>
              <AtLabel required={required} title={title} />
            </Label>
          </LabelElement>
          {options &&
            options.map((option: Option, index: number) => {
              return (
                <MoAccordion
                  key={index}
                  option={option}
                  size="small"
                  onClickDelete={() => onClickDelete(index)}
                  onClickEdit={() => onClickEdit(index)}
                  disabled={disabled}
                />
              );
            })}
          {/* OptionsがあるかだけのチェックをするForm */}
          <MoForm
            register={register}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            error={error}
          />
        </Card>
      </>
    );
  }
);
const LabelElement = styled.div`
  margin-bottom: 14px;
`;
const Label = styled.div`
  margin-bottom: 16px;
`;
