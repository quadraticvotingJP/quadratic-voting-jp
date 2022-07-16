import React from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
import { sp, tab } from "@/media";
import { BASE_CSS } from "@/utils/baseCss";
// component
import { AtHref, AtButton } from "@/components/atoms/EntryPoint";
// architecture
import { routerPush } from "@/architecture/application/routing";
// hooks
import { useScreenSize } from "@/architecture/hooks/ screenSize";

export type Props = {
  readonly isLandingPage: boolean;
};

// eslint-disable-next-line react/display-name
export const MoHeader = ({ isLandingPage }: Props) => {
  const RESPONSIVE = useScreenSize();
  const { t } = useTranslation("common");
  const moveCreateEvent = (): void => routerPush("create");
  const SIZE_PC_TAB = RESPONSIVE.SIZE_PC || RESPONSIVE.SIZE_TAB;
  return (
    <Header isLandingPage={isLandingPage}>
      {isLandingPage ? (
        <SpaceBetWeen>
          <Title isLandingPage={isLandingPage}>
            <AtHref title={t("header.siteName")} link={t("header.link")} />
          </Title>
          {SIZE_PC_TAB && (
            <>
              <Flex>
                <Flex>
                  <Text>{t("header.isQv")}</Text>
                  <Text>{t("header.feature")}</Text>
                  <Text>{t("header.rule")}</Text>
                  <Text>{t("header.scene")}</Text>
                </Flex>
                <AtButton
                  title={t("common.button.startNow")}
                  disabled={false}
                  onClick={moveCreateEvent}
                  square={true}
                />
              </Flex>
            </>
          )}
        </SpaceBetWeen>
      ) : (
        <Title isLandingPage={isLandingPage}>
          <AtHref title={t("header.siteName")} link={t("header.link")} />
        </Title>
      )}
    </Header>
  );
};

const Header = styled.div<Props>`
  position: fixed; /* ヘッダーを固定する */
  top: 0; /* 上部から配置の基準位置を決める */
  left: 0; /* 左から配置の基準位置を決める */
  width: 100%; /* ヘッダーの横幅を指定する */
  height: 64px; /* ヘッダーの高さを指定する */
  padding: 0px 40px;
  background-color: ${(props) =>
    props.isLandingPage
      ? BASE_CSS.color.white
      : BASE_CSS.color.main}; /* ヘッダーの背景色を指定する */
  z-index: 100;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  ${tab`
  `}
  ${sp`
    padding: 0px 20px;
  `}
`;
const Title = styled.div<Props>`
  height: 64px;
  line-height: 64px;
  color: ${(props) =>
    props.isLandingPage ? BASE_CSS.color.text : BASE_CSS.color.white};
  font-size: 21px;
  margin: 0px;
`;
const SpaceBetWeen = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Flex = styled.div`
  display: flex;
`;
const Text = styled.p`
  height: 64px;
  line-height: 64px;
  color: ${BASE_CSS.color.text};
  font-size: 16px;
  margin-right: 30px;
`;
