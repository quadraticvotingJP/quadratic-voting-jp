import React from "react";
import { useTranslation } from "next-i18next";
// component
import { AtH2 } from "@/components/atoms/EntryPoint";
import { MoButtons } from "@/components/molecules/EntryPoint";
import {
  OrCardText,
  OrCardProcess,
  OrCardForm,
} from "@/components/organisms/EntryPoint";

const EcDashboard: React.FC = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <AtH2 title={t("pageTitle.dashboard")} />
      <br />
      <OrCardProcess
        labelTitle={t("common.dashboard.participant.title")}
        leftTitle={t("common.dashboard.participant.title")}
        leftMolecule={"21"}
        leftDenominator={"39"}
        rightTitle={t("common.dashboard.votes.title")}
        rightMolecule={"3900"}
        rightDenominator={"1500"}
      />
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
      <br />
      <OrCardForm
        readOnly={true}
        title={t("common.dashboard.participantDashboard.title")}
        defaultValue="https://github.com/quadraticvotingJP/quadratic-voting-jp/projects/1"
        required={false}
        placeholder=""
        disabled={false}
        type="text"
        id="participantDashboard"
        name="participantDashboard"
      />
      <br />
      <OrCardForm
        readOnly={true}
        title={t("common.dashboard.adminDashboard.title")}
        defaultValue="https://github.com/quadraticvotingJP/quadratic-voting-jp/projects/1"
        required={false}
        placeholder=""
        disabled={false}
        type="text"
        id="adminDashboard"
        name="adminDashboard"
      />
      <br />
      <MoButtons
        leftTitle="-"
        leftOnClick={() => {}}
        leftDisabled={false}
        rightTitle="+"
        rightOnClick={() => {}}
        rightDisabled={false}
      />
      <br />
    </>
  );
};
export default EcDashboard;
