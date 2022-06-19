import React from "react";
// component
import { AtH2 } from "@/components/atoms/EntryPoint";
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
        <AtH2 title={title} />
      </Title>
      <ValueArea>
        <Molecule>{molecule}</Molecule>
        <Vinculum>/</Vinculum>
        <Denominator>{denominator}</Denominator>
      </ValueArea>
    </>
  );
};

const Title = styled.h2`
  margin-bottom: 16px;
`;
const ValueArea = styled.h2`
  display: flex;
  justify-content: center;
`;
const Molecule = styled.h2`
  font-weight: bold;
`;
const Vinculum = styled.h2`
  font-weight: bold;
  margin: 0px 16px;
`;
const Denominator = styled.h2`
  font-weight: bold;
`;
