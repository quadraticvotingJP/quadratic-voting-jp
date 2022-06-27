import React, { useEffect } from "react";
import styled from "styled-components";
import { sp, tab } from "@/media";
import { useScreenSize } from "@/architecture/hooks/ screenSize";

export interface Props {
  readonly cost: number;
  readonly style: string;
  readonly denominator: number;
}

// eslint-disable-next-line react/display-name
export const OrProposalBlocks: React.FC<Props> = React.memo(
  ({ cost, style, denominator }) => {
    useEffect(() => {}, [cost]);
    const RESPONSIVE = useScreenSize();

    return (
      <>
        <ProposalBlocks>
          <div className={style}>
            <Credits>
              {(RESPONSIVE.SIZE_PC || RESPONSIVE.SIZE_TAB) && (
                <>
                  <span>{cost}</span>
                  <span>/</span>
                  <span>{denominator}</span>
                </>
              )}
              {RESPONSIVE.SIZE_SP && (
                <>
                  <span>{cost}</span>
                  <span>-</span>
                  <span>{denominator}</span>
                </>
              )}
            </Credits>
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
  ${tab`
  `}
  ${sp`
    position: fixed;
    right: -4px;
    top: 80px;
    padding-left: 2px;
    div {
      min-width: 60px;
      padding: 16px 2px;
    }
  `}
`;
const Credits = styled.p`
  margin: 0px;
  ${sp`
    display: flex;
    flex-wrap: wrap;
    span {
      width: 100%;
    }
  `}
`;
const Text = styled.p`
  font-size: 8px;
  width: -webkit-fill-available;
`;
