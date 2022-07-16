/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
import { sp, tab } from "@/media";
import { BASE_CSS } from "@/utils/baseCss";
// architecture
import { routerPush } from "@/architecture/application/routing";

// component
import { AtHref, AtButton, AtImage } from "@/components/atoms/EntryPoint";

interface Image {
  [index: string]: string;
}
type Props = {
  readonly images: Image;
};

// eslint-disable-next-line react/display-name
const EcLp: React.FC<Props> = ({ images }) => {
  const { t } = useTranslation("common");
  const moveCreateEvent = (): void => routerPush("create");
  return (
    <>
      <SectionFirstView id="firstView" image={images["firstView"]}>
        <FirstViewTitle>{t("lp.firstView.title")}</FirstViewTitle>
        <FirstViewSubTitle>{t("lp.firstView.subTitle")}</FirstViewSubTitle>
        <FirstViewJustifyCenterElement>
          <FirstViewButton
            title={t("common.button.startNow")}
            disabled={false}
            onClick={moveCreateEvent}
            square={true}
          />
        </FirstViewJustifyCenterElement>
      </SectionFirstView>

      <SectionIsQuadraticVoting id="isQuadraticVoting">
        <IsQuadraticVotingJustifyBetweenMaxWidth1000>
          <IsQuadraticVotingOverViewArea>
            <IsQuadraticVotingTitle>
              {t("lp.isQuadraticVoting.title")}
            </IsQuadraticVotingTitle>
            <IsQuadraticVotingSubTitle>
              {t("lp.isQuadraticVoting.subTitle")}
            </IsQuadraticVotingSubTitle>
            <IsQuadraticVotingOverview>
              {t("lp.isQuadraticVoting.overview")}
            </IsQuadraticVotingOverview>
            <IsQuadraticVotingJustifyCenterElement>
              <IsQuadraticVotingButton
                title={t("common.button.startNow")}
                disabled={false}
                onClick={moveCreateEvent}
                square={true}
              />
            </IsQuadraticVotingJustifyCenterElement>
          </IsQuadraticVotingOverViewArea>
          <IsQuadraticVotingImageArea>
            <IsQuadraticVotingImageElement>
              <AtImage
                src={images["isQuadraticVotingJp"]}
                alt="quadraticVoting"
                layout="intrinsic"
                width={459}
                height={333}
              />
            </IsQuadraticVotingImageElement>
          </IsQuadraticVotingImageArea>
        </IsQuadraticVotingJustifyBetweenMaxWidth1000>
      </SectionIsQuadraticVoting>

      <SectionFeature id="feature">
        <FeatureDirectionColMaxWidth1000>
          <FeatureTitle>{t("lp.feature.title")}</FeatureTitle>
          <FeatureArea>
            <FeatureElement>
              <AtImage
                src={images["easy"]}
                alt="no1Feature"
                layout="intrinsic"
                width={400}
                height={240}
              />
              <FeatureOverview>
                <FeatureNo>{t("lp.feature.no1")}</FeatureNo>
                <Feature>{t("lp.feature.no1Feature")}</Feature>
                <FeatureText>{t("lp.feature.no1Explanation")}</FeatureText>
              </FeatureOverview>
            </FeatureElement>
            <FeatureElement2>
              <FeatureOverview>
                <FeatureNo>{t("lp.feature.no2")}</FeatureNo>
                <Feature>{t("lp.feature.no2Feature")}</Feature>
                <FeatureText>{t("lp.feature.no2Explanation")}</FeatureText>
              </FeatureOverview>
              <AtImage
                src={images["minority"]}
                alt="no2Feature"
                layout="intrinsic"
                width={400}
                height={240}
              />
            </FeatureElement2>
            <FeatureElement>
              <AtImage
                src={images["balance"]}
                alt="no3Feature"
                layout="intrinsic"
                width={400}
                height={240}
              />
              <FeatureOverview>
                <FeatureNo>{t("lp.feature.no3")}</FeatureNo>
                <Feature>{t("lp.feature.no3Feature")}</Feature>
                <FeatureText>{t("lp.feature.no3Explanation")}</FeatureText>
              </FeatureOverview>
            </FeatureElement>
          </FeatureArea>
        </FeatureDirectionColMaxWidth1000>
      </SectionFeature>

      <SectionRule id="rule">
        <RuleDirectionColMaxWidth1000>
          <RuleTitle>{t("lp.rule.title")}</RuleTitle>
          <RuleDirectionColElement>
            <RuleElement>
              <Rule>
                <AtImage
                  src={images["choices"]}
                  alt="rule1"
                  layout="intrinsic"
                  width={229}
                  height={194}
                />
                <RuleText>{t("lp.rule.rule1")}</RuleText>
              </Rule>
              <Rule>
                <AtImage
                  src={images["onlyOnce"]}
                  alt="rule2"
                  layout="intrinsic"
                  width={229}
                  height={194}
                />
                <RuleText>{t("lp.rule.rule2")}</RuleText>
              </Rule>
              <Rule>
                <AtImage
                  src={images["useUp"]}
                  alt="rule3"
                  layout="intrinsic"
                  width={229}
                  height={194}
                />
                <RuleText>{t("lp.rule.rule3")}</RuleText>
              </Rule>
            </RuleElement>
            <RuleExampleElement>
              <div>
                <RuleExample1>{t("lp.rule.example1")}</RuleExample1>
                <RuleExample1>{t("lp.rule.example2")}</RuleExample1>
                <RuleExample2>{t("lp.rule.example3")}</RuleExample2>
                <Link>
                  <AtHref
                    blank={true}
                    title={t("lp.rule.urlTitle")}
                    link={t("lp.rule.url")}
                  />
                </Link>
                <RuleExample3></RuleExample3>
                <RuleJustifyCenterElement>
                  <AtButton
                    title={t("common.button.startNow")}
                    disabled={false}
                    onClick={moveCreateEvent}
                    square={true}
                  />
                </RuleJustifyCenterElement>
              </div>
              <AtImage
                src={images["vote"]}
                alt="point4"
                layout="intrinsic"
                width={400}
                height={400}
              />
            </RuleExampleElement>
          </RuleDirectionColElement>
        </RuleDirectionColMaxWidth1000>
      </SectionRule>

      <SectionScene id="scene">
        <SceneDirectionColMaxWidth1000>
          <SceneTitle>{t("lp.scene.title")}</SceneTitle>
          <SceneDirectionColElement>
            <SceneListTop>
              <SceneText>{t("lp.scene.scene1")}</SceneText>
              <SceneText>{t("lp.scene.scene2")}</SceneText>
              <SceneText>{t("lp.scene.scene3")}</SceneText>
            </SceneListTop>
            <SceneListBottom>
              <SceneText>{t("lp.scene.scene4")}</SceneText>
              <SceneText>{t("lp.scene.scene5")}</SceneText>
            </SceneListBottom>
          </SceneDirectionColElement>
        </SceneDirectionColMaxWidth1000>
      </SectionScene>

      <SectionStartNow id="startNow">
        <StartNowMaxWidth1000>
          <StartNowTitle>{t("lp.startNow.title")}</StartNowTitle>
          <StartNowJustifyCenterElement>
            <AtButton
              title={t("common.button.startNow")}
              disabled={false}
              onClick={moveCreateEvent}
              square={true}
            />
          </StartNowJustifyCenterElement>
        </StartNowMaxWidth1000>
      </SectionStartNow>
    </>
  );
};
export default EcLp;

