import React from "react";
import { useTranslation } from "next-i18next";

const EcInvalidLink: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="flex justify-center content-center">
        <p>{t("common.systemError.invalidUrl")}</p>
      </div>
    </>
  );
};

export default EcInvalidLink;
