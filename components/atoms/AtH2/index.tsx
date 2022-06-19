import React from "react";
import styled from "styled-components";

export type Props = {
  readonly title: string;
};

// eslint-disable-next-line react/display-name
export const AtH2: React.FC<Props> = React.memo(({ title }) => {
  return <H2>{title}</H2>;
});
const H2 = styled.h2`
  font-weight: bold;
`;
