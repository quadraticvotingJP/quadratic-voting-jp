import React from "react";
import { useTranslation } from "next-i18next";
// component
import { AtButton } from "@/components/atoms/AtButton";

export const PaTop = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <p className="text-red-400">{t("header.siteName")}</p>
      <a
        href="https://github.com/quadraticvotingJP/quadratic-voting-jp"
        rel="noopener noreferrer"
        target="_blank"
        className="text-red-400"
      >
        {t("unique.screen.top.pageTitle.title")}
      </a>
      <AtButton
        title={t("common.button.eventCreation")}
        disabled={false}
        size={t("common.buttonSize.large")}
      />
    </>
  );
};
