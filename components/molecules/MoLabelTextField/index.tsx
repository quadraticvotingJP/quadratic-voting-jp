import React from "react";
// component
import {
  AtLabel,
  AtNoMarkLabel,
  AtTextField,
} from "@/components/atoms/EntryPoint";
import {
  LabelArea,
  LabelTitle,
  OverView,
} from "@/components/shared/EntryPoint";

export type Props = {
  // label
  readonly title: string;
  readonly required: boolean;
  readonly labelMark?: boolean;
  readonly overView: string;
  // textField
  readonly id: string;
  readonly name: string;
  readonly rows: number;
  readonly defaultValue?: string;
  readonly readOnly?: boolean;
};

// eslint-disable-next-line react/display-name
export const MoLabelTextField: React.FC<Props> = ({
  // label
  title,
  required,
  overView,
  labelMark = true,
  id,
  name,
  defaultValue,
  rows,
}) => {
  return (
    <>
      <LabelArea>
        <LabelTitle>
          {labelMark ? (
            <AtLabel required={required} title={title} />
          ) : (
            <AtNoMarkLabel required={required} title={title} />
          )}
        </LabelTitle>
        {overView && <OverView>{overView}</OverView>}
      </LabelArea>
      <AtTextField
        id={id}
        name={name}
        defaultValue={defaultValue}
        rows={rows}
      />
    </>
  );
};
