import React from "react";
import styled from "styled-components";
import { BASE_CSS } from "@/utils/baseCss";
// component
import { AtLabel, AtButton } from "@/components/atoms/EntryPoint";
import { MoLabelForm } from "@/components/molecules/EntryPoint";

// hook
import { UseFormRegisterReturn } from "react-hook-form";

// interface
export interface FormLabel {
  readonly required: boolean;
  readonly title: string;
  readonly overView: string;
}

export interface Button {
  readonly disabled: boolean;
  readonly title: string;
  readonly onClick?: () => void;
}

export interface Form {
  // label
  readonly title: string;
  readonly required: boolean;
  // form
  readonly register: UseFormRegisterReturn;
  readonly placeholder: string;
  readonly disabled: boolean;
  readonly type: FormType;
  readonly id: string;
  readonly name: string;
  readonly error: any;
  readonly labelMark: boolean;
}

export type Props = {
  readonly label: FormLabel;
  readonly form1: Form;
  readonly form2: Form;
  readonly form3: Form;
  readonly button: Button;
};

// eslint-disable-next-line react/display-name
export const OrCardForms: React.FC<Props> = ({
  label,
  form1,
  form2,
  form3,
  button,
}) => {
  return (
    <>
      <Card>
        <LabelElement>
          <Label>
            <AtLabel required={label.required} title={label.title} />
          </Label>
          {label.overView && <OverView>{label.overView}</OverView>}
        </LabelElement>
        <Section>
          <MoLabelForm
            title={form1.title}
            required={form1.required}
            register={form1.register}
            id={form1.id}
            name={form1.name}
            type={form1.type}
            placeholder={form1.placeholder}
            disabled={form1.disabled}
            error={form1.error}
            labelMark={form1.labelMark}
          />
        </Section>
        <Section>
          <MoLabelForm
            title={form2.title}
            required={form2.required}
            register={form2.register}
            id={form2.id}
            name={form2.name}
            type={form2.type}
            placeholder={form2.placeholder}
            disabled={form2.disabled}
            error={form2.error}
            labelMark={form2.labelMark}
          />
        </Section>
        <Section>
          <MoLabelForm
            title={form3.title}
            required={form3.required}
            register={form3.register}
            id={form3.id}
            name={form3.name}
            type={form3.type}
            placeholder={form3.placeholder}
            disabled={form3.disabled}
            error={form3.error}
            labelMark={form3.labelMark}
          />
        </Section>
        <Button>
          <AtButton
            title={button.title}
            disabled={button.disabled}
            onClick={button.onClick}
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
const Section = styled.div`
  margin-bottom: 24px;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
`;
