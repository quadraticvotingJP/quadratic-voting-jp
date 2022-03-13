import React from "react";
import { useTranslation } from "next-i18next";
// component
import { AtButton } from "@/components/atoms/AtButton";
import { AtH2 } from "@/components/atoms/AtH2";
import { AtInputLabel } from "@/components/atoms/AtInputLabel";

export const PaTop = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <AtH2 title={t("unique.screen.top.pageTitle.title")} />
      <AtInputLabel title={t("common.button.eventCreation")} required={true} />
      <AtButton
        title={t("common.button.eventCreation")}
        disabled={false}
        size={t("common.buttonSize.large")}
      />
    </>
  );
};
