// react
import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  utilsValidationRule,
  inputDateMaxCheck,
  inputDateMinCheck,
} from "@/utils/validation";
import styled from "styled-components";
import { BASE_CSS } from "@/utils/baseCss";
// library
import { ChartData } from "chart.js";
// Component
import { OrCard } from "@/components/organisms/EntryPoint";
import {
  MoLabelText,
  MoLabelForm,
  MoLabelBar,
  MoProcess,
} from "@/components/molecules/EntryPoint";
import { AtButton, AtLabel, AtIconButton } from "@/components/atoms/EntryPoint";
import {
  H1,
  JustifyCenter,
  LabelArea,
  LabelTitle,
  OverView,
} from "@/components/shared/EntryPoint";
// domain
import { chartData } from "@/architecture/domain/chart";
// application
import { downloadXlsx } from "@/architecture/application/downloadXlsx";
import { putEvent } from "@/architecture/application/putEvent";
import { getDashboard } from "@/architecture/application/getDashboard";
import { dashboardData } from "@/architecture/application/dashboardData";
import { getToday } from "@/architecture/application/getToday";
// GA
import { gaSetLogEvent } from "@/architecture/application/gaLogEvent";
import { DOWNLOAD_XLSX } from "@/architecture/domain/gaEventName";

type PublicationStartDate = "publicationStartDate";
type PublicationEndDate = "publicationEndDate";
type Edit = "Edit";
type Save = "Save";
interface Props {
  dashboard: Dashboard;
  query: { id: string; secret: string };
}
// eslint-disable-next-line react/display-name
const EcDashboard: React.FC<Props> = React.memo(({ dashboard, query }) => {
  const { t } = useTranslation("common");
  const { excelFile } = downloadXlsx(); // ダウンロード
  const { updateEvent } = putEvent(); // api
  const { createDate } = getToday(); // 本日の日付
  const { createAcquiredInformation } = getDashboard(); // api
  const { conversion } = dashboardData(); // dashboardData整形
  const adminUser: boolean = query.secret === dashboard.secretKey; // 閲覧権限
  const documentId = query.id;
  const [isPublicationStartDateEdit, setIsPublicationStartDateEdit] =
    useState<boolean>(false); // 編集ボタン制御
  const [isPublicationEndDateEdit, setIsPublicationEndDateEdit] =
    useState<boolean>(false); // 編集ボタン制御
  const today = createDate(); // 本日の日付
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<DashboardFormVales>({
    defaultValues: {
      publicationStartDate: dashboard.formPublicationStartDate,
      publicationEndDate: dashboard.formPublicationEndDate,
    },
  });
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
    is.publicationEndDateEdit && setIsPublicationEndDateEdit(true); // 終了日の編集開始
    // 開始日の編集終了
    if (is.publicationStartDateSave) {
      if (errors.publicationStartDate) return; // フォームにエラーがあれば弾く
      setIsPublicationStartDateEdit(false); // 編集ボタンの制御を切り替える
      handleSubmit(onSubmit)(); // 送信
    }
    // 終了日の編集終了
    if (is.publicationEndDateSave) {
      if (errors.publicationEndDate) return; // フォームにエラーがあれば弾く
      setIsPublicationEndDateEdit(false); // 編集ボタンの制御を切り替える
      handleSubmit(onSubmit)(); // 送信
    }
  };

  // グラフデータの生成
  const grafData: ChartData<"bar", number[], string> = chartData(
    dashboard.grafOptions,
    dashboard.grafEffectiveVotes,
    dashboard.grafPercentCredits
  );
  // 投票数・投票率ダウンロード
  const downloadXLSX = () => {
    excelFile(
      dashboard.grafOptions,
      dashboard.grafEffectiveVotes,
      dashboard.grafPercentCredits
    );
    gaSetLogEvent(DOWNLOAD_XLSX);
  };

  // 公開開始日・公開終了日の更新
  const onSubmit: SubmitHandler<DashboardFormVales> = async (
    data: DashboardFormVales
  ) => {
    // apiを叩く
    await updateEvent(data, "event", documentId);
    const response = await createAcquiredInformation(
      "event",
      documentId,
      "answer"
    );
    const conversionEventData = conversion(response!);
    const {
      detailPublicationStartDate,
      detailPublicationEndDate,
      formPublicationEndDate,
      formPublicationStartDate,
    } = conversionEventData;
    dashboard.formPublicationStartDate = formPublicationStartDate;
    dashboard.detailPublicationStartDate = detailPublicationStartDate;
    dashboard.formPublicationEndDate = formPublicationEndDate;
    dashboard.detailPublicationEndDate = detailPublicationEndDate;
  };

  /**
   * リンクのコピー
   */
  const linCory = (copyValue: string) => {
    navigator.clipboard.writeText(copyValue);
  };

  return (
    <EcosystemArea>
      <H1>
        {adminUser
          ? t("pageTitle.adminDashboard")
          : t("pageTitle.userDashboard")}
      </H1>
      <br />
      <OrCard>
        <>
          <LabelArea>
            <LabelTitle>
              <AtLabel
                required={false}
                title={t("common.dashboard.participantAndCredits.title")}
              />
            </LabelTitle>
            <OverView>
              {t("common.dashboard.participantAndCredits.overView")}
            </OverView>
          </LabelArea>
          <ProcessElement>
            <Participant>
              <ProcessCard>
                <MoProcess
                  title={t("common.dashboard.participant.title")}
                  molecule={dashboard.participantVotesMolecule}
                  denominator={dashboard.participantVotesDenominator}
                />
              </ProcessCard>
            </Participant>
            <Credits>
              <ProcessCard>
                <MoProcess
                  title={t("common.dashboard.credits.title")}
                  molecule={dashboard.digestionCreditsMolecule}
                  denominator={dashboard.digestionCreditsDenominator}
                />
              </ProcessCard>
            </Credits>
          </ProcessElement>
        </>
      </OrCard>
      <br />
      <OrCard>
        <>
          <Bar>
            <MoLabelBar
              height={dashboard.grafHeight}
              title={t(
                "common.dashboard.effectiveVotesAndPercentCredits.title"
              )}
              overView={t(
                "common.dashboard.effectiveVotesAndPercentCredits.overView"
              )}
              required={false}
              data={grafData}
            />
          </Bar>
          <JustifyCenter>
            <AtButton
              title={t("common.button.downloadXlsx")}
              disabled={false}
              onClick={downloadXLSX}
              accent={true}
            />
          </JustifyCenter>
        </>
      </OrCard>
      <br />
      <OrCard>
        <MoLabelText
          title={t("common.event.eventTitle.title")}
          required={false}
          contents={dashboard.title}
          showEdit={false}
          disabled={false}
        />
      </OrCard>
      <br />
      <OrCard>
        <MoLabelText
          title={t("common.event.overview.title")}
          required={false}
          contents={dashboard.overview}
          showEdit={false}
          disabled={false}
        />
      </OrCard>
      <br />
      {isPublicationStartDateEdit ? (
        // 公開開始日の修正
        <OrCard>
          <MoLabelForm
            showSave
            title={t("common.event.publicationStartDate.title")}
            defaultValue={dashboard.formPublicationStartDate}
            required={true}
            register={register("publicationStartDate", {
              required: utilsValidationRule.REQUIRED,
              validate: {
                // 開始日と終了日の比較validation
                value: (publicationStartDate) =>
                  inputDateMinCheck(
                    publicationStartDate,
                    getValues("publicationEndDate")
                  ),
              },
            })}
            min={today}
            error={errors.publicationStartDate}
            placeholder=""
            disabled={false}
            type="datetime-local"
            id="publicationStartDate"
            name="publicationStartDate"
            onClick={() => changeEditMode("publicationStartDate", "Save")}
          />
        </OrCard>
      ) : (
        <OrCard>
          <MoLabelText
            title={t("common.event.publicationStartDate.title")}
            required={false}
            contents={dashboard.detailPublicationStartDate}
            showEdit
            disabled={isPublicationEndDateEdit || !adminUser}
            onClick={() => changeEditMode("publicationStartDate", "Edit")}
          />
        </OrCard>
      )}
      <br />
      {isPublicationEndDateEdit ? (
        // 公開終了日の修正
        <OrCard>
          <MoLabelForm
            showSave
            title={t("common.event.publicationEndDate.title")}
            defaultValue={dashboard.formPublicationEndDate}
            required={true}
            register={register("publicationEndDate", {
              required: utilsValidationRule.REQUIRED,
              validate: {
                // 開始日と終了日の比較validation
                value: (publicationEndDate) =>
                  inputDateMaxCheck(
                    publicationEndDate,
                    getValues("publicationStartDate")
                  ),
              },
            })}
            min={today}
            placeholder=""
            disabled={false}
            type="datetime-local"
            id="publicationEndDate"
            name="publicationEndDate"
            onClick={() => changeEditMode("publicationEndDate", "Save")}
            error={errors.publicationEndDate}
          />
        </OrCard>
      ) : (
        <OrCard>
          <MoLabelText
            title={t("common.event.publicationEndDate.title")}
            required={false}
            contents={dashboard.detailPublicationEndDate}
            showEdit
            disabled={isPublicationStartDateEdit || !adminUser}
            onClick={() => changeEditMode("publicationEndDate", "Edit")}
          />
        </OrCard>
      )}
      <br />
      <OrCard>
        <MoLabelForm
          showCopy
          readOnly={true}
          title={t("common.dashboard.participantDashboard.title")}
          defaultValue={`${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/${dashboard.participantDashboardLink}`}
          required={false}
          placeholder=""
          disabled={false}
          type="text"
          id="participantDashboard"
          name="participantDashboard"
          onLinkCopy={() =>
            linCory(
              `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/${dashboard.participantDashboardLink}`
            )
          }
        />
      </OrCard>
      <br />
      {adminUser && (
        <OrCard>
          <MoLabelForm
            showCopy
            readOnly={true}
            title={t("common.dashboard.adminDashboard.title")}
            defaultValue={`${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/${dashboard.adminDashboardLink}`}
            required={false}
            placeholder=""
            disabled={false}
            type="text"
            id="adminDashboard"
            name="adminDashboard"
            onLinkCopy={() =>
              linCory(
                `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/${dashboard.adminDashboardLink}`
              )
            }
          />
        </OrCard>
      )}
      <br />
      {adminUser && (
        <OrCard>
          <>
            <Section>
              <MoLabelForm
                showCopy
                readOnly={true}
                title={t("common.dashboard.votersLink.title")}
                overView={t("common.dashboard.votersLink.detail")}
                defaultValue={dashboard.voterLinks}
                required={false}
                placeholder=""
                disabled={false}
                type="text"
                id={"votersLink"}
                name={"votersLink"}
                onLinkCopy={() => linCory(dashboard.voterLinks)}
              />
            </Section>
          </>
        </OrCard>
      )}
    </EcosystemArea>
  );
});
export default EcDashboard;

const EcosystemArea = styled.div`
  margin-top: 4rem;
`;
const Section = styled.div`
  margin-bottom: 24px;
`;
const Bar = styled.div`
  margin-bottom: 24px;
`;
const ProcessElement = styled.div`
  display: flex;
  justify-content: center;
`;
const Participant = styled.div`
  width: 100%;
  margin-right: 16px;
`;
const Credits = styled.div`
  width: 100%;
`;
const ProcessCard = styled.div`
  padding: 12px;
  background-color: ${BASE_CSS.color.white};
  border-radius: 0.75rem;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;
