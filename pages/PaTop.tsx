import React from "react";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
// component
import { AtButton } from "@/components/atoms/AtButton";
import { AtH2 } from "@/components/atoms/AtH2";
import { AtAtag } from "@/components/atoms/AtAtag";
import { AtInput } from "@/components/atoms/AtInput";
import { AtInputLabel } from "@/components/atoms/AtInputLabel";

export const PaTop = () => {
  const { t } = useTranslation("common");
  const { register, handleSubmit, reset, watch } = useForm();
  return (
    <>
      <AtAtag title={t("header.siteName")} link={t("common.link")}></AtAtag>
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
