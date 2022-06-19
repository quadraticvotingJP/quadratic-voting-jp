import React from "react";
// component
import {
  AtLabel,
  AtNoMarkLabel,
  AtTextField,
} from "@/components/atoms/EntryPoint";

type Props = {
  // label
  readonly title: string;
  readonly required: boolean;
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
            <AtLabel required={required} title={title} />
          ) : (
            <AtNoMarkLabel required={required} title={title} />
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
