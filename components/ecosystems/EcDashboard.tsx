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

type PublicationStartDate = "publicationStartDate";
type PublicationEndDate = "publicationEndDate";
type Edit = "Edit";
type Save = "Save";

const EcDashboard: React.FC = () => {
  const { t } = useTranslation("common");
  const { download } = downloadXlsx();

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

  const grafData: ChartData<"bar", number[], string> = chartData(
    ["A", "B", "C"],
    [1, 2, 3],
    [11, 21, 31]
  );
  const downloadXLSX = () => download(["A", "B", "C"], [1, 2, 3], [11, 21, 31]);

  return (
    <>
      <AtH2 title={t("pageTitle.dashboard")} />
      <br />
      <OrCardProcess
        labelTitle={t("common.dashboard.participantAndEffectiveVotes.title")}
        leftForm={{
          title: t("common.dashboard.participant.title"),
          molecule: "",
          denominator: "",
        }}
        rightForm={{
          title: t("common.dashboard.effectiveVotes.title"),
          molecule: "",
          denominator: "",
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
        contents={""}
        showEdit={false}
        disabled={false}
      />
      <br />
      <OrCardText
        title={t("common.event.overview.title")}
        required={false}
        contents={""}
        showEdit={false}
        disabled={false}
      />
      <br />
      {isPublicationStartDateEdit ? (
        <OrCardForm
          showSave
          title={t("common.event.publicationStartDate.title")}
          defaultValue={""}
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
          contents={""}
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
          defaultValue={""}
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
          contents={""}
          showEdit
          disabled={isPublicationStartDateEdit}
          onClick={() => changeEditMode("publicationEndDate", "Edit")}
        />
      )}
      <br />
      <OrCardForm
        readOnly={true}
        title={t("common.dashboard.participantDashboard.title")}
        defaultValue={`http://localhost:4000/dashboard/${""}`}
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
        defaultValue={`http://localhost:4000/dashboard/${""}`}
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
        defaultValue={""}
        id={"votersLink"}
        name={"votersLink"}
        type="text"
        rows={10}
        maxRows={10}
        inputProps={{ readOnly: true }}
        button={{
          title: t("common.button.download"),
          disabled: false,
          size: "large",
          onClick: () => {},
        }}
      />
    </>
  );
};
export default EcDashboard;
