import React from "react";
import { useTranslation } from "next-i18next";
// component
import { AtButton } from "@/components/atoms/EntryPoint";

type Props = {
  leftTitle: string;
  leftOnClick: () => void;
  leftDisabled: boolean;
  rightTitle: string;
  rightOnClick: () => void;
  rightDisabled: boolean;
};

// eslint-disable-next-line react/display-name
const MoButtons: React.FC<Props> = ({
  leftTitle,
  leftOnClick,
  leftDisabled,
  rightTitle,
  rightOnClick,
  rightDisabled,
}) => {
  const { t } = useTranslation("common");
  return (
    <div className="flex justify-between">
      <AtButton
        className="bg-red-400	text-white w-full mr-5"
        title={leftTitle}
        onClick={leftOnClick}
        disabled={leftDisabled}
        size={t("common.buttonSize.large")}
      />
      <AtButton
        className="bg-indigo-400	text-white w-full "
        title={rightTitle}
        onClick={rightOnClick}
        disabled={rightDisabled}
        size={t("common.buttonSize.large")}
      />
    </div>
  );
};
export default MoButtons;
