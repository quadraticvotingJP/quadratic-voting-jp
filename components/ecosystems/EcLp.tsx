import React from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
// architecture
import { routerPush } from "@/architecture/application/routing";

// component
import { AtHref, AtButton, AtImage } from "@/components/atoms/EntryPoint";

type Props = {
  images: string[];
};

// eslint-disable-next-line react/display-name
const EcLp: React.FC<Props> = ({ images }) => {
  const { t } = useTranslation("common");
  const moveCreateEvent = (): void => routerPush("create");
  console.log(images);

  return (
    <>
      <FirstView id="firstView">
        <FirstViewTitle>{t("lp.firstView.title")}</FirstViewTitle>
        <FirstViewSubTitle>{t("lp.firstView.subTitle")}</FirstViewSubTitle>
        <JustifyCenterElement>
          <AtButton
            className="bg-black-900 hover:bg-black-900 hover:bg-opacity-80 text-white text-base w-40 h-12 py-2 px-6 w-64 rounded disabled:bg-slate-300"
            title={t("common.button.startNow")}
            disabled={false}
            onClick={moveCreateEvent}
          />
        </JustifyCenterElement>
      </FirstView>
      <Section id="isQuadraticVoting">
        <FlexElement>
          <div className="mr-12">
            <BaseTitle>{t("lp.isQuadraticVoting.title")}</BaseTitle>
            <BoldTitle>{t("lp.isQuadraticVoting.subTitle")}</BoldTitle>
            <Text>{t("lp.isQuadraticVoting.overview")}</Text>
            <AtButton
              className="bg-black-900 hover:bg-black-900 hover:bg-opacity-80 text-white text-base w-40 h-12 py-2 px-6 w-64 rounded disabled:bg-slate-300"
              title={t("common.button.startNow")}
              disabled={false}
              onClick={moveCreateEvent}
            />
          </div>
          <div>
            <div>
              <p>{t("lp.isQuadraticVoting.conventional")}</p>
              <div className="mb-10  w-64 h-40 bg-gray-200"></div>
              {/* <img src="" alt="" /> */}
            </div>
            <div>
              <p>{t("lp.isQuadraticVoting.quadraticVoting")}</p>
              <div className="mb-10  w-64 h-40 bg-gray-200"></div>
              {/* <img src="" alt="" /> */}
            </div>
          </div>
        </FlexElement>
      </Section>
      <Section id="hoge">
        <div className="relative w-full h-full">
          <Image
            className="block"
            src={images[1].toString()}
            alt={"hoge"}
            layout={"fill"}
          />
        </div>
      </Section>
      <Section id="feature">
        <p className="mb-10 text-center">{t("lp.feature.title")}</p>
        <div className="flex flex-col items-center">
          <div className="w-3/4 flex justify-between">
            <div className="mb-10  w-64 h-40 bg-gray-200 mr-20"></div>
            {/* <img src="" alt="" /> */}
            <div>
              <p className="font-bold text-2xl mb-2">{t("lp.feature.no1")}</p>
              <p className="mb-2 text-2xl">{t("lp.feature.no1Feature")}</p>
              <p className="whitespace-pre-wrap">
                {t("lp.feature.no1Explanation")}
              </p>
            </div>
          </div>
          <div className="w-3/4 flex justify-between">
            <div className="mr-14">
              <p className="font-bold text-2xl mb-2">{t("lp.feature.no2")}</p>
              <p className="mb-2 text-2xl">{t("lp.feature.no2Feature")}</p>
              <p className="whitespace-pre-wrap">
                {t("lp.feature.no2Explanation")}
              </p>
            </div>
            <div className="mb-10  w-64 h-40 bg-gray-200"></div>
            {/* <img src="" alt="" /> */}
          </div>
          <div className="w-3/4 flex justify-between">
            <div className="mb-10  w-64 h-40 bg-gray-200 mr-20"></div>
            {/* <img src="" alt="" /> */}
            <div>
              <p className="font-bold text-2xl mb-2">{t("lp.feature.no3")}</p>
              <p className="mb-2 text-2xl">{t("lp.feature.no3Feature")}</p>
              <p className="whitespace-pre-wrap">
                {t("lp.feature.no3Explanation")}
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section id="rule">
        <p className="mb-10 text-center">{t("lp.rule.title")}</p>
        <div className="flex justify-between mb-10">
          <div>
            <div className="mb-4 w-64 h-40 bg-gray-200"></div>
            {/* <img src="" alt="" /> */}
            <p className="text-center whitespace-pre-wrap">
              {t("lp.rule.rule1")}
            </p>
          </div>
          <div>
            <div className="mb-4 w-64 h-40 bg-gray-200"></div>
            {/* <img src="" alt="" /> */}
            <p className="text-center whitespace-pre-wrap">
              {t("lp.rule.rule2")}
            </p>
          </div>
          <div>
            <div className="mb-4 w-64 h-40 bg-gray-200"></div>
            {/* <img src="" alt="" /> */}
            <p className="text-center whitespace-pre-wrap">
              {t("lp.rule.rule3")}
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <p className="mb-10 whitespace-pre-wrap">{t("lp.rule.example1")}</p>
            <p className="mb-10 whitespace-pre-wrap">{t("lp.rule.example2")}</p>
            <p className="whitespace-pre-wrap">{t("lp.rule.example3")}</p>
            <AtHref
              blank={true}
              title={t("lp.rule.urlTitle")}
              link={t("lp.rule.url")}
              className="text-blue-500 text-sm"
            />
            <div className="mb-10"></div>
            <AtButton
              className="bg-black-900 hover:bg-black-900 hover:bg-opacity-80 text-white text-base w-40 h-12 py-2 px-6 w-64 rounded disabled:bg-slate-300"
              title={t("common.button.startNow")}
              disabled={false}
              onClick={moveCreateEvent}
            />
          </div>
          <div>{/* 得票例 */}</div>
        </div>
      </Section>
      <Section id="scene">
        <SceneTitle>{t("lp.scene.title")}</SceneTitle>
        <DirectionColElement>
          <SceneListTop>
            <Text>{t("lp.scene.scene1")}</Text>
            <Text>{t("lp.scene.scene2")}</Text>
            <Text>{t("lp.scene.scene3")}</Text>
          </SceneListTop>
          <SceneListBottom>
            <Text>{t("lp.scene.scene4")}</Text>
            <Text>{t("lp.scene.scene5")}</Text>
          </SceneListBottom>
        </DirectionColElement>
      </Section>
      <BaseSection id="startNow">
        <StartNowTitle>{t("lp.startNow.title")}</StartNowTitle>
        <JustifyCenterElement>
          <AtButton
            className="bg-black-900 hover:bg-black-900 hover:bg-opacity-80 text-white text-base w-40 h-12 py-2 px-6 w-64 rounded disabled:bg-slate-300"
            title={t("common.button.startNow")}
            disabled={false}
            onClick={moveCreateEvent}
          />
        </JustifyCenterElement>
      </BaseSection>
    </>
  );
};
export default EcLp;

