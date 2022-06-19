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

const Title = styled.div`
  margin-bottom: 16px;
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
