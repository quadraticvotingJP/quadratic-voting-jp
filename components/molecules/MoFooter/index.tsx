import React from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
import { BASE_CSS } from "@/utils/baseCss";
// component
import { AtHref } from "@/components/atoms/EntryPoint";

// eslint-disable-next-line react/display-name
export const MoFooter = React.memo(({}) => {
  const { t } = useTranslation("common");
  return (
    <Footer>
      <ul>
        <Li>
          <AtHref
            title={t("footer.twitter")}
            link={t("footer.twitterLink")}
            blank
          />
        </Li>
        <Li>
          <AtHref
            title={t("footer.termsOfService")}
            link={t("footer.termsOfServiceLink")}
            blank
          />
        </Li>
        <Li>
          <AtHref
            title={t("footer.privacyPolicy")}
            link={t("footer.privacyPolicyLink")}
            blank
          />
        </Li>
        <Copyright>
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
