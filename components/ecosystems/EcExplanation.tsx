import React from "react";
import { useTranslation } from "next-i18next";
// component
import { AtAtag, AtButton } from "@/components/atoms/EntryPoint";

type Props = {
  className: string;
};
// eslint-disable-next-line react/display-name
const EcExplanation: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation("common");
  return (
    <div className={className}>
      <div className="mb-6">
        <div className="text-4xl mb-6">
          {t("unique.screen.top.pageTitle.title")}
        </div>
        <div>{t("unique.screen.top.pageTitle.detail")}</div>
      </div>
      <div className="mb-6">
        <div className="mb-3">{t("unique.screen.top.rule")}</div>
        <ul>
          <li>{t("unique.screen.top.ruleOne")}</li>
          <li>{t("unique.screen.top.ruleTwo")}</li>
          <li>{t("unique.screen.top.ruleThree")}</li>
        </ul>
      </div>
      <div className="mb-6">
        <ul>
          <li>
            参考文献：
            <AtAtag
              blank={true}
              title={t("unique.screen.top.referencesOne")}
              link={t("unique.screen.top.referencesLinkOne")}
            />
          </li>
          <li>
            参考文献：
            <AtAtag
              blank={true}
              title={t("unique.screen.top.referencesTwo")}
              link={t("unique.screen.top.referencesLinkTwo")}
            />
          </li>
        </ul>
      </div>
      <div>
        <AtButton
          title={t("common.button.eventCreation")}
          disabled={false}
          size={t("common.buttonSize.large")}
        />
      </div>
    </div>
  );
};
export default EcExplanation;
