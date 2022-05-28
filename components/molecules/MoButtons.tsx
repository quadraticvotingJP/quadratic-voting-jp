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
    <div className="flex justify-center">
      <AtButton
        className="hover:border-blue-200 hover:text-blue-200 w-full mr-5 text-base w-40 h-10 py-2 px-6 rounded-full border-2 border-blue-900 text-blue"
        title={left.title}
        onClick={left.onClick}
        disabled={left.disabled}
      />
      {/* 2つのButtonのサイズ感がずれるためクラスで流す */}
      <AtButton
        className="bg-blue-900 hover:bg-blue-300	text-white w-full text-base w-40 h-10 py-2 px-6 rounded-full"
        title={right.title}
        onClick={right.onClick}
        disabled={right.disabled}
      />
    </div>
  );
};
export default MoButtons;
