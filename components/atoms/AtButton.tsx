// document
// component https://mui.com/components/buttons/
// api https://mui.com/api/button/

import React from "react";
// mui
import { Button } from "@mui/material";

type Props = {
  title: string;
  disabled: boolean;
  size: "small" | "large" | "medium";
};

// eslint-disable-next-line react/display-name
export const AtButton: React.FC<Props> = React.memo(
  ({ title, disabled, size }) => {
    return (
      <Button disabled={disabled} size={size}>
        {title}
      </Button>
    );
  }
);
