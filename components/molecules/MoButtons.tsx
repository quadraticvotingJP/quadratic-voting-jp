import React from "react";
import { useTranslation } from "next-i18next";
// component
import { AtButton } from "@/components/atoms/EntryPoint";

interface Button {
  readonly title: string;
  readonly disabled: boolean;
  readonly onClick: () => void;
}

type Props = {
  readonly left: Button;
  readonly right: Button;
};

// eslint-disable-next-line react/display-name
const MoButtons: React.FC<Props> = ({ left, right }) => {
  const { t } = useTranslation("common");
  return (
    <div className="flex justify-between">
      <AtButton
        className="bg-red-900	hover:bg-red-900 text-white w-full mr-5"
        title={left.title}
        onClick={left.onClick}
        disabled={left.disabled}
        size={t("common.buttonSize.large")}
      />
      {/* 2つのButtonのサイズ感がずれるためクラスで流す */}
      <AtButton
        className="bg-blue-900 hover:bg-blue-900	text-white w-full "
        title={right.title}
        onClick={right.onClick}
        disabled={right.disabled}
        size={t("common.buttonSize.large")}
      />
    </div>
  );
};
export default MoButtons;
