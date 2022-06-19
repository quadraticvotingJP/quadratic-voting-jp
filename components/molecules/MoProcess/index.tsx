import React from "react";
// component
import styled from "styled-components";

export type Props = {
  readonly title: string;
  readonly molecule: string;
  readonly denominator: string;
};

export const MoProcess: React.FC<Props> = ({
  title,
  molecule,
  denominator,
}) => {
  return (
    <>
      <Title>
        <H2>{title}</H2>
      </Title>
      <ValueArea>
        <Molecule>{molecule}</Molecule>
        <Vinculum>/</Vinculum>
        <Denominator>{denominator}</Denominator>
      </ValueArea>
    </>
  );
};

const Title = styled.div`
  margin-bottom: 16px;
`;
const H2 = styled.h2`
  font-weight: bold;
`;
const ValueArea = styled.div`
  display: flex;
  justify-content: center;
`;
const Molecule = styled.div`
  font-weight: bold;
`;
const Vinculum = styled.div`
  font-weight: bold;
  margin: 0px 16px;
`;
const Denominator = styled.div`
  font-weight: bold;
`;
