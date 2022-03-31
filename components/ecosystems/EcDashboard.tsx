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
        contents={"次の都知事を選挙で決定致します。"}
      />
      <br />
      <OrCardText
        title={t("common.event.overview.title")}
        required={false}
        contents={"hogefuga"}
      />
    </>
  );
};
export default EcDashboard;
