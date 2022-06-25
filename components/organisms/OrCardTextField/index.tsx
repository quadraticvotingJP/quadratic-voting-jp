import React from "react";
import styled from "styled-components";
import { BASE_CSS } from "@/utils/baseCss";
// component
import { MoLabelTextField } from "@/components/molecules/EntryPoint";
import { AtButton } from "@/components/atoms/EntryPoint";

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
            className="bg-black-900 hover:bg-black-900 hover:bg-opacity-80 text-white text-xs w-40 h-10 py-2 px-6 rounded"
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

const Card = styled.div`
  padding: 24px;
  background-color: ${BASE_CSS.color.white};
  border-radius: 0.75rem;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;
const Section = styled.div`
  margin-bottom: 24px;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
`;
