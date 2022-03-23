import React from "react";
import { useTranslation } from "next-i18next";

// architecture
import { routerPush } from "@/architecture/application/routing";

// component
import { AtAtag, AtButton } from "@/components/atoms/EntryPoint";

// eslint-disable-next-line react/display-name
const EcExplanation: React.FC = () => {
  const { t } = useTranslation("common");
  const moveCreateEvent = (): void => routerPush("create");

  return (
    <>
      <div className="mb-6">
        <div className="text-xl mb-10 text-center sm:text-4xl sm:mb-20">
          {t("unique.screen.top.pageTitle.title")}
        </div>
        <div>{t("unique.screen.top.pageTitle.detail")}</div>
      </div>
      <div className="mb-6">
        <div className="mb-1 font-bold">{t("unique.screen.top.rule")}</div>
        <ul>
          <li>{t("unique.screen.top.ruleOne")}</li>
          <li>{t("unique.screen.top.ruleTwo")}</li>
          <li>{t("unique.screen.top.ruleThree")}</li>
        </ul>
      </div>
      <div className="mb-6 text-sm sm:mb-12">
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
      <div className="flex justify-center">
        <AtButton
          title={t("common.button.eventCreation")}
          disabled={false}
          size={t("common.buttonSize.large")}
          onClick={moveCreateEvent}
        />
      </div>
    </>
  );
};
export default EcExplanation;