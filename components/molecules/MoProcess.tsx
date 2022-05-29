import React from "react";
// component
import { AtH2 } from "@/components/atoms/EntryPoint";

type Props = {
  readonly title: string;
  readonly molecule: string;
  readonly denominator: string;
};

const MoProcess: React.FC<Props> = ({ title, molecule, denominator }) => {
  return (
    <>
      <div className="mb-4">
        <AtH2 title={title} className="font-bold" />
      </div>
      <div className="flex justify-center">
        <p className="font-bold">{molecule}</p>
        <p className="mr-4 ml-4 font-bold">/</p>
        <p className="font-bold">{denominator}</p>
      </div>
    </>
  );
};
export default MoProcess;
