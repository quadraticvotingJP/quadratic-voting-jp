import React from "react";
// component
import { TextField } from "@mui/material";

type Props = {
  readonly type: Readonly<FormType>;
  readonly id: string;
  readonly name: string;
  readonly maxRows?: number;
  readonly rows?: number;
  readonly inputProps?: object;
  readonly disabled?: boolean;
  readonly defaultValue?: string;
  readonly readOnly?: boolean;
  readonly className?: string;
  readonly value?: string | number;
  readonly InputProps?: object;
  readonly multiline?: boolean;
};

// eslint-disable-next-line react/display-name
const AtTextField: React.FC<Props> = React.memo(
  ({
    id,
    name,
    disabled,
    type,
    defaultValue,
    rows,
    maxRows,
    inputProps,
    className = "w-full px-0.5 py-0.5 rounded-l-lg rounded-r-lg bg-white",
    value,
    InputProps,
    multiline = true,
  }) => {
    return (
      <TextField
        className={className}
        defaultValue={defaultValue}
        id={id}
        name={name}
        type={type}
        disabled={disabled}
        inputProps={inputProps}
        rows={rows}
        maxRows={maxRows}
        multiline={multiline}
        value={value}
        InputProps={InputProps}
      />
    );
  }
);
export default AtTextField;
