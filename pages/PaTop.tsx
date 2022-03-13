import React from "react";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
// component
import { AtButton } from "@/components/atoms/AtButton";
import { AtH2 } from "@/components/atoms/AtH2";
import { AtAtag } from "@/components/atoms/AtAtag";
import { OrForm } from "@/components/organisms/OrForm";

export const PaTop = () => {
  const { t } = useTranslation("common");
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <>
      <AtAtag title={t("header.siteName")} link={t("common.link")}></AtAtag>
      <AtButton
        title={t("common.button.eventCreation")}
        disabled={false}
        size={t("common.buttonSize.large")}
      />
      <AtH2 title={t("unique.screen.top.pageTitle.title")} />
      <OrForm
        title={t("common.event.eventTitle.title")}
        required={true}
        overView={t("common.event.eventTitle.detail")}
        register={register("hoge", {
          required: "true",
        })}
        id="hoge"
        name="hoge"
        placeholder={t("common.event.eventTitle.detail")}
        disabled={false}
        disableUnderline={false}
        type="text"
        readOnly={false}
        error={errors.hoge}
      />
    </>
  );
};
