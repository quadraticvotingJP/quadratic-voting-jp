// document
// component https://mui.com/components/text-fields/#components
// api https://mui.com/api/input-label/

import React from "react";
// mui
import { InputLabel } from "@mui/material";
import styled from "styled-components";

const LabelElement = styled.div`
  display: flex;
  height: 1.5rem;
`;

const LabelArea = styled.div`
  background-color: #2f9bff;
  width: 0.5rem;
  margin-right: 0.5rem;
`;

const Title = styled(InputLabel)`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

type Props = {
  readonly title: string;
  readonly required: boolean;
  readonly focused?: boolean; // trueになるとlabelにフォーカスが当たっているよなcssが当たる
};

// eslint-disable-next-line react/display-name
const AtInputLabel: React.FC<Props> = React.memo(
  ({ title, required, focused }) => {
    return (
      <LabelElement>
        <LabelArea />
        <Title required={required} focused={focused}>
          {title}
        </Title>
      </LabelElement>
    );
  }
);
export default AtInputLabel;
