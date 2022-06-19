import React from "react";
// component
import {
  AtLabel,
  AtInput,
  AtNoMarkLabel,
  AtIconButton,
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
  console.log(showSave);

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
                disableUnderline={disableUnderline}
                readOnly={readOnly}
                min={min}
                onWheel={onWheel}
              />
              {error && <Error>{error.message}</Error>}
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
            disableUnderline={disableUnderline}
            readOnly={readOnly}
            min={min}
            onWheel={onWheel}
          />
          {error && <Error>{error.message}</Error>}
        </>
      )}
    </>
  );
};

const LabelElement = styled.div`
  margin-bottom: 32px;
`;
const Label = styled.div`
  margin-bottom: 17px;
`;
const OverView = styled.div`
  white-space: pre-wrap;
`;
const EditElement = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Error = styled.span`
  color: red;
`;
