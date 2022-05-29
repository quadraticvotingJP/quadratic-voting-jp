import React from "react";
import { useTranslation } from "next-i18next";
// component
import { Toolbar } from "@mui/material";
import { AtHref } from "@/components/atoms/EntryPoint";

// eslint-disable-next-line react/display-name
const MoFooter = React.memo(({}) => {
  const { t } = useTranslation("common");
  return (
    <Toolbar className="bg-blue-900 p-6 m-0 sticky">
      <ul className="w-full">
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
        <li className="text-white flex justify-center">
          <AtHref
            title={t("footer.siteName")}
            link={t("footer.siteNameLink")}
          />
        </li>
        <li className="text-white flex justify-center">
          <AtHref title={t("footer.license")} link={t("footer.licenseLink")} />
        </li>
      </ul>
    </Toolbar>
  );
});
export default MoFooter;
