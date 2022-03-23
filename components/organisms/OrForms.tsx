import React from "react";
// component
import { AtInputLabel } from "@/components/atoms/EntryPoint";
import { MoForm } from "@/components/molecules/EntryPoint";
import { Card } from "@mui/material";

// hook
import { UseFormRegisterReturn } from "react-hook-form";

// interface
interface FormLabel {
  required: boolean;
  title: string;
  overView: string;
  focused?: boolean;
}

interface Form {
  // label
  title: string;
  required: boolean;
  // form
  register: UseFormRegisterReturn;
  placeholder: string;
  disabled: boolean;
  type: FormType;
  id: string;
  name: string;
  error: any;
  labelMark: boolean;
}

type Props = {
  label: FormLabel;
  form1: Form;
  form2: Form;
  form3: Form;
};

// eslint-disable-next-line react/display-name
const OrForms: React.FC<Props> = ({ label, form1, form2, form3 }) => {
  return (
    <>
      <Card className="p-6">
        <div className="mb-3">
          <div className="mb-1">
            <AtInputLabel
              required={label.required}
              focused={label.focused}
              title={label.title}
            />
          </div>
          {label.overView && <div>{label.overView}</div>}
        </div>
        <div className="mb-6">
          <MoForm
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
        </div>
        <div className="mb-6">
          <MoForm
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
        </div>
        <div className="mb-6">
          <MoForm
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
        </div>
      </Card>
    </>
  );
};
export default OrForms;
