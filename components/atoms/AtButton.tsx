// document
// component https://mui.com/components/buttons/
// api https://mui.com/api/button/

import React from "react";
// mui
import { Button } from "@mui/material";

type Props = {
  readonly title: string;
  readonly disabled: boolean;
  readonly size: Readonly<ButtonSize>;
  readonly onClick?: () => void;
  readonly type?: Readonly<ButtonType>;
  readonly className?: string;
};

// eslint-disable-next-line react/display-name
const AtButton: React.FC<Props> = React.memo(
  ({ title, disabled, size, onClick, type = "button", className }) => {
    return (
      <Button
        sx={{
          color: "white",
          backgroundColor: "#002134",
          "&:hover": {
            backgroundColor: "#002134",
            opacity: "80%",
            color: "white",
          },
        }}
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
