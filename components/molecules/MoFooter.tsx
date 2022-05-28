import React from "react";
import { useTranslation } from "next-i18next";
// component
import { Container } from "@mui/material";
import { AtHref } from "@/components/atoms/EntryPoint";

// eslint-disable-next-line react/display-name
const MoFooter = React.memo(({}) => {
  const { t } = useTranslation("common");
  return (
    <Container className="bg-blue-900 p-6 m-0 max-w-full">
      <ul>
        <li className="text-white">
          <AtHref
            title={t("footer.gitHub")}
            link={t("footer.gitHubLink")}
            blank
          />
        </li>
        <li className="text-white">
          <AtHref
            title={t("footer.contact")}
            link={t("footer.contactLink")}
            blank
          />
        </li>
      </ul>
      <div className="text-white text-center">
        <AtHref title={t("footer.siteName")} link={t("footer.siteNameLink")} />
      </div>
      <div className="text-white text-center">
        <AtHref title={t("footer.license")} link={t("footer.licenseLink")} />
      </div>
    </Container>
  );
});
export default MoFooter;
