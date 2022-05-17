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
const AtInputLabelNoMark: React.FC<Props> = React.memo(
  ({ title, required, focused }) => {
    return (
      <div className="flex h-6">
        <InputLabel
          sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
          required={required}
          focused={focused}
        >
          {title}
        </InputLabel>
      </div>
    );
  }
);
export default AtInputLabelNoMark;
