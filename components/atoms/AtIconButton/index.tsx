import React from "react";
import styled from "styled-components";
import { BASE_CSS } from "@/utils/baseCss";
// https://feathericons.com/
import { Trash, Edit2, Save, Copy } from "react-feather";

export type Props = {
  readonly size: Readonly<ButtonSize>;
  readonly disabled?: boolean;
  readonly onClick?: () => void;
  readonly showEdit?: boolean;
  readonly showDelete?: boolean;
  readonly showSave?: boolean;
  readonly showCopy?: boolean;
};

// eslint-disable-next-line react/display-name
export const AtIconButton: React.FC<Props> = React.memo(
  ({ onClick, showSave, showEdit, showDelete, showCopy, disabled }) => {
    return (
      <>
        {showDelete && (
          <DeleteIconButton onClick={onClick} disabled={disabled} type="button">
            <Trash />
          </DeleteIconButton>
        )}
        {showEdit && (
          <EditIconButton onClick={onClick} disabled={disabled} type="button">
            <Edit2 />
          </EditIconButton>
        )}
        {showSave && (
          <SaveIconButton onClick={onClick} disabled={disabled} type="button">
            <Save />
          </SaveIconButton>
        )}
        {showCopy && (
          <CopyIconButton onClick={onClick} disabled={disabled} type="button">
            <Copy />
          </CopyIconButton>
        )}
      </>
    );
  }
);

const SharedButton = styled.button`
  border: none;
  border-radius: 40px;
  color: ${BASE_CSS.color.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditIconButton = styled(SharedButton)`
  min-width: 32px;
  height: 32px;
  &:hover {
    background-color: ${BASE_CSS.color.main};
    color: ${BASE_CSS.color.white};
  }
  &:disabled {
    background-color: ${BASE_CSS.color.white};
    color: ${BASE_CSS.color.disabled};
  }
`;
const DeleteIconButton = styled(SharedButton)`
  min-width: 32px;
  height: 32px;
  &:hover {
    background-color: ${BASE_CSS.color.danger};
    color: ${BASE_CSS.color.white};
  }
  &:disabled {
    background-color: ${BASE_CSS.color.white};
    color: ${BASE_CSS.color.disabled};
  }
`;
const SaveIconButton = styled(SharedButton)`
  min-width: 32px;
  height: 32px;
  &:hover {
    background-color: ${BASE_CSS.color.main};
    color: ${BASE_CSS.color.white};
  }
  &:disabled {
    background-color: ${BASE_CSS.color.white};
    color: ${BASE_CSS.color.disabled};
  }
`;

const CopyIconButton = styled(SharedButton)`
  min-width: 32px;
  height: 32px;
  &:hover {
    background-color: ${BASE_CSS.color.disabled};
    color: ${BASE_CSS.color.white};
  }
`;
