import React from "react";
// component
import { MoLabelText } from "@/components/molecules/EntryPoint";
import { Card } from "@mui/material";

type Props = {
  // label
  readonly title: string;
  readonly contents: string;
  readonly required: boolean;
  readonly focused?: boolean;
  // button
  readonly showEdit: boolean;
  readonly disabled: boolean;
  readonly onClick?: () => void;
  readonly labelMark?: boolean;
};

// eslint-disable-next-line react/display-name
const OrCardText: React.FC<Props> = ({
  // label
  title,
  focused,
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
      <Card className="p-6">
        <MoLabelText
          focused={focused}
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
export default OrCardText;
