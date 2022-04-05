import React from "react";
// component
import { MoLabelTextField } from "@/components/molecules/EntryPoint";
import { AtButton } from "@/components/atoms/EntryPoint";
import { Card } from "@mui/material";

interface Button {
  readonly title: string;
  readonly disabled: boolean;
  readonly size: ButtonSize;
  readonly onClick: () => void;
}

type Props = {
  // label
  readonly title: string;
  readonly required: boolean;
  readonly focused?: boolean;
  readonly overView: string;
  readonly labelMark?: boolean;
  // textField
  readonly type: FormType;
  readonly id: string;
  readonly name: string;
  readonly rows?: number;
  readonly maxRows?: number;
  readonly inputProps?: object;
  readonly disabled?: boolean;
  readonly defaultValue?: string;
  readonly readOnly?: boolean;
  readonly button: Button;
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
