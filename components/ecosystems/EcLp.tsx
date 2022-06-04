/* eslint-disable jsx-a11y/alt-text */
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
  return (
    <>
      <FirstView id="firstView" image={images[1].toString()}>
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

      <SectionIsQuadraticVoting id="isQuadraticVoting">
        <IsQuadraticVoting>
          <div>
            <IsQuadraticVotingTitle>
              {t("lp.isQuadraticVoting.title")}
            </IsQuadraticVotingTitle>
            <IsQuadraticVotingSubTitle>
              {t("lp.isQuadraticVoting.subTitle")}
            </IsQuadraticVotingSubTitle>
            <IsQuadraticVotingOverview>
              {t("lp.isQuadraticVoting.overview")}
            </IsQuadraticVotingOverview>
            <AtButton
              className="bg-black-900 hover:bg-black-900 hover:bg-opacity-80 text-white text-base w-40 h-12 py-2 px-6 w-64 rounded disabled:bg-slate-300"
              title={t("common.button.startNow")}
              disabled={false}
              onClick={moveCreateEvent}
            />
          </div>
          <div>
            <IsQuadraticVotingImageElement>
              <Text>{t("lp.isQuadraticVoting.conventional")}</Text>
              <AtImage
                src={images[2].toString()}
                alt="conventional"
                layout="intrinsic"
                width={261}
                height={174}
              />
            </IsQuadraticVotingImageElement>
            <IsQuadraticVotingImageElement>
              <Text>{t("lp.isQuadraticVoting.quadraticVoting")}</Text>
              <AtImage
                src={images[2].toString()}
                alt="quadraticVoting"
                layout="intrinsic"
                width={261}
                height={174}
              />
            </IsQuadraticVotingImageElement>
          </div>
        </IsQuadraticVoting>
      </SectionIsQuadraticVoting>
      <Section id="feature">
        <FeatureTitle>{t("lp.feature.title")}</FeatureTitle>
        <DirectionColElement>
          <FeatureElement>
            <AtImage
              src={images[2].toString()}
              alt="no1Feature"
              layout="intrinsic"
              width={360}
              height={240}
            />
            <FeatureOverview>
              <FeatureNo>{t("lp.feature.no1")}</FeatureNo>
              <Feature>{t("lp.feature.no1Feature")}</Feature>
              <Text>{t("lp.feature.no1Explanation")}</Text>
            </FeatureOverview>
          </FeatureElement>
          <FeatureElement>
            <FeatureOverview>
              <FeatureNo>{t("lp.feature.no2")}</FeatureNo>
              <Feature>{t("lp.feature.no2Feature")}</Feature>
              <Text>{t("lp.feature.no2Explanation")}</Text>
            </FeatureOverview>
            <AtImage
              src={images[2].toString()}
              alt="no2Feature"
              layout="intrinsic"
              width={360}
              height={240}
            />
          </FeatureElement>
          <FeatureElement>
            <AtImage
              src={images[2].toString()}
              alt="no3Feature"
              layout="intrinsic"
              width={360}
              height={240}
            />
            <FeatureOverview>
              <FeatureNo>{t("lp.feature.no3")}</FeatureNo>
              <Feature>{t("lp.feature.no3Feature")}</Feature>
              <Text>{t("lp.feature.no3Explanation")}</Text>
            </FeatureOverview>
          </FeatureElement>
        </DirectionColElement>
      </Section>

      <Section id="rule">
        <RuleTitle>{t("lp.rule.title")}</RuleTitle>
        <DirectionColElement>
          <RuleElement>
            <div>
              <AtImage
                src={images[3].toString()}
                alt="rule1"
                layout="intrinsic"
                width={229}
                height={194}
              />
              <RuleText>{t("lp.rule.rule1")}</RuleText>
            </div>
            <div>
              <AtImage
                src={images[3].toString()}
                alt="rule2"
                layout="intrinsic"
                width={229}
                height={194}
              />
              <RuleText>{t("lp.rule.rule2")}</RuleText>
            </div>
            <div>
              <AtImage
                src={images[3].toString()}
                alt="rule3"
                layout="intrinsic"
                width={229}
                height={194}
              />
              <RuleText>{t("lp.rule.rule3")}</RuleText>
            </div>
          </RuleElement>
          <RuleExampleElement>
            <div>
              <RuleExample1>{t("lp.rule.example1")}</RuleExample1>
              <RuleExample1>{t("lp.rule.example2")}</RuleExample1>
              <RuleExample2>{t("lp.rule.example3")}</RuleExample2>
              <AtHref
                blank={true}
                title={t("lp.rule.urlTitle")}
                link={t("lp.rule.url")}
                className="text-blue-500 text-sm"
              />
              <RuleExample3></RuleExample3>
              <AtButton
                className="bg-black-900 hover:bg-black-900 hover:bg-opacity-80 text-white text-base w-40 h-12 py-2 px-6 w-64 rounded disabled:bg-slate-300"
                title={t("common.button.startNow")}
                disabled={false}
                onClick={moveCreateEvent}
              />
            </div>
            <AtImage
              src={images[4].toString()}
              alt="point4"
              layout="intrinsic"
              width={400}
              height={400}
            />
          </RuleExampleElement>
        </DirectionColElement>
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
      <Section id="startNow">
        <StartNowTitle>{t("lp.startNow.title")}</StartNowTitle>
        <JustifyCenterElement>
          <AtButton
            className="bg-black-900 hover:bg-black-900 hover:bg-opacity-80 text-white text-base w-40 h-12 py-2 px-6 w-64 rounded disabled:bg-slate-300"
            title={t("common.button.startNow")}
            disabled={false}
            onClick={moveCreateEvent}
          />
        </JustifyCenterElement>
      </Section>
    </>
  );
};
export default EcLp;

