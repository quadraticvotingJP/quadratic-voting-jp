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
        className={{
          marginRight: "10px",
          width: "100%",
          color: "white",
          backgroundColor: "#FA0E0E !important",
          "&:hover": {
            backgroundColor: "#FA0E0E",
            opacity: "80%",
            color: "white",
          },
        }}
        title={left.title}
        onClick={left.onClick}
        disabled={left.disabled}
        size={t("common.buttonSize.large")}
      />
      {/* 2つのButtonのサイズ感がずれるためクラスで流す */}
      <AtButton
        className={{
          width: "100%",
          color: "white",
          backgroundColor: "#2F9BFF !important",
          "&:hover": {
            backgroundColor: "#2F9BFF",
            opacity: "80%",
            color: "white",
          },
        }}
        title={right.title}
        onClick={right.onClick}
        disabled={right.disabled}
        size={t("common.buttonSize.large")}
      />
    </div>
  );
};
export default MoButtons;
