import React from "react";
import { BASE_CSS } from "@/utils/baseCss";
import { sp, tab } from "@/media";
import styled from "styled-components";
// component
import {
  AtLabel,
  AtNoMarkLabel,
  AtIconButton,
} from "@/components/atoms/EntryPoint";
import { LabelArea, LabelTitle } from "@/components/shared/EntryPoint";

export type Props = {
  // label
  readonly title: string;
  readonly required: boolean;
  readonly contents: string;

  // button
  readonly showEdit: boolean;
  readonly disabled: boolean;
  readonly onClick?: () => void;
  readonly labelMark?: boolean;
};

// eslint-disable-next-line react/display-name
export const MoLabelText: React.FC<Props> = ({
  // label
  title,
  required,
  contents,
  // button
  showEdit,
  disabled,
  onClick,
  labelMark = true,
}) => {
  return (
    <>
      <LabelArea>
        <LabelTitle>
          {labelMark ? (
            <AtLabel required={required} title={title} />
          ) : (
            <AtNoMarkLabel required={required} title={title} />
          )}
        </LabelTitle>
      </LabelArea>
      <DateElement>
        <Date>{contents}</Date>
        {showEdit && (
          <AtIconButton
            size="small"
            showEdit={showEdit}
            disabled={disabled}
            onClick={onClick}
          />
        )}
      </DateElement>
    </>
  );
};
const DateElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Date = styled.div`
  word-break: break-word;
  font-size: ${BASE_CSS.form.pc.formFontSize};
  font-weight: bold;
  ${tab`
  `}
  ${sp`
    font-size: ${BASE_CSS.form.sp.formFontSize};
  `}
`;
