import React from "react";
// component
import { AtInputLabel } from "@/components/atoms/EntryPoint";
import { MoProcess } from "@/components/molecules/EntryPoint";
import { Card } from "@mui/material";

type Props = {
  // label
  labelTitle: string;
  // left
  leftTitle: string;
  leftMolecule: string;
  leftDenominator: string;
  // right
  rightTitle: string;
  rightMolecule: string;
  rightDenominator: string;
};

const OrCardProcess: React.FC<Props> = ({
  labelTitle,
  leftTitle,
  leftMolecule,
  leftDenominator,
  rightTitle,
  rightMolecule,
  rightDenominator,
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
              title={leftTitle}
              molecule={leftMolecule}
              denominator={leftDenominator}
            />
          </Card>
        </div>
        <div className="w-full">
          <Card className="p-3">
            <MoProcess
              title={rightTitle}
              molecule={rightMolecule}
              denominator={rightDenominator}
            />
          </Card>
        </div>
      </div>
    </Card>
  );
};
export default OrCardProcess;
