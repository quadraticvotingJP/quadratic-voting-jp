import React from "react";
// component
import {
  AtInputLabel,
  AtInputLabelNoMark,
  AtTextField,
} from "@/components/atoms/EntryPoint";

type Props = {
  // label
  title: string;
  required: boolean;
  focused?: boolean;
  labelMark?: boolean;
  overView: string;
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
};

// eslint-disable-next-line react/display-name
const MoLabelTextField: React.FC<Props> = ({
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
}) => {
  return (
    <>
      <div className="mb-3">
        <div className="mb-1">
          {labelMark ? (
            <AtInputLabel required={required} focused={focused} title={title} />
          ) : (
            <AtInputLabelNoMark
              required={required}
              focused={focused}
              title={title}
            />
          )}
        </div>
        {overView && <div>{overView}</div>}
      </div>
      <AtTextField
        id={id}
        name={name}
        type={type}
        inputProps={inputProps}
        disabled={disabled}
        defaultValue={defaultValue}
        rows={rows}
        maxRows={maxRows}
      />
    </>
  );
};
export default MoLabelTextField;
