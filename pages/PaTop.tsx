import React from "react";

// component
import {
  EcExplanation,
  EcAdvertisement,
} from "@/components/ecosystems/EntryPoint";

export const PaTop = () => {
  return (
    <div className="flex">
      <EcAdvertisement className="w-1/5 bg-gray-400" />
      <EcExplanation className="w-full" />
      <EcAdvertisement className="w-1/5 bg-gray-400" />
    </div>
  );
};
