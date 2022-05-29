import { Card } from "@mui/material";
import React, { useEffect, useRef } from "react";

interface Props {
  cost: number;
  color: string;
  denominator: number;
}

// eslint-disable-next-line react/display-name
const OrProposalBlocks: React.FC<Props> = React.memo(
  ({ cost, color = "bg-blue-900", denominator }) => {
    useEffect(() => {}, [cost]);

    return (
      <>
        <Card
          className={`${color} top-64 py-6 px-6 right-8 text-white fixed text-center`}
        >
          <p className="m-0">{cost + `/` + denominator}</p>
          <p className="text-xs">Credits</p>
        </Card>
      </>
    );
  }
);

export default OrProposalBlocks;
