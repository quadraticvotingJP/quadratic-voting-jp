import React from "react";
import {
  UseFormRegister,
  UseFormGetValues,
  FieldArrayWithId,
} from "react-hook-form";
import { utilsValidationRule, optionCheck } from "@/utils/validation";

// components
import { JustifyCenter } from "@/components/shared/EntryPoint";
import {
  AtInput,
  AtErrorMessage,
  AtIconButton,
} from "@/components/atoms/EntryPoint";
import { useTranslation } from "next-i18next";

export interface Props {
  index: number;
  error: any;
  register: UseFormRegister<EventValues>;
  removeOption: (index: number) => void;
  getValues: UseFormGetValues<EventValues>;
  field: FieldArrayWithId<EventValues, "options", "id">;
}

export const OrOptionForms: React.FC<Props> = ({
  index,
  register,
  error,
  removeOption,
  getValues,
  field,
}) => {
  const { t } = useTranslation("common");
  console.log(field);

  return (
    <>
      {/* 選択肢 */}
      <AtInput
        register={register(`options.${index}.title` as const, {
          required: utilsValidationRule.REQUIRED,
          minLength: utilsValidationRule.MIN_LENGTH_1,
          validate: {
            value: () => optionCheck(getValues("options")),
          },
        })}
        id={`${index}.title`}
        type={"text"}
        disabled={false}
        placeholder={t("common.event.createOption.titlePlaceholder")}
      />
      <AtErrorMessage error={error?.options?.[index]?.title} />
      <br />
      {/* 補足 */}
      <AtInput
        register={register(`options.${index}.overview` as const)}
        id={`${index}.overview`}
        type={"text"}
        disabled={false}
        placeholder={t("common.event.createOption.detailPlaceholder")}
      />
      <AtErrorMessage error={error?.options?.[index]?.overview} />
      <br />
      {/* URL */}
      <AtInput
        register={register(`options.${index}.url` as const)}
        id={`${index}.url`}
        type={"text"}
        disabled={false}
        placeholder={t("common.event.createOption.linkPlaceholder")}
      />
      <AtErrorMessage error={error?.options?.[index]?.url} />
      <br />
      <JustifyCenter>
        {/* 最初の選択肢以外は削除ボタンを表示 */}
        {index !== 0 && (
          <AtIconButton
            showDelete
            onClick={() => removeOption(index)}
            size="small"
            disabled={index === 0}
          />
        )}
      </JustifyCenter>
    </>
  );
};
