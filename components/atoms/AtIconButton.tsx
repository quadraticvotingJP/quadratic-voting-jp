// document
// component https://mui.com/components/buttons/
// api https://mui.com/api/button/

import React from "react";
// mui
import { IconButton } from "@mui/material";

type Props = {
  size: ButtonSize;
  color: Color;
  onClick?: () => void;
};

// eslint-disable-next-line react/display-name
const AtIconButton: React.FC<Props> = React.memo(
  ({ children, onClick, color, size }) => {
    return (
      <IconButton color={color} onClick={onClick} size={size}>
        {children}
      </IconButton>
    );
  }
);

export default AtIconButton;
