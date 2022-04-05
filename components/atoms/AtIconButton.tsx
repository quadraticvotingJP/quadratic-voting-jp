// document
// component https://mui.com/components/buttons/
// api https://mui.com/api/button/

import React from "react";
// mui
import { IconButton } from "@mui/material";
// icon
// iconの種類はd.tsを参照@mui/icons-material/
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

type Props = {
  readonly size: ButtonSize;
  readonly disabled: boolean;
  readonly onClick?: () => void;
  readonly showEdit?: boolean;
  readonly showDelete?: boolean;
};

// eslint-disable-next-line react/display-name
const AtIconButton: React.FC<Props> = React.memo(
  ({ onClick, size, showEdit, showDelete, disabled }) => {
    return (
      <>
        {showDelete && (
          <IconButton
            color="error"
            onClick={onClick}
            size={size}
            disabled={disabled}
          >
            <DeleteIcon />
          </IconButton>
        )}
        {showEdit && (
          <IconButton
            color="primary"
            onClick={onClick}
            size={size}
            disabled={disabled}
          >
            <EditIcon />
          </IconButton>
        )}
      </>
    );
  }
);

export default AtIconButton;