// first view
const SectionFirstView = styled.section<{ image: string }>`
  padding: 185px 50px 50px 50px;
  background-image: url(${(props) => props.image});
  background-size: 100% 100%;
  background-color: ${BASE_CSS.color.main};
  object-fit: cover;
  background-position: center;
  background-size: cover;
  ${tab`
    padding: 100px 60px 100px 60px;
  `}
  ${sp`
    padding: 100px 20px 100px 20px;
  `}
`;
const FirstViewTitle = styled.p`
  color: ${BASE_CSS.color.white};
  white-space: pre-wrap;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 32px;
  ${tab`
    font-size: 35px;
  `}
  ${sp`
    font-size: 25px;
  `}
`;
const FirstViewSubTitle = styled.p`
  color: ${BASE_CSS.color.white};
  white-space: pre-wrap;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 240px;
  ${tab`
    font-size: 25px;
  `}
  ${sp`
    font-size: 20px;
  `}
`;
const FirstViewJustifyCenterElement = styled.div`
  display: flex;
  justify-content: center;
`;
const FirstViewButton = styled(AtButton)`
  width: 318px;
  height: 53px;
`;

// isQuadraticVoting
const SectionIsQuadraticVoting = styled.section`
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  padding: 118px 0px 120px 0px;
  margin-bottom: 80px;
  ${tab`
    margin-bottom: 140px;
  `}
  ${sp`
    margin-bottom: 120px;
  `}
`;
const IsQuadraticVotingJustifyBetweenMaxWidth1000 = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 1025px;
  ${tab`
    min-width: 561px;
  `}
  ${sp`
    max-width: 560px;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;
const IsQuadraticVotingOverViewArea = styled.div`
  width: 60%;
  ${tab`
  `}
  ${sp`
    width: 80%;
    margin-bottom: 32px;
  `}
`;
const IsQuadraticVotingImageArea = styled.div`
  width: 40%;
  ${tab`
  `}
  ${sp`
    width: 80%;
  `}
`;
const IsQuadraticVotingTitle = styled.p`
  margin-bottom: 32px;
  font-size: 20px;
  white-space: pre-wrap;
  ${tab`
    font-size: 18px;
  `}
  ${sp`
    margin-bottom: 22px;
    font-size: 16px;
  `}
`;
const IsQuadraticVotingSubTitle = styled.p`
  margin-bottom: 32px;
  font-size: 24px;
  white-space: pre-wrap;
  ${tab`
    font-size: 22px;
  `}
  ${sp`
    font-weight: bold;
    margin-bottom: 20px;
    font-size: 16px;
  `}
`;
const IsQuadraticVotingOverview = styled.p`
  margin-bottom: 80px;
  font-size: 16px;
  white-space: pre-wrap;
  ${tab`
    font-size: 14px;
  `}
  ${sp`
    margin-bottom: 50px;
    font-size: 12px;
  `}
`;
const IsQuadraticVotingImageElement = styled.div`
  margin-bottom: 32px;
  ${tab`
  `}
  ${sp`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;
const IsQuadraticVotingJustifyCenterElement = styled.div`
  display: flex;
  justify-content: center;
`;
const IsQuadraticVotingButton = styled(AtButton)`
  width: 318px;
  height: 53px;
`;

// feature
const SectionFeature = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom: 120px;
  ${tab`
    margin-bottom: 140px;
  `}
  ${sp`
    margin-bottom: 120px;
  `}
`;
const FeatureDirectionColMaxWidth1000 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1025px;
  ${tab`
    min-width: 561px;
  `}
  ${sp`
    max-width: 560px;
    min-width: 320px;
  `}
`;
const FeatureTitle = styled.p`
  margin-bottom: 40px;
  text-align: center;
  font-size: 20px;
  white-space: pre-wrap;
  ${tab`
    font-size: 18px;
  `}
  ${sp`
    font-weight: bold;
    font-size: 24px;
  `}
`;
const FeatureArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 877px;
  ${tab`
    width: 100%;
  `}
  ${sp`
    width: 80%;
  `}
`;
const FeatureElement = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 48px;
  ${tab`
  `}
  ${sp`
    flex-direction: column;
    align-items: center;
  `}
`;
const FeatureElement2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 48px;
  ${tab`
  `}
  ${sp`
    flex-direction: column-reverse;
    align-items: center;
  `}
`;

const FeatureOverview = styled.div`
  width: 400px;
  ${tab`
  `}
  ${sp`
    width: 100%;
  `}
`;
const FeatureNo = styled.p`
  font-size: 40px;
  white-space: pre-wrap;
  margin-bottom: 16px;
  color: ${BASE_CSS.color.main};
  font-weight: bold;
  ${tab`
  `}
  ${sp`
    font-size: 30px;
    margin-bottom: 0px;
  `};
`;
const Feature = styled.p`
  font-size: 32px;
  white-space: pre-wrap;
  margin-bottom: 16px;
  ${tab`
  `}
  ${sp`
    font-size: 22px;
    margin-bottom: 0px;
  `}
`;
const FeatureText = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
  ${tab`
    font-size: 14px;
  `}
  ${sp`
    font-size: 12px;
  `}
`;

// rule
const SectionRule = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom: 120px;
  ${tab`
    margin-bottom: 140px;
  `}
  ${sp`
    margin-bottom: 120px;
  `}
`;
const RuleDirectionColMaxWidth1000 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1025px;
  ${tab`
    min-width: 561px;
  `}
  ${sp`
    max-width: 560px;
    min-width: 320px;
  `}
`;
const RuleTitle = styled.p`
  margin-bottom: 40px;
  text-align: center;
  font-size: 20px;
  white-space: pre-wrap;
  ${tab`
    font-size: 18px;
  `}
  ${sp`
    font-weight: bold;
    font-size: 24px;
  `}
`;
const RuleDirectionColElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RuleElement = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 80px;
  ${tab`
    min-width: 561px;
  `}
  ${sp`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  `}
`;
const Rule = styled.div`
  ${tab`
  `}
  ${sp`
    margin-bottom: 40px;
  `}
`;
const RuleText = styled.p`
  text-align: center;
  font-size: 16px;
  white-space: pre-wrap;
  ${tab`
    font-size: 14px;
  `}
  ${sp`
    font-size: 16px;
  `}
`;
const RuleExampleElement = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${tab`
  `}
  ${sp`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;
const RuleExample1 = styled.p`
  margin-bottom: 24px;
  font-size: 16px;
  white-space: pre-wrap;
  ${tab`
    font-size: 14px;
  `}
  ${sp`
    font-size: 14px;
  `}
`;
const RuleExample2 = styled.p`
  margin-bottom: 0px;
  font-size: 16px;
  white-space: pre-wrap;
  ${tab`
    font-size: 14px;
  `}
  ${sp`
    font-size: 14px;
  `}
`;
const Link = styled.div`
  color: ${BASE_CSS.link.color};
  font-size: 12px;
`;

const RuleExample3 = styled.div`
  margin-bottom: 89px;
  ${tab`
  `}
  ${sp`
    margin-bottom: 50px;
  `}
`;
const RuleJustifyCenterElement = styled.div`
  display: flex;
  justify-content: center;
  ${tab`
  `}
  ${sp`
    margin-bottom: 50px;
  `}
`;

// scene
const SectionScene = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom: 120px;
  ${tab`
    margin-bottom: 140px;
  `}
  ${sp`
    margin-bottom: 120px;
  `}
`;
const SceneDirectionColMaxWidth1000 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1025px;
  ${tab`
    min-width: 561px;
  `}
  ${sp`
    max-width: 560px;
    min-width: 320px;
  `}
`;
const SceneTitle = styled.p`
  margin-bottom: 40px;
  text-align: center;
  font-size: 20px;
  white-space: pre-wrap;
  ${tab`
    font-size: 18px;
    margin-bottom: 70px;
  `}
  ${sp`
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 15px;
  `}
`;
const SceneDirectionColElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SceneListTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 804px;
  margin-bottom: 51px;
  text-align: center;
  ${tab`
    width: 704px;
  `}
  ${sp`
    width: 100%;
    margin-bottom: 0px;
    flex-direction: column;
  `}
`;
const SceneListBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 475px;
  margin-bottom: 163px;
  text-align: center;
  ${tab`
    width: 375px;
  `}
  ${sp`
    width: 100%;
    margin-bottom: 0px;
    flex-direction: column;
  `}
`;
const SceneText = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
  ${tab`
    font-size: 14px;
  `}
  ${sp`
    font-size: 16px;
    margin-bottom: 10px;
  `}
`;

// startNow
const SectionStartNow = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom: 120px;
  ${tab`
    margin-bottom: 140px;
  `}
  ${sp`
    margin-bottom: 120px;
  `}
`;
const StartNowMaxWidth1000 = styled.div`
  min-width: 1025px;
  ${tab`
    min-width: 561px;
  `}
  ${sp`
    max-width: 560px;
    min-width: 320px;
  `}
`;
const StartNowTitle = styled.p`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 80px;
  text-align: center;
  ${tab`
    font-size: 32px;
  `}
  ${sp`
    font-size: 21px;
  `}
`;
const StartNowJustifyCenterElement = styled.div`
  display: flex;
  justify-content: center;
`;
