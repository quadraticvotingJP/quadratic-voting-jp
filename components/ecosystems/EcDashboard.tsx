// react
import React, { useState } from "react";
import { useTranslation } from "next-i18next";
// library
import { ChartData } from "chart.js";
// Component
import { AtH2 } from "@/components/atoms/EntryPoint";
import {
  OrCardText,
  OrCardProcess,
  OrCardForm,
  OrCardTextField,
  OrCardBar,
} from "@/components/organisms/EntryPoint";
// domain
import { chartData } from "@/architecture/domain/chart";
// application
import { downloadXlsx } from "@/architecture/application/downloadXlsx";
import { downloadTxt } from "@/architecture/application/downloadTxt";

type PublicationStartDate = "publicationStartDate";
type PublicationEndDate = "publicationEndDate";
type Edit = "Edit";
type Save = "Save";
interface Props {
  dashboardData: DashboardData;
}

const EcDashboard: React.FC<Props> = ({ dashboardData }) => {
  // todo：公開日終了日の更新
  // todo：参加者、管理者による閲覧権限
  const { t } = useTranslation("common");
  const { excelFile } = downloadXlsx();
  const { textFile } = downloadTxt();

  const [isPublicationStartDateEdit, setIsPublicationStartDateEdit] =
    useState<boolean>(false);
  const [isPublicationEndDateEdit, setIsPublicationEndDateEdit] =
    useState<boolean>(false);

  const changeEditMode = (
    form: PublicationStartDate | PublicationEndDate,
    type: Edit | Save
  ): void => {
    const select = {
      publicationStartDate: form === "publicationStartDate",
      publicationEndDate: form === "publicationEndDate",
      edit: type === "Edit",
      save: type === "Save",
    };
    const is = {
      publicationStartDateEdit: select.publicationStartDate && select.edit,
      publicationStartDateSave: select.publicationStartDate && select.save,
      publicationEndDateEdit: select.publicationEndDate && select.edit,
      publicationEndDateSave: select.publicationEndDate && select.save,
    };
    is.publicationStartDateEdit && setIsPublicationStartDateEdit(true); // 開始日の編集開始
    is.publicationStartDateSave && setIsPublicationStartDateEdit(false); // 開始日の編集終了
    is.publicationEndDateEdit && setIsPublicationEndDateEdit(true); // 終了日の編集開始
    is.publicationEndDateSave && setIsPublicationEndDateEdit(false); // 終了日の編集終了
  };

  // グラフデータの生成
  const grafData: ChartData<"bar", number[], string> = chartData(
    dashboardData.grafOptions,
    dashboardData.grafEffectiveVotes,
    dashboardData.grafPercentCredits
  );
  const downloadXLSX = () =>
    excelFile(
      dashboardData.grafOptions,
      dashboardData.grafEffectiveVotes,
      dashboardData.grafPercentCredits
    );
  const downloadTXT = () => textFile(dashboardData.voterLinks);

  return (
    <>
      <AtH2 title={t("pageTitle.dashboard")} />
      <br />
      <OrCardProcess
        labelTitle={t("common.dashboard.participantAndEffectiveVotes.title")}
        leftForm={{
          title: t("common.dashboard.participant.title"),
          molecule: dashboardData.participantVotesMolecule,
          denominator: dashboardData.participantVotesDenominator,
        }}
        rightForm={{
          title: t("common.dashboard.effectiveVotes.title"),
          molecule: dashboardData.effectiveVotesMolecule,
          denominator: dashboardData.effectiveVotesDenominator,
        }}
      />
      <br />
      <OrCardBar
        title={t("common.dashboard.effectiveVotesAndPercentCredits.title")}
        required={false}
        data={grafData}
        button={{
          title: t("common.button.downloadXlsx"),
          disabled: false,
          size: "large",
          onClick: downloadXLSX,
        }}
      />
      <br />
      <OrCardText
        title={t("common.event.eventTitle.title")}
        required={false}
        contents={dashboardData.title}
        showEdit={false}
        disabled={false}
      />
      <br />
      <OrCardText
        title={t("common.event.overview.title")}
        required={false}
        contents={dashboardData.overview}
        showEdit={false}
        disabled={false}
      />
      <br />
      {isPublicationStartDateEdit ? (
        <OrCardForm
          showSave
          title={t("common.event.publicationStartDate.title")}
          defaultValue={dashboardData.formPublicationStartDate}
          required={true}
          placeholder=""
          disabled={false}
          type="datetime-local"
          id="publicationStartDate"
          name="publicationStartDate"
          onClick={() => changeEditMode("publicationStartDate", "Save")}
        />
      ) : (
        <OrCardText
          title={t("common.event.publicationStartDate.title")}
          required={false}
          contents={dashboardData.detailPublicationStartDate}
          showEdit
          disabled={isPublicationEndDateEdit}
          onClick={() => changeEditMode("publicationStartDate", "Edit")}
        />
      )}
      <br />
      {isPublicationEndDateEdit ? (
        <OrCardForm
          showSave
          title={t("common.event.publicationEndDate.title")}
          defaultValue={dashboardData.formPublicationEndDate}
          required={true}
          placeholder=""
          disabled={false}
          type="datetime-local"
          id="publicationEndDate"
          name="publicationEndDate"
          onClick={() => changeEditMode("publicationEndDate", "Save")}
        />
      ) : (
        <OrCardText
          title={t("common.event.publicationEndDate.title")}
          required={false}
          contents={dashboardData.detailPublicationEndDate}
          showEdit
          disabled={isPublicationStartDateEdit}
          onClick={() => changeEditMode("publicationEndDate", "Edit")}
        />
      )}
      <br />
      <OrCardForm
        readOnly={true}
        title={t("common.dashboard.participantDashboard.title")}
        defaultValue={`http://localhost:4000/dashboard/id?=${dashboardData.participantDashboardLink}`}
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
        defaultValue={`http://localhost:4000/dashboard/id?=${dashboardData.adminDashboardLink}`}
        required={false}
        placeholder=""
        disabled={false}
        type="text"
        id="adminDashboard"
        name="adminDashboard"
      />
      <br />
      <OrCardTextField
        title={t("common.dashboard.votersLink.title")}
        required={false}
        overView={t("common.dashboard.votersLink.detail")}
        defaultValue={dashboardData.voterLinks}
        id={"votersLink"}
        name={"votersLink"}
        type="text"
        rows={10}
        maxRows={10}
        inputProps={{ readOnly: true }}
        button={{
          title: t("common.button.downloadTxt"),
          disabled: false,
          size: "large",
          onClick: downloadTXT,
        }}
      />
    </>
  );
};
export default EcDashboard;
