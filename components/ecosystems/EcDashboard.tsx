import React from "react";
import { useTranslation } from "next-i18next";
// component
import { AtH2 } from "@/components/atoms/EntryPoint";
import { OrCardText } from "@/components/organisms/EntryPoint";

const EcDashboard: React.FC = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <AtH2 title={t("pageTitle.dashboard")} />
      <br />
      <OrCardText
        title={t("common.event.eventTitle.title")}
        required={false}
        contents={"次の都知事は誰？"}
        showEdit={false}
        disabled={false}
      />
      <br />
      <OrCardText
        title={t("common.event.overview.title")}
        required={false}
        contents={"都知事を決めるための選挙を行います"}
        showEdit={false}
        disabled={false}
      />
      <br />
      <OrCardText
        title={t("common.event.publicationStartDate.title")}
        required={false}
        contents={"2020月4月1日"}
        showEdit
        disabled={false}
      />
      <br />
      <OrCardText
        title={t("common.event.publicationEndDate.title")}
        required={false}
        contents={"2022月4月1日"}
        showEdit
        disabled={false}
      />
    </>
  );
};
export default EcDashboard;
