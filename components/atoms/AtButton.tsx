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
  ({
    title,
    disabled,
    size,
    onClick,
    type = "button",
    className = "bg-black-900 hover:bg-black-900 hover:bg-opacity-80 text-white text-base w-40 h-10 py-2 px-6 rounded",
  }) => {
    return (
      <button
        className={className}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {title}
      </button>
    );
  }
);

export default AtButton;
