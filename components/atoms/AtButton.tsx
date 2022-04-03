// document
// component https://mui.com/components/buttons/
// api https://mui.com/api/button/

import React from "react";
// mui
import { Button } from "@mui/material";

type Props = {
  title: string;
  disabled: boolean;
  size: ButtonSize;
  onClick?: () => void;
  type?: ButtonType;
  className?: string;
};

// eslint-disable-next-line react/display-name
const AtButton: React.FC<Props> = React.memo(
  ({
    title,
    disabled,
    size,
    onClick,
    type = "button",
    className = "bg-indigo-400 hover:bg-indigo-300	text-white",
  }) => {
    return (
      <Button
        className={className}
        type={type}
        variant="contained"
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
