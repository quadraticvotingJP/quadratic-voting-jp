/** @description Ecosystem Vote Form */
import React from "react";
import { GetStaticPaths } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useForm, SubmitHandler } from "react-hook-form";
import { utilsValidationRule } from "@/utils/validation";
// component
import { AtH2 } from "@/components/atoms/EntryPoint";
import {
  OrCardText,
  OrVoteOptionCardForm,
} from "@/components/organisms/EntryPoint";

interface Props {
  item: EventVoteType;
}

const EcVoteForm: React.VFC<Props> = ({ item }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <AtH2 title={t("pageTitle.vote")} />
      <br />
      <OrCardText
        title={t("common.event.eventTitle.title")}
        required={false}
        contents={item.eventTitle}
        showEdit={false}
        disabled={false}
      />
      <br />
      <OrCardText
        title={t("common.event.overview.title")}
        required={false}
        contents={item.overview}
        showEdit={false}
        disabled={false}
      />
      <br />
      <OrCardText
        title={t("common.event.eventDeadline.title")}
        required={false}
        contents={`${item.publicationStartDate} ~ ${item.publicationEndDate}`}
        showEdit={false}
        disabled={false}
      />
      <br />
      <OrVoteOptionCardForm
        title={t("common.event.options.title")}
        options={item.options}
      />
      <br />
    </>
  );
};

export default EcVoteForm;
