import React from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
import { BASE_CSS } from "@/utils/baseCss";
// component
import { AtHref } from "@/components/atoms/EntryPoint";
// GA
import { gaSetLogEvent } from "@/architecture/application/gaLogEvent";
import {
  FOOTER_CLICK_TWITTER,
  FOOTER_CLICK_PRIVACY_POLICY,
  FOOTER_CLICK_TERMS_OF_SERVICE,
  FOOTER_CLICK_CORY_RIGHT,
} from "@/architecture/domain/gaEventName";

const clickTwitter = (): void => gaSetLogEvent(FOOTER_CLICK_TWITTER);
const clickTermsOfService = (): void =>
  gaSetLogEvent(FOOTER_CLICK_TERMS_OF_SERVICE);
const clickPrivacyPolicy = (): void =>
  gaSetLogEvent(FOOTER_CLICK_PRIVACY_POLICY);
const clickCopyright = (): void => gaSetLogEvent(FOOTER_CLICK_CORY_RIGHT);

// eslint-disable-next-line react/display-name
export const MoFooter = React.memo(({}) => {
  const { t } = useTranslation("common");
  return (
    <Footer>
      <ul>
        <Li onClick={clickTwitter}>
          <AtHref
            title={t("footer.twitter")}
            link={t("footer.twitterLink")}
            blank
          />
        </Li>
        <Li onClick={clickTermsOfService}>
          <AtHref
            title={t("footer.termsOfService")}
            link={t("footer.termsOfServiceLink")}
            blank
          />
        </Li>
        <Li onClick={clickPrivacyPolicy}>
          <AtHref
            title={t("footer.privacyPolicy")}
            link={t("footer.privacyPolicyLink")}
            blank
          />
        </Li>
        <Copyright onClick={clickCopyright}>
          <p>{t("footer.siteName")}</p>
        </Copyright>
      </ul>
    </Footer>
  );
});

const Footer = styled.footer`
  position: absolute; /* ContainerComponentのposition: relativeを参照 */
  bottom: 0;
  width: 100%;
  background-color: ${BASE_CSS.color.main};
  margin: 0px;
  padding: 30px;
`;
const Li = styled.li`
  color: ${BASE_CSS.color.white};
`;
const Copyright = styled(Li)`
  display: flex;
  justify-content: center;
`;
