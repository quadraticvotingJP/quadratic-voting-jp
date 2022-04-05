import React from "react";
// component
import {
  AtInputLabel,
  AtInputLabelNoMark,
  AtIconButton,
} from "@/components/atoms/EntryPoint";

type Props = {
  // label
  readonly title: string;
  readonly required: boolean;
  readonly contents: string;
  readonly focused?: boolean;
  // button
  readonly showEdit: boolean;
  readonly disabled: boolean;
  readonly onClick?: () => void;
  readonly labelMark?: boolean;
};

// eslint-disable-next-line react/display-name
const MoLabelText: React.FC<Props> = ({
  // label
  title,
  focused,
  required,
  contents,
  // button
  showEdit,
  disabled,
  onClick,
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
      <div className="flex justify-between items-center">
        <p className="font-bold">{contents}</p>
        {showEdit && (
          <AtIconButton
            size="small"
            showEdit={showEdit}
            disabled={disabled}
            onClick={onClick}
          />
        )}
      </div>
    </>
  );
};
export default MoLabelText;
