import React from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
// component
import { Container } from "@mui/material";
import { AtHref } from "@/components/atoms/EntryPoint";

const Footer = styled(Container)`
  background-color: #2f9bff;
  padding: 1.5rem;
  margin: 0px;
  max-width: 100%;
`;

const Link = styled(AtHref)`
  color: white;
`;

const Copyright = styled.div`
  color: white;
  text-align: center;
`;

// eslint-disable-next-line react/display-name
const MoFooter = React.memo(({}) => {
  const { t } = useTranslation("common");
  return (
    <Footer maxWidth="xl">
      <Link title={t("footer.gitHub")} link={t("footer.gitHubLink")} blank />
      <Link title={t("footer.contact")} link={t("footer.contactLink")} blank />
      <Copyright>
        <Link title={t("footer.siteName")} link={t("footer.siteNameLink")} />
      </Copyright>
    </Footer>
  );
});
export default MoFooter;
