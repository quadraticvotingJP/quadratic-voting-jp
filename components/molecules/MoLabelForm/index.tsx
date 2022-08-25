import React from "react";
import styled from "styled-components";
// component
import {
  AtLabel,
  AtInput,
  AtNoMarkLabel,
  AtIconButton,
  AtErrorMessage,
} from "@/components/atoms/EntryPoint";
import {
  LabelArea,
  LabelTitle,
  OverView,
} from "@/components/shared/EntryPoint";

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
  readonly min?: string;
  readonly error?: any;
  readonly register?: UseFormRegisterReturn;
  readonly defaultValue?: string;
  readonly readOnly?: boolean;
  readonly labelMark?: boolean;
  readonly showSave?: boolean;
  readonly showCopy?: boolean;
  readonly onClick?: () => void;
  readonly onWheel?: <T>(arg: T) => void;
  readonly onLinkCopy?: () => void;
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
  showCopy,
  onClick,
  onWheel,
  onLinkCopy,
  labelMark = true,
  min,
}) => (
  <>
    <LabelArea>
      <LabelTitle>
        {labelMark ? (
          <AtLabel required={required} title={title} />
        ) : (
          <AtNoMarkLabel required={required} title={title} />
        )}
      </LabelTitle>
      {overView && <OverView>{overView}</OverView>}
    </LabelArea>
    {showSave ? (
      <>
        {/* ダッシュボードの日付編集 */}
        <EditElement>
          <div>
            <AtInput
              defaultValue={defaultValue}
              min={min}
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
    ) : showCopy ? (
      <FormArea>
        <CopyFrom
          defaultValue={defaultValue}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
        />
        <AtIconButton size="small" showCopy onClick={onLinkCopy} />
      </FormArea>
    ) : (
      <>
        <AtInput
          min={min}
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

const EditElement = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FormArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CopyFrom = styled(AtInput)`
  width: 90%;
`;
