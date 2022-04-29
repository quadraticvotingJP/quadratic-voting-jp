// document
// component https://mui.com/components/buttons/
// api https://mui.com/api/button/

import React from "react";
// mui
import { IconButton } from "@mui/material";
// icon
// iconの種類はd.tsを参照@mui/icons-material/
import { Save, Edit, Delete } from "@mui/icons-material";

type Props = {
  readonly size: Readonly<ButtonSize>;
  readonly disabled?: boolean;
  readonly onClick?: () => void;
  readonly showEdit?: boolean;
  readonly showDelete?: boolean;
  readonly showSave?: boolean;
};

// eslint-disable-next-line react/display-name
const AtIconButton: React.FC<Props> = React.memo(
  ({ onClick, size, showSave, showEdit, showDelete, disabled }) => {
    return (
      <>
        {showDelete && (
          <IconButton
            className="text-black-900 hover:text-red-900"
            onClick={onClick}
            size={size}
            disabled={disabled}
          >
            <Delete />
          </IconButton>
        )}
        {showEdit && (
          <IconButton
            className="text-black-900 hover:text-blue-900"
            onClick={onClick}
            size={size}
            disabled={disabled}
          >
            <Edit />
          </IconButton>
        )}
        {showSave && (
          <IconButton
            className="text-black-900 hover:text-blue-900"
            onClick={onClick}
            size={size}
            disabled={disabled}
          >
            <Save />
          </IconButton>
        )}
      </>
    );
  }
);

export default AtIconButton;
