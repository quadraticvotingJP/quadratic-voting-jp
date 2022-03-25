// https://mui.com/components/buttons/#icon-button
import React from "react";
// component
import { AtIconButton } from "@/components/atoms/EntryPoint";
// icon
// iconの種類はd.tsを参照@mui/icons-material/
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

type Props = {
  size: ButtonSize;
  showEdit?: boolean;
  showDelete?: boolean;
  onClick?: () => void;
};

// eslint-disable-next-line react/display-name
const MoIconButton: React.FC<Props> = React.memo(
  ({ size, onClick, showDelete = false, showEdit = false }) => {
    return (
      <>
        {showDelete && (
          <AtIconButton color="error" onClick={onClick} size={size}>
            <DeleteIcon />
          </AtIconButton>
        )}
        {showEdit && (
          <AtIconButton color="primary" onClick={onClick} size={size}>
            <EditIcon />
          </AtIconButton>
        )}
      </>
    );
  }
);
export default MoIconButton;
