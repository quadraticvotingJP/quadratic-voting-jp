import React from "react";
// component
import {
  AtLabel,
  AtNoMarkLabel,
  AtIconButton,
} from "@/components/atoms/EntryPoint";
import styled from "styled-components";

type Props = {
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
      <LabelElement>
        <Label>
          {labelMark ? (
            <AtLabel required={required} title={title} />
          ) : (
            <AtNoMarkLabel required={required} title={title} />
          )}
        </Label>
      </LabelElement>
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

const LabelElement = styled.div`
  margin-bottom: 32px;
`;
const Label = styled.div`
  margin-bottom: 17px;
`;
const DateElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Date = styled.div`
  font-weight: bold;
`;
