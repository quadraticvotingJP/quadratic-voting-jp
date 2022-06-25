import React, { useEffect } from "react";
import styled from "styled-components";

export interface Props {
  readonly cost: number;
  readonly style: string;
  readonly denominator: number;
}

// eslint-disable-next-line react/display-name
export const OrProposalBlocks: React.FC<Props> = React.memo(
  ({ cost, style, denominator }) => {
    useEffect(() => {}, [cost]);

    return (
      <>
        <ProposalBlocks>
          <div className={style}>
            <Credits>{cost + `/` + denominator}</Credits>
            <Text>Credits</Text>
          </div>
        </ProposalBlocks>
      </>
    );
  }
);

const ProposalBlocks = styled.div`
  position: fixed;
  padding-left: 8px;
`;
const Credits = styled.p`
  margin: 0px;
`;
const Text = styled.p`
  font-size: 8px;
`;
