// document
import React, { ComponentPropsWithoutRef } from "react";
// styled components
import styled from "styled-components";
import { BASE_CSS } from "@/utils/baseCss";
import { sp, tab } from "@/media";

export type Props = {
  error: any;
} & ComponentPropsWithoutRef<"div">;

// eslint-disable-next-line react/display-name
export const AtErrorMessage: React.FC<Props> = React.memo(({ error }) => (
  <ErrorArea>
    {error && <Text>{error.message}</Text>}
    <Text></Text>
  </ErrorArea>
));

const ErrorArea = styled.div`
  min-height: 24px;
  ${tab`
  `}
  ${sp`
    min-height: 12px;
  `}
`;
const Text = styled.span`
  color: ${BASE_CSS.color.red};
  ${tab`
  `}
  ${sp`
    font-size: 12px;
  `}
`;
