import React from "react";
import { useTranslation } from "next-i18next";

// component
import { AtHref } from "@/components/atoms/EntryPoint";

const EcInvalidLink: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="flex justify-center content-center mb-6">
        <p>{t("common.systemError.invalidUrl")}</p>
      </div>
      <div className="flex justify-center content-center">
        <AtHref
          title={t("common.systemError.indexPushComment")}
          link={t("common.systemError.indexPushURL")}
          className="text-blue-500"
        />
      </div>
    </>
  );
};

export default EcInvalidLink;
