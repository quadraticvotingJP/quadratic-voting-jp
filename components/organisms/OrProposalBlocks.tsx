import { Card } from "@mui/material";
import React, { useEffect, useRef } from "react";

interface Props {
  cost: number;
  style: string;
  denominator: number;
}

// eslint-disable-next-line react/display-name
const OrProposalBlocks: React.FC<Props> = React.memo(
  ({ cost, style, denominator }) => {
    useEffect(() => {}, [cost]);

    return (
      <>
        <div className="fixed pl-2">
          <div className={style}>
            <p className="m-0">{cost + `/` + denominator}</p>
            <p className="text-xs">Credits</p>
          </div>
        </div>
      </>
    );
  }
);

export default OrProposalBlocks;
