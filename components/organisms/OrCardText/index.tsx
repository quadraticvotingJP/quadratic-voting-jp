import React from "react";
import styled from "styled-components";
import { BASE_CSS } from "@/utils/baseCss";
// component
import { MoLabelText } from "@/components/molecules/EntryPoint";

export type Props = {
  // label
  readonly title: string;
  readonly contents: string;
  readonly required: boolean;
  // button
  readonly showEdit: boolean;
  readonly disabled: boolean;
  readonly onClick?: () => void;
  readonly labelMark?: boolean;
};

// eslint-disable-next-line react/display-name
export const OrCardText: React.FC<Props> = ({
  // label
  title,
  required,
  // Text
  contents,
  // button
  showEdit,
  disabled,
  onClick,
}) => {
  return (
    <>
      <Card>
        <MoLabelText
          title={title}
          required={required}
          contents={contents}
          showEdit={showEdit}
          disabled={disabled}
          onClick={onClick}
        />
      </Card>
    </>
  );
};

const Card = styled.div`
  padding: 24px;
  background-color: ${BASE_CSS.color.white};
  border-radius: 0.75rem;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;
