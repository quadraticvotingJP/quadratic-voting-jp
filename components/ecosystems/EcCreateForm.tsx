/**
 * @description イベント作成画面
 */
import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import {
  utilsValidationRule,
  inputDateMaxCheck,
  inputDateMinCheck,
} from "@/utils/validation";
import UUID from "uuidjs";
import styled from "styled-components";
import { sp, tab } from "@/media";
// component
import { AtButton, AtLabel } from "@/components/atoms/EntryPoint";
import { OrCard, OrOptionForms } from "@/components/organisms/EntryPoint";
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
    control,
    reset,
    formState: { errors },
  } = useForm<EventValues>({
    defaultValues: {
      votes: 99,
      publicationStartDate: today,
      options: [
        {
          id: id,
          title: "選択肢(必須)",
          overview: "補足(任意)",
          url: "参考URL(任意)",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "options",
  });

  const onSubmit: SubmitHandler<EventValues> = async (data: EventValues) => {
    console.log(data);
    // apiを叩く
    // const document = await createEvent(data, "event", secretKey);
    // routerPush(`/dashboard/${document.id}?secret=${secretKey}`);
    // reset();
  };

  // todo 未使用のコンポーネントは削除
  // todo 作成し終えたやつ選択肢はタイトルだけ表示

  // 選択肢追加
  const setOptions = () => {
    const newId = id + 1;
    setId(newId);
    append({
      id: newId,
      title: "",
      overview: "",
      url: "",
    });
  };
  // 選択肢削除
  const removeOption = (index: number) => remove(index);
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
            {fields.map((field, index) => (
              <>
                <OrCard key={field.id}>
                  <OrOptionForms
                    index={index}
                    register={register}
                    error={errors}
                    removeOption={removeOption}
                    getValues={getValues}
                    field={field}
                  />
                </OrCard>
                <br />
              </>
            ))}
            <br />
            <JustifyCenter>
              <AtButton
                title={t("common.button.add")}
                disabled={false}
                accent={true}
                type="button"
                onClick={setOptions}
              />
            </JustifyCenter>
          </>
        </OrCard>
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
