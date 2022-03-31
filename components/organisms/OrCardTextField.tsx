import React from "react";
// component
import { MoLabelTextField } from "@/components/molecules/EntryPoint";
import { AtButton } from "@/components/atoms/EntryPoint";
import { Card } from "@mui/material";

interface Button {
  title: string;
  disabled: boolean;
  size: ButtonSize;
  onClick: () => void;
}

type Props = {
  // label
  title: string;
  required: boolean;
  focused?: boolean;
  overView: string;
  labelMark?: boolean;
  // textField
  type: FormType;
  id: string;
  name: string;
  rows?: number;
  maxRows?: number;
  inputProps?: object;
  disabled?: boolean;
  defaultValue?: string;
  readOnly?: boolean;
  button: Button;
};

// eslint-disable-next-line react/display-name
const OrCardTextField: React.FC<Props> = ({
  // label
  title,
  focused,
  required,
  overView,
  labelMark = true,
  id,
  name,
  disabled,
  type,
  defaultValue,
  rows,
  maxRows,
  inputProps,
  button,
}) => {
  return (
    <>
      <Card className="p-6">
        <div className="mb-3">
          <MoLabelTextField
            title={title}
            focused={focused}
            required={required}
            disabled={disabled}
            labelMark={labelMark}
            overView={overView}
            id={id}
            name={name}
            type={type}
            defaultValue={defaultValue}
            rows={rows}
            maxRows={maxRows}
            inputProps={inputProps}
          />
        </div>
        <AtButton
          title={button.title}
          disabled={button.disabled}
          size={button.size}
          onClick={button.onClick}
        />
      </Card>
    </>
  );
};
export default OrCardTextField;
