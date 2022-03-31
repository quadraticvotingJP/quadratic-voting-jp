import React from "react";
// component
import { MoLabelText } from "@/components/molecules/EntryPoint";
import { Card } from "@mui/material";

type Props = {
  // label
  title: string;
  contents: string;
  required: boolean;
  focused?: boolean;
};

// eslint-disable-next-line react/display-name
const OrCardText: React.FC<Props> = ({
  // label
  title,
  focused,
  required,
  // Text
  contents,
}) => {
  return (
    <>
      <Card className="p-6">
        <MoLabelText
          focused={focused}
          title={title}
          required={required}
          contents={contents}
        />
      </Card>
    </>
  );
};
export default OrCardText;