// Base css
const Section = styled.section`
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
  justify-content: center;
`;
const JustifyBetweenElement = styled(FlexElement)`
  justify-content: space-between;
`;
const DirectionColElement = styled(FlexElement)`
  /* 上下中央揃え */
  flex-direction: column;
  align-items: center;
`;

// first view
const FirstView = styled.div<{ image: string }>`
  padding: 185px 100px 158px 100px;
  margin-bottom: 118px;
  background-image: url(${(props) => props.image});
`;
const FirstViewTitle = styled.p`
  white-space: pre-wrap;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 32px;
`;
const FirstViewSubTitle = styled.p`
  white-space: pre-wrap;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 158px;
`;

// isQuadraticVoting
const SectionIsQuadraticVoting = styled(Section)`
  display: flex;
  justify-content: center;
`;
const IsQuadraticVoting = styled(JustifyBetweenElement)`
  width: 70%;
`;
const IsQuadraticVotingTitle = styled(BaseTitle)`
  margin-bottom: 32px;
`;
const IsQuadraticVotingSubTitle = styled(BoldTitle)`
  margin-bottom: 80px;
`;
const IsQuadraticVotingOverview = styled(Text)`
  margin-bottom: 80px;
`;
const IsQuadraticVotingImageElement = styled.div`
  margin-bottom: 32px;
`;

// feature
const FeatureTitle = styled(BaseTitle)`
  margin-bottom: 80px;
  text-align: center;
`;
const FeatureElement = styled(JustifyBetweenElement)`
  width: 65%;
  margin-bottom: 48px;
`;
const FeatureOverview = styled.div`
  width: 390px;
`;
const FeatureNo = styled.p`
  font-size: 40px;
  white-space: pre-wrap;
  margin-bottom: 16px;
`;
const Feature = styled.p`
  font-size: 32px;
  white-space: pre-wrap;
  margin-bottom: 16px;
`;

// rule
const RuleTitle = styled(BaseTitle)`
  margin-bottom: 80px;
  text-align: center;
`;
const RuleElement = styled(JustifyBetweenElement)`
  width: 70%;
  margin-bottom: 80px;
`;
const RuleText = styled(Text)`
  text-align: center;
`;
const RuleExampleElement = styled(JustifyBetweenElement)`
  width: 70%;
`;
const RuleExample1 = styled(Text)`
  margin-bottom: 24px;
`;
const RuleExample2 = styled(Text)`
  margin-bottom: 0px;
`;
const RuleExample3 = styled.div`
  margin-bottom: 89px;
`;

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
