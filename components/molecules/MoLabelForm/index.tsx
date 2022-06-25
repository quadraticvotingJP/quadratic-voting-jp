import React from "react";
import { BASE_CSS } from "@/utils/baseCss";
import { sp, tab } from "@/media";
// component
import {
  AtLabel,
  AtInput,
  AtNoMarkLabel,
  AtIconButton,
  AtErrorMessage,
} from "@/components/atoms/EntryPoint";
import styled from "styled-components";

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
  readonly error?: any;
  readonly register?: UseFormRegisterReturn;
  readonly defaultValue?: string;
  readonly readOnly?: boolean;
  readonly labelMark?: boolean;
  readonly showSave?: boolean;
  readonly onClick?: () => void;
  readonly onWheel?: <T>(arg: T) => void;
};

// eslint-disable-next-line react/display-name
export const MoLabelForm: React.FC<Props> = ({
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
  type,
  readOnly,
  defaultValue,
  error,
  showSave,
  onClick,
  onWheel,
  labelMark = true,
}) => {
  return (
    <>
      <LabelElement>
        <Label>
          {labelMark ? (
            <AtLabel required={required} title={title} />
          ) : (
            <AtNoMarkLabel required={required} title={title} />
          )}
        </Label>
        {overView && <OverView>{overView}</OverView>}
      </LabelElement>
      {showSave ? (
        <>
          <EditElement>
            <div>
              <AtInput
                defaultValue={defaultValue}
                register={register}
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readOnly}
                onWheel={onWheel}
              />
              <AtErrorMessage error={error} />
            </div>
            <AtIconButton size="small" showSave={showSave} onClick={onClick} />
          </EditElement>
        </>
      ) : (
        <>
          <AtInput
            defaultValue={defaultValue}
            register={register}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            onWheel={onWheel}
          />
          <AtErrorMessage error={error} />
        </>
      )}
    </>
  );
};

const LabelElement = styled.div`
  margin-bottom: ${BASE_CSS.form.pc.labelAreaBottom};
  ${tab`
  `}
  ${sp`
    margin-bottom: ${BASE_CSS.form.sp.labelAreaBottom};
  `}
`;
const Label = styled.div`
  margin-bottom: ${BASE_CSS.form.pc.labelTitleBottom};
  ${tab`
  `}
  ${sp`
    margin-bottom: ${BASE_CSS.form.sp.labelTitleBottom};
  `}
`;
const OverView = styled.div`
  font-size: ${BASE_CSS.form.pc.overView};
  white-space: pre-wrap;
  ${tab`
  `}
  ${sp`
    font-size: ${BASE_CSS.form.sp.overView};
  `}
`;
const EditElement = styled.div`
  display: flex;
  justify-content: space-between;
`;
