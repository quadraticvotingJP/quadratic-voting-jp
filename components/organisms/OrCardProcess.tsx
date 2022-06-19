import React from "react";
// component
import { AtLabel } from "@/components/atoms/EntryPoint";
import { MoProcess } from "@/components/molecules/EntryPoint";
import { Card } from "@mui/material";

interface Process {
  readonly title: string;
  readonly molecule: string;
  readonly denominator: string;
}

type Props = {
  // label
  readonly labelTitle: string;
  readonly overView: string;
  // form
  readonly leftForm: Process;
  readonly rightForm: Process;
};

const OrCardProcess: React.FC<Props> = ({
  labelTitle,
  overView,
  leftForm,
  rightForm,
}) => {
  return (
    <Card className="p-6">
      <div className="mb-1">
        <AtLabel required={false} title={labelTitle} />
      </div>
      {overView && <div className="mb-3 whitespace-pre-wrap">{overView}</div>}
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
