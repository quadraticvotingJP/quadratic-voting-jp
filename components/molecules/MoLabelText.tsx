import React from "react";
// component
import {
  AtInputLabel,
  AtInputLabelNoMark,
} from "@/components/atoms/EntryPoint";

type Props = {
  // label
  title: string;
  required: boolean;
  contents: string;
  focused?: boolean;
  labelMark?: boolean;
};

// eslint-disable-next-line react/display-name
const MoLabelText: React.FC<Props> = ({
  // label
  title,
  focused,
  required,
  contents,
  labelMark = true,
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
      </div>
      <p className="font-bold">{contents}</p>
    </>
  );
};
export default MoLabelText;
