import React from "react";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
// component
import { EcExplanation } from "@/components/ecosystems/EcExplanation";
import { EcAdvertisement } from "@/components/ecosystems/EcAdvertisement";

export const PaTop = () => {
  return (
    <div className="flex">
      <EcAdvertisement className="w-1/5 bg-gray-400" />
      <EcExplanation className="w-full" />
      <EcAdvertisement className="w-1/5 bg-gray-400" />
    </div>
  );
};
