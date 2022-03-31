import React from "react";
// component
import { AtInputLabel } from "@/components/atoms/EntryPoint";
import { MoProcess } from "@/components/molecules/EntryPoint";
import { Card } from "@mui/material";

interface Process {
  title: string;
  molecule: string;
  denominator: string;
}

type Props = {
  // label
  labelTitle: string;
  // form
  leftForm: Process;
  rightForm: Process;
};

const OrCardProcess: React.FC<Props> = ({
  labelTitle,
  leftForm,
  rightForm,
}) => {
  return (
    <Card className="p-6">
      <div className="mb-3">
        <AtInputLabel required={false} focused={false} title={labelTitle} />
      </div>
      <div className="flex justify-between">
        <div className="mr-6 w-full">
          <Card className="p-3">
            <MoProcess
              title={leftForm.title}
              molecule={leftForm.molecule}
              denominator={leftForm.denominator}
            />
          </Card>
        </div>
        <div className="w-full">
          <Card className="p-3">
            <MoProcess
              title={rightForm.title}
              molecule={rightForm.molecule}
              denominator={rightForm.denominator}
            />
          </Card>
        </div>
      </div>
    </Card>
  );
};
export default OrCardProcess;
