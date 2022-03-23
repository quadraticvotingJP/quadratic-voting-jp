import React from "react";
import { useTranslation } from "next-i18next";
import { useForm, SubmitHandler, Validate } from "react-hook-form";
import { utilsValidationRule } from "@/utils/validation";
// component
import { AtH2, AtButton } from "@/components/atoms/EntryPoint";
import { OrForm } from "@/components/organisms/EntryPoint";
// architecture
import { routerPush } from "@/architecture/application/routing";

// type
type Inputs = {
  title: string;
  overview: string;
  publicationStartDate: string;
  publicationEndDate: string;
  participant: number;
  votes: number;
};

const EcCreateForm: React.FC = () => {
  const { t } = useTranslation("common");
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    console.log(data);
    // reset();
    // routerPush("create");
  };
  return (
    <>
      <AtH2 title={t("pageTitle.creat")} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <OrForm
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
        <OrForm
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
        <OrForm
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
          type="date"
          error={errors.publicationStartDate}
        />
        <br />
        <OrForm
          title={t("common.event.publicationEndDate.title")}
          overView={t("common.event.publicationEndDate.detail")}
          required={true}
          register={register("publicationEndDate", {
            required: utilsValidationRule.REQUIRED,
            validate: {
              value: (
                v:
                  | Validate<string>
                  | Record<string, Validate<string>>
                  | undefined
              ) =>
                new Date(v) > new Date(getValues("publicationStartDate"))
                  ? null
                  : utilsValidationRule.DATE.message,
            },
          })}
          id="publicationEndDate"
          name="publicationEndDate"
          placeholder={t("common.event.publicationEndDate.title")}
          disabled={false}
          type="date"
          error={errors.publicationEndDate}
        />
        <br />
        <OrForm
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
        <OrForm
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
        <AtButton
          title={t("common.button.eventCreation")}
          disabled={false}
          size={t("common.buttonSize.large")}
          onClick={handleSubmit(onSubmit)}
        />
      </form>
    </>
  );
};
export default EcCreateForm;
