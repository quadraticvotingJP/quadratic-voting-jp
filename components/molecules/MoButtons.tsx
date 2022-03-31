import React from "react";
import { useTranslation } from "next-i18next";
// component
import { AtButton } from "@/components/atoms/EntryPoint";

interface Button {
  title: string;
  disabled: boolean;
  onClick: () => void;
}

type Props = {
  left: Button;
  right: Button;
};

// eslint-disable-next-line react/display-name
const MoButtons: React.FC<Props> = ({ left, right }) => {
  const { t } = useTranslation("common");
  return (
    <div className="flex justify-between">
      <AtButton
        className="bg-red-400	text-white w-full mr-5"
        title={left.title}
        onClick={left.onClick}
        disabled={left.disabled}
        size={t("common.buttonSize.large")}
      />
      <AtButton
        className="bg-indigo-400	text-white w-full "
        title={right.title}
        onClick={right.onClick}
        disabled={right.disabled}
        size={t("common.buttonSize.large")}
      />
    </div>
  );
};
export default MoButtons;
