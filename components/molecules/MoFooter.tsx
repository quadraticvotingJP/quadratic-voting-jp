import React from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
// component
import { AtHref } from "@/components/atoms/EntryPoint";

// eslint-disable-next-line react/display-name
const MoFooter = React.memo(({}) => {
  const { t } = useTranslation("common");
  return (
    <Footer>
      <ul>
        <Li>
          <AtHref
            title={t("footer.contact")}
            link={t("footer.contactLink")}
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

export default MoFooter;

const Footer = styled.footer`
  position: absolute; /* ContainerComponentのposition: relativeを参照 */
  bottom: 0;
  width: 100%;
  background-color: #2f9bff;
  margin: 0px;
  padding: 30px;
`;
const Li = styled.li`
  color: white;
`;
const Copyright = styled(Li)`
  display: flex;
  justify-content: center;
`;
