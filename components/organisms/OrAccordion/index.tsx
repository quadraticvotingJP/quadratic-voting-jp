import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
// component
import { MoForm, MoAccordion } from "@/components/molecules/EntryPoint";
import { AtLabel } from "@/components/atoms/EntryPoint";
import { Card, LabelArea, LabelTitle } from "@/components/shared/EntryPoint";

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
          <LabelArea>
            <LabelTitle>
              <AtLabel required={required} title={title} />
            </LabelTitle>
          </LabelArea>
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
