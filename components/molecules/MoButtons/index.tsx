import React from "react";
// component
import { AtButton } from "@/components/atoms/EntryPoint";
import styled from "styled-components";

interface Button {
  readonly title: string;
  readonly disabled: boolean;
  readonly onClick: () => void;
}

type Props = {
  readonly left: Button;
  readonly right: Button;
  readonly leftStyle: string;
  readonly rightStyle: string;
};

export const MoButtons: React.FC<Props> = ({ left, right }) => {
  return (
    <Col2>
      <AtButton
        title={left.title}
        onClick={left.onClick}
        disabled={left.disabled}
        fullWidth={true}
      />
      {/* 2つのButtonのサイズ感がずれるためクラスで流す */}
      <AtButton
        title={right.title}
        onClick={right.onClick}
        disabled={right.disabled}
        main={true}
        fullWidth={true}
      />
    </Col2>
  );
};
export default MoButtons;

const Col2 = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 2rem;
`;
