import { Card } from "@mui/material";
import React, { useEffect, useRef } from "react";

interface Props {
  cost: number;
  color: string;
}

// eslint-disable-next-line react/display-name
const OrProposalBlocks: React.FC<Props> = React.memo(
  ({ cost, color = "bg-blue-900" }) => {
    useEffect(() => {}, [cost]);

    return (
      <>
        <Card
          className={`${color} top-64 py-12 px-12 right-44 text-white fixed text-center`}
        >
          <p className="m-0">{cost} Credits</p>
        </Card>
      </>
    );
  }
);

export default OrProposalBlocks;
