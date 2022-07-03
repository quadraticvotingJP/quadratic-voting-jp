import React from "react";
// component
import { Card } from "@/components/shared/EntryPoint";
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
