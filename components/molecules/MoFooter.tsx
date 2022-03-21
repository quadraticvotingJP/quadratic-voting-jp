import React from "react";
import { useTranslation } from "next-i18next";
// component
import { Container } from "@mui/material";
import { AtAtag } from "@/components/atoms/EntryPoint";

// eslint-disable-next-line react/display-name
const MoFooter = React.memo(({}) => {
  const { t } = useTranslation("common");
  return (
    <Container maxWidth="xl" className="bg-indigo-400 p-6 m-0 max-w-full">
      <ul>
        <li className="text-white">
          <AtAtag title={t("footer.terms")} link={t("header.link")} />
        </li>
        <li className="text-white">
          <AtAtag title={t("footer.policy")} link={t("header.link")} />
        </li>
      </ul>
      <div className="text-white text-center">
        <AtAtag title={t("footer.siteName")} link={t("header.link")} />
      </div>
    </Container>
  );
});
export default MoFooter;
