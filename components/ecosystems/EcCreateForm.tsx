/**
 * @description イベント作成画面
 */
import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  utilsValidationRule,
  inputDateMaxCheck,
  inputDateMinCheck,
  optionCheck,
} from "@/utils/validation";
import UUID from "uuidjs";
import styled from "styled-components";
import { sp, tab } from "@/media";
// component
import { AtButton, AtLabel } from "@/components/atoms/EntryPoint";
import { OrCard, OrAccordion } from "@/components/organisms/EntryPoint";
import { MoLabelForm } from "@/components/molecules/EntryPoint";
import {
  H2,
  JustifyCenter,
  LabelArea,
  LabelTitle,
  OverView,
} from "@/components/shared/EntryPoint";
// architecture
import { routerPush } from "@/architecture/application/routing";
import { postEvent } from "@/architecture/application/postEvent";
import { getToday } from "@/architecture/application/getToday";

const EcCreateForm: React.FC = () => {
  const { t } = useTranslation("common");
  const { createEvent } = postEvent(); // api
  const { createDate } = getToday(); // 本日の日付
  const secretKey = UUID.generate(); // secretKeyの生成
  const [isEdit, setIsEdit] = useState<boolean>(false); // 編集モードかどうか
  const [id, setId] = useState<number>(1); // optionsのid
  const today = createDate();
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    setValue,
    reset,
    trigger,
    formState: { errors },
  } = useForm<EventValues>({
    defaultValues: {
      votes: 99,
      options: [],
      optionsTitle: "",
      publicationStartDate: today,
    },
  });

  const onSubmit: SubmitHandler<EventValues> = async (data: EventValues) => {
    // apiを叩く
    const document = await createEvent(data, "event", secretKey);
    routerPush(`/dashboard/${document.id}?secret=${secretKey}`);
    reset();
  };

  // 選択肢追加・編集
  const setOptions = (): void => {
    // 編集モードであれば解除
    if (isEdit) setIsEdit(false);
    const option = getValues(["optionsTitle", "optionsOverview", "optionsUrl"]);
    const title = option[0];
    const overview = option[1];
    const url = option[2];
    setValue("options", [
      ...getValues("options"),
      {
        id: id,
        title: title,
        overview: overview,
        url: url,
      },
    ]);
    // 値リセット
    setValue("optionsTitle", "");
    setValue("optionsOverview", "");
    setValue("optionsUrl", "");
    setId(id + 1);
  };

  // 選択肢削除
  const onClickDelete = (index: number): void => {
    // 削除対象以外の選択肢リストを作成
    const newOptions = getValues("options").filter(
      (option, idx) => idx !== index
    );
    // 値のセット
    setValue("options", newOptions);
    // リストの更新
    trigger("options");
  };

  // 選択肢編集
  const onClickEdit = (index: number): void => {
    setIsEdit(true);
    // 編集対象を見つける
    const editValues: any = getValues("options").find(
      (option, idx) => idx === index
    );
    // 編集dataをフォームにセット
    setValue("optionsTitle", editValues.title);
    setValue("optionsOverview", editValues.overview);
    setValue("optionsUrl", editValues.url);
    // 編集するため選択したリストを一度削除
    const newOptions = getValues("options").filter(
      (option, idx) => idx !== index
    );
    // リストの更新
    setValue("options", newOptions);
  };
  // scrollによる値変更禁止
  // https://github.com/mui/material-ui/issues/7960#issuecomment-1076959490
  const noScrolling = (event: any): void =>
    event.target instanceof HTMLElement && event.target.blur();

  return (
    <EcosystemArea>
      <H2>{t("pageTitle.create")}</H2>
      <form>
        {/* タイトル */}
        <OrCard>
          <MoLabelForm
            title={t("common.event.eventTitle.title")}
            overView={t("common.event.eventTitle.detail")}
            required={true}
            register={register("title", {
              required: utilsValidationRule.REQUIRED,
              maxLength: utilsValidationRule.MAX_LENGTH_40,
              minLength: utilsValidationRule.MIN_LENGTH_1,
            })}
            id="title"
            name="title"
            placeholder={t("common.event.eventTitle.placeholder")}
            disabled={false}
            type="text"
            error={errors.title}
          />
        </OrCard>
        <br />
        {/* 補足 */}
        <OrCard>
          <MoLabelForm
            title={t("common.event.overview.title")}
            overView={t("common.event.overview.detail")}
            required={true}
            register={register("overview", {
              required: utilsValidationRule.REQUIRED,
              maxLength: utilsValidationRule.MAX_LENGTH_240,
              minLength: utilsValidationRule.MIN_LENGTH_1,
            })}
            id="overview"
            name="overview"
            placeholder={t("common.event.overview.placeholder")}
            disabled={false}
            type="text"
            error={errors.overview}
          />
        </OrCard>
        <br />
        {/* 公開開始日 */}
        <OrCard>
          <MoLabelForm
            title={t("common.event.publicationStartDate.title")}
            overView={t("common.event.publicationStartDate.detail")}
            required={true}
            register={register("publicationStartDate", {
              required: utilsValidationRule.REQUIRED,
              validate: {
                value: (publicationStartDate) =>
                  inputDateMinCheck(
                    publicationStartDate,
                    getValues("publicationEndDate")
                  ),
              },
            })}
            min={today}
            id="publicationStartDate"
            name="publicationStartDate"
            placeholder={t("common.event.publicationStartDate.title")}
            disabled={false}
            type="datetime-local"
            error={errors.publicationStartDate}
          />
        </OrCard>
        <br />
        {/* 公開終了日 */}
        <OrCard>
          <MoLabelForm
            title={t("common.event.publicationEndDate.title")}
            overView={t("common.event.publicationEndDate.detail")}
            required={true}
            register={register("publicationEndDate", {
              required: utilsValidationRule.REQUIRED,
              validate: {
                value: (publicationEndDate) =>
                  inputDateMaxCheck(
                    publicationEndDate,
                    getValues("publicationStartDate")
                  ),
              },
            })}
            min={today}
            id="publicationEndDate"
            name="publicationEndDate"
            placeholder={t("common.event.publicationEndDate.title")}
            disabled={false}
            type="datetime-local"
            error={errors.publicationEndDate}
          />
        </OrCard>
        <br />
        {/* 参加者 */}
        <OrCard>
          <MoLabelForm
            title={t("common.event.participant.title")}
            overView={t("common.event.participant.detail")}
            required={true}
            register={register("participant", {
              required: utilsValidationRule.REQUIRED,
              max: utilsValidationRule.MAX_250,
              min: utilsValidationRule.MIN_2,
            })}
            id="participant"
            name="participant"
            placeholder={t("common.event.participant.placeholder")}
            disabled={false}
            type="number"
            error={errors.participant}
            onWheel={noScrolling}
          />
        </OrCard>
        <br />
        {/* 投票数 */}
        {/* <OrCard>
          <MoLabelForm
            title={t("common.event.votes.title")}
            overView={t("common.event.votes.detail")}
            required={true}
            register={register("votes", {
              required: utilsValidationRule.REQUIRED,
              max: utilsValidationRule.MAX_99,
              min: utilsValidationRule.MIN_1,
            })}
            id="votes"
            name="votes"
            placeholder={t("common.event.votes.placeholder")}
            disabled={false}
            type="number"
            error={errors.votes}
            onWheel={noScrolling}
          />
        </OrCard>
        <br /> */}
        {/* 選択肢作成 */}
        <OrCard>
          <>
            <LabelArea>
              <LabelTitle>
                <AtLabel
                  required={false}
                  title={t("common.event.createOption.formTitle")}
                />
              </LabelTitle>
              <OverView>{t("common.event.createOption.formDetail")}</OverView>
            </LabelArea>
            <Section>
              <MoLabelForm
                title={t("common.event.createOption.optionTitle")}
                required={true}
                register={register("optionsTitle")}
                id={"optionsTitle"}
                name={"optionsTitle"}
                type={"text"}
                placeholder={t("common.event.createOption.titlePlaceholder")}
                disabled={false}
                error={errors.optionsTitle}
                labelMark={false}
              />
            </Section>
            <Section>
              <MoLabelForm
                title={t("common.event.createOption.optionDetail")}
                required={false}
                register={register("optionsOverview")}
                id={"optionsOverview"}
                name={"optionsOverview"}
                type={"text"}
                placeholder={t("common.event.createOption.detailPlaceholder")}
                disabled={false}
                error={errors.optionsOverview}
                labelMark={false}
              />
            </Section>
            <Section>
              <MoLabelForm
                title={t("common.event.createOption.optionLink")}
                required={false}
                register={register("optionsUrl")}
                id={"optionsUrl"}
                name={"optionsUrl"}
                type={"url"}
                placeholder={t("common.event.createOption.linkPlaceholder")}
                disabled={false}
                error={errors.optionsUrl}
                labelMark={false}
              />
            </Section>
            <JustifyCenter>
              <AtButton
                title={
                  isEdit ? t("common.button.edit") : t("common.button.add")
                }
                disabled={watch("optionsTitle") === ""}
                onClick={setOptions}
                accent={true}
              />
            </JustifyCenter>
          </>
        </OrCard>
        <br />
        {/* 選択肢 */}
        <OrAccordion
          title={t("common.event.options.title")}
          required={true}
          options={getValues("options")}
          register={register("options", {
            validate: {
              value: () => optionCheck(getValues("options")),
            },
          })}
          id={"options"}
          name={"options"}
          type={"hidden"}
          placeholder={""}
          disabled={isEdit}
          readOnly={true}
          error={errors.options}
          onClickDelete={(index: number) => onClickDelete(index)}
          onClickEdit={(index: number) => onClickEdit(index)}
        />
        <br />
        <JustifyCenter>
          <AtButton
            title={t("common.button.eventCreation")}
            disabled={false}
            accent={true}
            type="button"
            onClick={() => handleSubmit(onSubmit)()}
          />
        </JustifyCenter>
      </form>
    </EcosystemArea>
  );
};
export default EcCreateForm;

const EcosystemArea = styled.div`
  margin-top: 4rem;
`;
const Section = styled.div`
  margin-bottom: 24px;
  ${tab`
  `}
  ${sp`
    margin-bottom: 14px;
  `}
`;