const Image = styled(AtImage)`
  display: block;
`;
// Base css
const BaseSection = styled.section`
  padding: 10px;
`;
const Section = styled(BaseSection)`
  margin-bottom: 160px;
`;
const BaseTitle = styled.p`
  font-size: 20px;
  white-space: pre-wrap;
`;
const BoldTitle = styled(BaseTitle)`
  font-size: 24px;
  white-space: pre-wrap;
`;
const Text = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
`;
const FlexElement = styled.div`
  display: flex;
`;
const JustifyCenterElement = styled(FlexElement)`
  /* 中央揃え */
  justify-content: center;
`;
const JustifyBetweenElement = styled(FlexElement)`
  /* 中央揃え */
  justify-content: space-between;
`;
const DirectionColElement = styled(FlexElement)`
  /* 上下中央揃え */
  flex-direction: column;
  align-items: center;
`;
const FirstView = styled.section`
  padding: 185px 0px 0px 100px;
  margin-bottom: 118px;
`;
// first view
const FirstViewTitle = styled.section`
  white-space: pre-wrap;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 32px;
`;
const FirstViewSubTitle = styled.section`
  white-space: pre-wrap;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 158px;
`;
// isQuadraticVoting
// feature
// rule
// scene
const SceneTitle = styled(BaseTitle)`
  margin-bottom: 80px;
  text-align: center;
`;
const SceneListTop = styled(JustifyBetweenElement)`
  width: 70%;
  margin-bottom: 51px;
  text-align: center;
`;
const SceneListBottom = styled(JustifyBetweenElement)`
  width: 50%;
  margin-bottom: 163px;
  text-align: center;
`;
// startNow
const StartNowTitle = styled.p`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 80px;
  text-align: center;
`;
