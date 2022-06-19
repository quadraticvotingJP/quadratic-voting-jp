import React from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
// component
import { AtHref } from "@/components/atoms/EntryPoint";

// eslint-disable-next-line react/display-name
export const MoHeader = React.memo(({}) => {
  const { t } = useTranslation("common");
  return (
    <Header>
      <Title title={t("header.siteName")} link={t("header.link")} />
    </Header>
  );
});

const Header = styled.div`
  position: fixed; /* ヘッダーを固定する */
  top: 0; /* 上部から配置の基準位置を決める */
  left: 0; /* 左から配置の基準位置を決める */
  width: 100%; /* ヘッダーの横幅を指定する */
  height: 64px; /* ヘッダーの高さを指定する */
  padding: 10px 20px; /* ヘッダー内側の余白を指定する(上下左右) */
  background-color: #2f9bff; /* ヘッダーの背景色を指定する */
  z-index: 100;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`;
const Title = styled(AtHref)`
  position: absolute; /* ContainerComponentのposition: relativeを参照 */
  top: 25%;
  color: white;
  font-size: 21px;
  margin: 0px;
`;
