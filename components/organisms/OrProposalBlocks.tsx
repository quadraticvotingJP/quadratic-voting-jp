import { Card } from "@mui/material";
import React, { useEffect, useRef } from "react";

interface Props {
  cost: number;
  style: string;
  denominator: number;
}

// eslint-disable-next-line react/display-name
const OrProposalBlocks: React.FC<Props> = React.memo(
  ({
    cost,
    style = "bg-blue-900 py-6 px-6 text-white text-center",
    denominator,
  }) => {
    useEffect(() => {}, [cost]);

    return (
      <>
        <div className="fixed pl-2">
          <Card className={style}>
            <p className="m-0">{cost + `/` + denominator}</p>
            <p className="text-xs">Credits</p>
          </Card>
        </div>
      </>
    );
  }
);

export default OrProposalBlocks;
