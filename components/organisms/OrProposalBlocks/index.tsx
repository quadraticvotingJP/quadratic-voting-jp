import React, { ComponentPropsWithoutRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { sp, tab } from "@/media";
import { useScreenSize } from "@/architecture/hooks/ screenSize";

interface StyledBaseStatusProps {
  normal?: boolean;
}

export type Props = {
  readonly cost: number;
  readonly denominator: number;
} & StyledBaseStatusProps;

// eslint-disable-next-line react/display-name
export const OrProposalBlocks: React.FC<Props> = React.memo(
  ({ cost, denominator, normal = true }) => {
    useEffect(() => {}, [cost]);
    const RESPONSIVE = useScreenSize();

    return (
      <ProposalBlocks>
        <StatusReflection normal={normal}>
          <Credits>
            {(RESPONSIVE.SIZE_PC || RESPONSIVE.SIZE_TAB) && (
              <>
                <Text>残</Text>
                <span>{cost}</span>
                <span>/</span>
                <span>{denominator}</span>
                <span>票</span>
              </>
            )}
            {RESPONSIVE.SIZE_SP && (
              <>
                <Text>残</Text>
                <span>{cost}</span>
                <span>-</span>
                <span>{denominator}</span>
                <span>票</span>
              </>
            )}
          </Credits>
        </StatusReflection>
      </ProposalBlocks>
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

const StatusReflection = styled.div<StyledBaseStatusProps>`
  padding: 1.5rem;
  color: white;
  text-align: center;
  border-radius: 0.25rem;
  font-weight: normal;
  min-width: 105px;
  ${(props) => props.normal && Normal};
  ${(props) => !props.normal && Abnormal};
`;

const Normal = css`
  background-color: rgb(47 155 255);
`;
const Abnormal = css`
  background-color: rgb(250 14 14);
`;

const Credits = styled.p`
  margin: 0px;
  font-size: 16px;
  ${sp`
    display: flex;
    flex-wrap: wrap;
    span {
      width: 100%;
    }
  `}
`;
const Text = styled.span`
  font-size: 8px;
  width: -webkit-fill-available;
`;
