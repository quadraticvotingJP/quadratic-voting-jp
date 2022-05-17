import React from "react";
// component
import { TextField } from "@mui/material";
import styled from "styled-components";

const Form = styled(TextField)`
  width: 100%;
  padding: 0.25rem;
  border-radius: 0.5rem;
  background-color: white;
`;

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
};

// eslint-disable-next-line react/display-name
const AtTextField: React.FC<Props> = React.memo(
  ({ id, name, disabled, type, defaultValue, rows, maxRows, inputProps }) => {
    return (
      <Form
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
