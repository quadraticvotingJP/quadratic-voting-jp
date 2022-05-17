import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-weight: bold;
  font-size: 35px;
  text-align: center;
`;

type Props = {
  readonly title: string;
};

// eslint-disable-next-line react/display-name
const AtH2: React.FC<Props> = React.memo(({ title }) => {
  return <Title>{title}</Title>;
});
export default AtH2;
