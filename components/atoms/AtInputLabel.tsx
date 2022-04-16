// document
// component https://mui.com/components/text-fields/#components
// api https://mui.com/api/input-label/

import React from "react";
// mui
import { InputLabel } from "@mui/material";

type Props = {
  readonly title: string;
  readonly required: boolean;
  readonly focused?: boolean; // trueになるとlabelにフォーカスが当たっているよなcssが当たる
};

// eslint-disable-next-line react/display-name
const AtInputLabel: React.FC<Props> = React.memo(
  ({ title, required, focused }) => {
    return (
      <div className="flex h-6">
        <div className="bg-indigo-400 w-2 mr-2"></div>
        <InputLabel
          className="flex items-center font-bold"
          required={required}
          focused={focused}
        >
          {title}
        </InputLabel>
      </div>
    );
  }
);
export default AtInputLabel;
