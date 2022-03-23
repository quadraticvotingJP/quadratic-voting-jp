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
  onClick?: () => void;
};

// eslint-disable-next-line react/display-name
const AtButton: React.FC<Props> = React.memo(
  ({ title, disabled, size, onClick }) => {
    return (
      <Button
        variant="outlined"
        disabled={disabled}
        size={size}
        onClick={onClick}
      >
        {title}
      </Button>
    );
  }
);

export default AtButton;
