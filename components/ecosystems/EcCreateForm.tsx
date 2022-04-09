import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { useForm, SubmitHandler } from "react-hook-form";
import { utilsValidationRule } from "@/utils/validation";
import UUID from "uuidjs";
// component
import { AtH2, AtButton } from "@/components/atoms/EntryPoint";
import {
  OrCardForm,
  OrCardForms,
  OrAccordion,
} from "@/components/organisms/EntryPoint";
// context
import { useLoadingContext } from "@/context/LoadingContext";
// architecture
import { routerPush } from "@/architecture/application/routing";
import { postEvent } from "@/architecture/application/postEvent";

const EcCreateForm: React.FC = () => {
  const { t } = useTranslation("common");
  const { setLoading } = useLoadingContext(); // loading
  const { createEvent } = postEvent(); // api
  const secretKey = UUID.generate(); // secretKeyの生成
  const [isEdit, setIsEdit] = useState<boolean>(false); // 編集モードかどうか
  const [id, setId] = useState<number>(1); // optionsのid
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<EventValues>({
    defaultValues: {
      options: [],
      optionsTitle: "",
    },
  });

  // 日付制御用に本日の日付を取得
  const newDate = new Date();
  const today = `${newDate.getFullYear()}-${(
    "0" +
    (newDate.getMonth() + 1)
  ).slice(-2)}-${("0" + newDate.getDate()).slice(-2)}T00:00`;

  const onSubmit: SubmitHandler<EventValues> = async (data: EventValues) => {
    console.log(data);

    // apiを叩く
    setLoading(true);
    const document = await createEvent(data, "event", secretKey);
    setLoading(false);
    routerPush(`/dashboard/${document.id}&secret=${secretKey}`);
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
    watch("options");
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

  return (
    <>
      <AtH2 title={t("pageTitle.creat")} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <OrCardForm
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
        <br />
        <OrCardForm
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
        <br />
        <OrCardForm
          title={t("common.event.publicationStartDate.title")}
          overView={t("common.event.publicationStartDate.detail")}
          required={true}
          register={register("publicationStartDate", {
            required: utilsValidationRule.REQUIRED,
          })}
          id="publicationStartDate"
          name="publicationStartDate"
          placeholder={t("common.event.publicationStartDate.title")}
          disabled={false}
          type="datetime-local"
          min={today}
          error={errors.publicationStartDate}
        />
        <br />
        <OrCardForm
          title={t("common.event.publicationEndDate.title")}
          overView={t("common.event.publicationEndDate.detail")}
          required={true}
          register={register("publicationEndDate", {
            required: utilsValidationRule.REQUIRED,
            validate: {
              // 開始日と終了日の比較validation
              value: (v) =>
                new Date(v) > new Date(getValues("publicationStartDate"))
                  ? true
                  : utilsValidationRule.DATE.message,
            },
          })}
          id="publicationEndDate"
          name="publicationEndDate"
          placeholder={t("common.event.publicationEndDate.title")}
          disabled={false}
          type="datetime-local"
          min={today}
          error={errors.publicationEndDate}
        />
        <br />
        <OrCardForm
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
        />
        <br />
        <OrCardForm
          title={t("common.event.votes.title")}
          overView={t("common.event.votes.detail")}
          required={true}
          register={register("votes", {
            required: utilsValidationRule.REQUIRED,
            max: utilsValidationRule.MAX_100,
            min: utilsValidationRule.MIN_1,
          })}
          id="votes"
          name="votes"
          placeholder={t("common.event.votes.placeholder")}
          disabled={false}
          type="number"
          error={errors.votes}
        />
        <br />
        <OrAccordion
          title={t("common.event.options.title")}
          required={false}
          options={getValues("options")}
          register={register("options", {
            validate: {
              // optionsが２つ以上あるかチェック
              value: () => {
                return getValues("options") !== undefined &&
                  getValues("options").length >= 2
                  ? true
                  : utilsValidationRule.OPTIONS_LENGTH_2.message;
              },
            },
          })}
          id={"options"}
          name={"options"}
          type={"hidden"}
          placeholder={""}
          disabled={isEdit}
          readOnly={true}
          error={errors.options}
          className={"hidden"}
          onClickDelete={(index: number) => onClickDelete(index)}
          onClickEdit={(index: number) => onClickEdit(index)}
        />
        <br />
        <OrCardForms
          label={{
            required: true,
            title: t("common.event.createOption.formTitle"),
            overView: t("common.event.createOption.formDetail"),
          }}
          form1={{
            title: t("common.event.createOption.optionTitle"),
            required: true,
            placeholder: t("common.event.createOption.titlePlaceholder"),
            register: {
              ...register("optionsTitle"),
            },
            disabled: false,
            type: "text",
            id: "optionsTitle",
            name: "optionsTitle",
            labelMark: false,
            error: errors.optionsTitle,
          }}
          form2={{
            title: t("common.event.createOption.optionDetail"),
            required: false,
            placeholder: t("common.event.createOption.detailPlaceholder"),
            register: {
              ...register("optionsOverview"),
            },
            disabled: false,
            type: "text",
            id: "optionsOverview",
            name: "optionsOverview",
            labelMark: false,
            error: errors.optionsOverview,
          }}
          form3={{
            title: t("common.event.createOption.optionLink"),
            required: false,
            placeholder: t("common.event.createOption.linkPlaceholder"),
            register: {
              ...register("optionsUrl"),
            },
            disabled: false,
            type: "url",
            id: "optionsUrl",
            name: "optionsUrl",
            labelMark: false,
            error: errors.optionsUrl,
          }}
          button={{
            title: isEdit ? t("common.button.edit") : t("common.button.add"),
            disabled: watch("optionsTitle") === "",
            size: t("common.buttonSize.large"),
            onClick: setOptions,
          }}
        />
        <br />
        <div className="flex justify-center">
          <AtButton
            type="submit"
            title={t("common.button.eventCreation")}
            disabled={false}
            size={t("common.buttonSize.large")}
          />
        </div>
      </form>
    </>
  );
};
export default EcCreateForm;
