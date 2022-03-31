import React from "react";
// component
import { AtH2 } from "@/components/atoms/EntryPoint";

type Props = {
  title: string;
  molecule: string;
  denominator: string;
};

const MoProcess: React.FC<Props> = ({ title, molecule, denominator }) => {
  return (
    <>
      <div className="mb-4">
        <AtH2 title={title} />
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
