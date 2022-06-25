import React from "react";
import styled from "styled-components";
import { BASE_CSS } from "@/utils/baseCss";
// component
import { AtLabel } from "@/components/atoms/EntryPoint";
import { MoProcess } from "@/components/molecules/EntryPoint";

export interface Process {
  readonly title: string;
  readonly molecule: string;
  readonly denominator: string;
}

export type Props = {
  // label
  readonly labelTitle: string;
  readonly overView: string;
  // form
  readonly leftForm: Process;
  readonly rightForm: Process;
};

export const OrCardProcess: React.FC<Props> = ({
  labelTitle,
  overView,
  leftForm,
  rightForm,
}) => {
  return (
    <Card>
      <LabelElement>
        <Label>
          <AtLabel required={false} title={labelTitle} />
        </Label>
        {overView && <OverView>{overView}</OverView>}
      </LabelElement>
      <ProcessElement>
        <Participant>
          <ProcessCard>
            <MoProcess
              title={leftForm.title}
              molecule={leftForm.molecule}
              denominator={leftForm.denominator}
            />
          </ProcessCard>
        </Participant>
        <Credits>
          <ProcessCard>
            <MoProcess
              title={rightForm.title}
              molecule={rightForm.molecule}
              denominator={rightForm.denominator}
            />
          </ProcessCard>
        </Credits>
      </ProcessElement>
    </Card>
  );
};

const Card = styled.div`
  padding: 24px;
  background-color: ${BASE_CSS.color.white};
  border-radius: 0.75rem;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;
const LabelElement = styled.div`
  margin-bottom: 14px;
`;
const Label = styled.div`
  margin-bottom: 16px;
`;
const OverView = styled.div`
  font-size: 20px;
  white-space: pre-wrap;
`;
const ProcessElement = styled.div`
  display: flex;
  justify-content: center;
`;
const Participant = styled.div`
  width: 100%;
  margin-right: 16px;
`;
const Credits = styled.div`
  width: 100%;
`;
const ProcessCard = styled.div`
  padding: 12px;
  background-color: ${BASE_CSS.color.white};
  border-radius: 0.75rem;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;
