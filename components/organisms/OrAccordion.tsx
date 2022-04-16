// https://mui.com/components/buttons/#icon-button
import React from "react";
// component
import { MoForm, MoAccordion } from "@/components/molecules/EntryPoint";
import { AtInputLabel } from "@/components/atoms/EntryPoint";
// mui
import { Card } from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  readonly title: string;
  readonly required: boolean;
  readonly focused?: boolean;
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
  readonly className: string;
};

// eslint-disable-next-line react/display-name
const OrAccordion: React.FC<Props> = React.memo(
  ({
    required,
    focused,
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
    className,
  }) => {
    return (
      <>
        <Card className="p-6">
          <div className="mb-3">
            <div className="mb-1">
              <AtInputLabel
                required={required}
                focused={focused}
                title={title}
              />
            </div>
          </div>

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
            className={className}
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
export default OrAccordion;
