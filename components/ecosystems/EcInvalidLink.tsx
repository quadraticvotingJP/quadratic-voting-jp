import React from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";

// component
import { AtHref } from "@/components/atoms/EntryPoint";

const EcInvalidLink: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="flex justify-center content-center mb-6">
        <p>{t("common.systemError.invalidUrl")}</p>
      </div>
      <div className="flex justify-center content-center">
        <Link>
          <AtHref
            title={t("common.systemError.indexPushComment")}
            link={t("common.systemError.indexPushURL")}
          />
        </Link>
      </div>
    </>
  );
};

export default EcInvalidLink;

const Link = styled.div`
  color: #4c51bf;
`;
