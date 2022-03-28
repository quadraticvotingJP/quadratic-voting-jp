// https://mui.com/components/buttons/#icon-button
import React from "react";
// component
import { MoAccordion, MoForm } from "@/components/molecules/EntryPoint";
import { AtInputLabel } from "@/components/atoms/EntryPoint";
// mui
import { Card } from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  size: ButtonSize;
  title: string;
  required: boolean;
  focused?: boolean;
  options: Option[];
  onClickEdit?: (arg?: any) => void;
  onClickDelete?: (arg?: any) => void;
  // Options
  register: UseFormRegisterReturn;
  placeholder: string;
  disabled: boolean;
  type: FormType;
  readOnly?: boolean;
  id: string;
  name: string;
  error: any;
  className: string;
};

// eslint-disable-next-line react/display-name
const OrAccordion: React.FC<Props> = React.memo(
  ({
    options,
    required,
    focused,
    title,
    size,
    onClickEdit,
    onClickDelete,
    // Options
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
                  size={size}
                  onClickEdit={onClickEdit}
                  onClickDelete={onClickDelete}
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
