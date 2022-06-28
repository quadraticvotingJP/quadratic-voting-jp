import React from "react";
import styled from "styled-components";
// component
import { MoLabelTextField } from "@/components/molecules/EntryPoint";
import { AtButton } from "@/components/atoms/EntryPoint";
import { Card } from "@/components/shared/EntryPoint";

export interface Button {
  readonly title: string;
  readonly disabled: boolean;
  readonly onClick: () => void;
}

export type Props = {
  // label
  readonly title: string;
  readonly required: boolean;
  readonly overView: string;
  readonly labelMark?: boolean;
  // textField
  readonly id: string;
  readonly name: string;
  readonly rows: number;
  readonly defaultValue?: string;
  readonly readOnly?: boolean;
  readonly button: Button;
};

// eslint-disable-next-line react/display-name
export const OrCardTextField: React.FC<Props> = ({
  // label
  title,
  required,
  overView,
  labelMark = true,
  id,
  name,
  defaultValue,
  rows,
  button,
}) => {
  return (
    <>
      <Card>
        <Section>
          <MoLabelTextField
            title={title}
            required={required}
            labelMark={labelMark}
            overView={overView}
            id={id}
            name={name}
            defaultValue={defaultValue}
            rows={rows}
          />
        </Section>
        <Button>
          <AtButton
            title={button.title}
            disabled={button.disabled}
            onClick={button.onClick}
            accent={true}
          />
        </Button>
      </Card>
    </>
  );
};
const Section = styled.div`
  margin-bottom: 24px;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
`;
