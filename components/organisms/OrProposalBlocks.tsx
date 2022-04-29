import { Card } from "@mui/material";
import React, { useEffect, useRef } from "react";

interface Props {
  cost: number;
}

const OrProposalBlocks: React.FC<Props> = React.memo(({ cost }) => {
  useEffect(() => {}, [cost]);

  return (
    <>
      <Card className="bg-blue-900 top-64 py-12 px-12 right-10 text-white fixed text-center">
        <p className="m-0">{cost}</p>
      </Card>
    </>
  );
});

export default OrProposalBlocks;
