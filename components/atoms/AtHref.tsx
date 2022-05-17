import React from "react";
import styled from "styled-components";

const RefElement = styled.a`
  color: #58a5ff;
`;

type Props = {
  readonly blank?: boolean;
  readonly title: string;
  readonly link: string;
};

// eslint-disable-next-line react/display-name
const AtHref: React.FC<Props> = React.memo(({ title, link, blank = false }) => {
  return blank ? (
    <RefElement href={link} target="_blank" rel="noopener noreferrer">
      {title}
    </RefElement>
  ) : (
    <RefElement href={link} rel="noopener noreferrer">
      {title}
    </RefElement>
  );
});

export default AtHref;
