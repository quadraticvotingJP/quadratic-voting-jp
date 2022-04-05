import React from "react";
// component
import { TextField } from "@mui/material";

type Props = {
  readonly type: FormType;
  readonly id: string;
  readonly name: string;
  readonly maxRows?: number;
  readonly rows?: number;
  readonly inputProps?: object;
  readonly disabled?: boolean;
  readonly defaultValue?: string;
  readonly readOnly?: boolean;
};

// eslint-disable-next-line react/display-name
const AtTextField: React.FC<Props> = React.memo(
  ({ id, name, disabled, type, defaultValue, rows, maxRows, inputProps }) => {
    return (
      <TextField
        className="w-full px-0.5 py-0.5 rounded-l-lg rounded-r-lg bg-white"
        defaultValue={defaultValue}
        id={id}
        name={name}
        type={type}
        disabled={disabled}
        inputProps={inputProps}
        rows={rows}
        maxRows={maxRows}
        multiline
      />
    );
  }
);
export default AtTextField;
