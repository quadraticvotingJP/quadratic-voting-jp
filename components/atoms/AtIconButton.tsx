// document
// component https://mui.com/components/buttons/
// api https://mui.com/api/button/

import React from "react";
// mui
import { IconButton } from "@mui/material";
// icon
// iconの種類はd.tsを参照@mui/icons-material/
import { Save, Edit, Delete } from "@mui/icons-material";
import styled from "styled-components";

const ButtonElement = styled(IconButton)`
  color: black;
`;

const DeleteButton = styled(ButtonElement)`
  &:hover {
    color: red;
  }
`;

const Button = styled(ButtonElement)`
  &:hover {
    color: #2f9bff;
  }
`;

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
          <DeleteButton onClick={onClick} size={size} disabled={disabled}>
            <Delete />
          </DeleteButton>
        )}
        {showEdit && (
          <Button onClick={onClick} size={size} disabled={disabled}>
            <Edit />
          </Button>
        )}
        {showSave && (
          <Button onClick={onClick} size={size} disabled={disabled}>
            <Save />
          </Button>
        )}
      </>
    );
  }
);

export default AtIconButton;
