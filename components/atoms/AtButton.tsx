import React from "react";

type Props = {
  readonly title: string;
  readonly disabled: boolean;
  readonly onClick?: () => void;
  readonly type?: Readonly<ButtonType>;
  readonly className?: string;
};

// eslint-disable-next-line react/display-name
const AtButton: React.FC<Props> = React.memo(
  ({
    title,
    disabled,
    onClick,
    type = "button",
    className = "bg-black-900 hover:bg-black-900 hover:bg-opacity-80 text-white text-base w-40 h-10 py-2 px-6 rounded disabled:bg-slate-300	",
  }) => {
    return (
      <button
        className={`${className} rounded-full`}
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
