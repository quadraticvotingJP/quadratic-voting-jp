import React from "react";
// component
import {
  AtInputLabel,
  AtInputLabelNoMark,
  AtTextField,
} from "@/components/atoms/EntryPoint";

type Props = {
  // label
  readonly title: string;
  readonly required: boolean;
  readonly focused?: boolean;
  readonly labelMark?: boolean;
  readonly overView: string;
  // textField
  readonly type: Readonly<FormType>;
  readonly id: string;
  readonly name: string;
  readonly rows?: number;
  readonly maxRows?: number;
  readonly inputProps?: object;
  readonly disabled?: boolean;
  readonly defaultValue?: string;
  readonly readOnly?: boolean;
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
