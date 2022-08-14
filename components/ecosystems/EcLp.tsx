/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
import { sp, tab } from "@/media";
import { BASE_CSS } from "@/utils/baseCss";
// architecture
import { routerPush } from "@/architecture/application/routing";
// component
import { AtButton, AtImage } from "@/components/atoms/EntryPoint";
// hooks
import { useScreenSize } from "@/architecture/hooks/ screenSize";

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
  const RESPONSIVE = useScreenSize();
  const SIZE_PC_TAB = RESPONSIVE.SIZE_PC || RESPONSIVE.SIZE_TAB;
  return (
    <div data-testid="top-page">
      <SectionFirstView id="firstView">
        <FirstViewContentArea>
          <FirstViewTitleArea>
            <FirstViewTitle>{t("lp.firstView.title")}</FirstViewTitle>
            <FirstViewSubTitle>{t("lp.firstView.subTitle")}</FirstViewSubTitle>
          </FirstViewTitleArea>
          <AtImage
            src={images["spFirstView"]}
            alt="firstView"
            layout="intrinsic"
            width={RESPONSIVE.SIZE_PC ? 539 : RESPONSIVE.SIZE_TAB ? 439 : 326}
            height={RESPONSIVE.SIZE_PC ? 400 : RESPONSIVE.SIZE_TAB ? 300 : 241}
          />
        </FirstViewContentArea>
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
              <>{t("lp.isQuadraticVoting.title")}</>
            </IsQuadraticVotingTitle>
            <IsQuadraticVotingSubTitle>
              {t("lp.isQuadraticVoting.subTitle")}
            </IsQuadraticVotingSubTitle>
            <IsQuadraticVotingOverview>
              {t("lp.isQuadraticVoting.overview")}
            </IsQuadraticVotingOverview>
          </IsQuadraticVotingOverViewArea>
          <IsQuadraticVotingImageArea>
            <AtImage
              src={images["isQuadraticVotingJp"]}
              alt="quadraticVoting"
              layout="intrinsic"
              width={SIZE_PC_TAB ? 429 : 266}
              height={SIZE_PC_TAB ? 312 : 193}
            />
          </IsQuadraticVotingImageArea>
        </IsQuadraticVotingJustifyBetweenMaxWidth1000>
        <IsQuadraticVotingJustifyCenterElement>
          <IsQuadraticVotingButton
            title={t("common.button.startNow")}
            disabled={false}
            onClick={moveCreateEvent}
            square={true}
          />
        </IsQuadraticVotingJustifyCenterElement>
      </SectionIsQuadraticVoting>

      <SectionFeature id="feature">
        <FeatureDirectionColMaxWidth1000>
          <FeatureTitle>{t("lp.feature.title")}</FeatureTitle>
          <FeatureArea>
            <FeatureElement1>
              <AtImage
                src={images["easy"]}
                alt="no1Feature"
                layout="intrinsic"
                width={SIZE_PC_TAB ? 422.54 : 343.64}
                height={SIZE_PC_TAB ? 258 : 210}
              />
              <FeatureOverview>
                <FeatureNoArea>
                  <FeatureNo>{t("lp.feature.no1")}</FeatureNo>
                  <Feature>{t("lp.feature.no1Feature")}</Feature>
                </FeatureNoArea>
                <FeatureText>{t("lp.feature.no1Explanation")}</FeatureText>
              </FeatureOverview>
            </FeatureElement1>
            <FeatureElement2>
              <FeatureOverview>
                <FeatureNoArea>
                  <FeatureNo>{t("lp.feature.no2")}</FeatureNo>
                  <Feature>{t("lp.feature.no2Feature")}</Feature>
                </FeatureNoArea>
                <FeatureText>{t("lp.feature.no2Explanation")}</FeatureText>
              </FeatureOverview>
              <AtImage
                src={images["minority"]}
                alt="no2Feature"
                layout="intrinsic"
                width={SIZE_PC_TAB ? 422.54 : 343.64}
                height={SIZE_PC_TAB ? 258 : 210}
              />
            </FeatureElement2>
            <FeatureElement3>
              <AtImage
                src={images["balance"]}
                alt="no3Feature"
                layout="intrinsic"
                width={SIZE_PC_TAB ? 422.54 : 343.64}
                height={SIZE_PC_TAB ? 258 : 210}
              />
              <FeatureOverview>
                <FeatureNoArea>
                  <FeatureNo>{t("lp.feature.no3")}</FeatureNo>
                  <Feature>{t("lp.feature.no3Feature")}</Feature>
                </FeatureNoArea>
                <FeatureText>{t("lp.feature.no3Explanation")}</FeatureText>
              </FeatureOverview>
            </FeatureElement3>
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
                  width={142}
                  height={104}
                />
                <RuleText>{t("lp.rule.rule1supplement")}</RuleText>
              </Rule>
              <Rule>
                <Rule02>{t("lp.rule.rule2")}</Rule02>
                <RuleText>{t("lp.rule.rule2supplement")}</RuleText>
              </Rule>
              <Rule>
                <Rule03>{t("lp.rule.rule3")}</Rule03>
                <RuleText>{t("lp.rule.rule3supplement")}</RuleText>
              </Rule>
            </RuleElement>
            <RuleExampleElement>
              <div>
                <RuleExample1>{t("lp.rule.example1")}</RuleExample1>
                <RuleExample1>{t("lp.rule.example2")}</RuleExample1>
                <RuleExample2>{t("lp.rule.example3")}</RuleExample2>
                <RuleExample3></RuleExample3>
                {!RESPONSIVE.SIZE_SP && (
                  <RuleJustifyCenterElement>
                    <RuleButton
                      title={t("common.button.startNow")}
                      disabled={false}
                      onClick={moveCreateEvent}
                      square={true}
                    />
                  </RuleJustifyCenterElement>
                )}
              </div>
              <AtImage
                src={images["vote"]}
                alt="point4"
                layout="intrinsic"
                width={431}
                height={296}
              />
              {RESPONSIVE.SIZE_SP && (
                <RuleJustifyCenterElement>
                  <RuleButton
                    title={t("common.button.startNow")}
                    disabled={false}
                    onClick={moveCreateEvent}
                    square={true}
                  />
                </RuleJustifyCenterElement>
              )}
            </RuleExampleElement>
          </RuleDirectionColElement>
        </RuleDirectionColMaxWidth1000>
      </SectionRule>

      <SectionScene id="scene">
        <SceneDirectionColMaxWidth1000>
          <SceneTitle>{t("lp.scene.title")}</SceneTitle>
          <SceneDirectionColElement>
            <SceneListTop>
              <Card>
                <SceneText>{t("lp.scene.scene1")}</SceneText>
              </Card>
              <br />
              <Card>
                <SceneText>{t("lp.scene.scene2")}</SceneText>
              </Card>
              <br />
              <Card>
                <SceneText>{t("lp.scene.scene3")}</SceneText>
              </Card>
              <br />
            </SceneListTop>
            <SceneListBottom>
              <Card>
                <SceneText>{t("lp.scene.scene4")}</SceneText>
              </Card>
              <br />
              <Card>
                <SceneText>{t("lp.scene.scene5")}</SceneText>
              </Card>
            </SceneListBottom>
          </SceneDirectionColElement>
        </SceneDirectionColMaxWidth1000>
      </SectionScene>

      <SectionStartNow id="startNow">
        <StartNowMaxWidth1000 image={images["para"]}>
          <StartNowTitle>{t("lp.startNow.title")}</StartNowTitle>
          <StartNowJustifyCenterElement>
            <StartNowButton
              title={t("common.button.startNow")}
              disabled={false}
              onClick={moveCreateEvent}
              square={true}
            />
          </StartNowJustifyCenterElement>
        </StartNowMaxWidth1000>
      </SectionStartNow>
    </div>
  );
};
export default EcLp;

// first view
const SectionFirstView = styled.section`
  padding-top: 122px;
  min-height: 742px;
  background-color: ${BASE_CSS.color.main};
  ${tab`
    min-height: 642px;
  `}
  ${sp`
    padding: 0px 16px 80px 16px;
    min-height: 599px;
  `}
`;

const FirstViewContentArea = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 38px;
  ${tab`
  `}
  ${sp`
    flex-direction: column;
    margin-bottom: 40px;
  `}
`;

const FirstViewTitleArea = styled.div`
  margin-top: 58px;
  ${tab`
  `}
  ${sp`
    margin-top: 52px;
    margin-bottom: 38px;
  `}
`;

const FirstViewTitle = styled.p`
  color: ${BASE_CSS.color.white};
  white-space: pre-wrap;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 48px;
  line-height: 47px;
  ${tab`
    margin-bottom: 24px;
    font-size: 25px;
    line-height: 35px;
  `}
  ${sp`
    font-size: 20px;
    margin-bottom: 24px;
    line-height: 30px;
  `}
`;
const FirstViewSubTitle = styled.p`
  color: ${BASE_CSS.color.white};
  white-space: pre-wrap;
  font-size: 36px;
  font-weight: bold;
  ${tab`
    font-size: 30px;
    line-height: 40px;
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
  padding-bottom: 80px;
  ${tab`
  `};
  ${sp`
    padding: 40px 16px 40px 16px;
  `};
`;
const IsQuadraticVotingJustifyBetweenMaxWidth1000 = styled.div`
  min-width: 1025px;
  display: flex;
  justify-content: center;
  ${tab`
  `}
  ${sp`
    flex-direction: column;
  `}
`;
const IsQuadraticVotingOverViewArea = styled.div`
  margin-top: 80px;
  margin-right: 81px;
  ${tab`
  `}
  ${sp`
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 32px;
  `}
`;
const IsQuadraticVotingImageArea = styled.div`
  margin-top: 150px;
  ${tab`
  `}
  ${sp`
    margin-top: 0px;
    display: flex;
    justify-content: center;
    margin-bottom: 48px
  `}
`;
const IsQuadraticVotingTitle = styled.p`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
  white-space: pre-wrap;
  max-width: 520px;
  ${tab`
  `}
  ${sp`
    font-size: 16px;
  `}
`;
const IsQuadraticVotingSubTitle = styled.p`
  font-size: 32px;
  white-space: pre-wrap;
  max-width: 520px;
  line-height: 48px;
  margin-bottom: 20px;
  ${tab`
  `}
  ${sp`
    line-height: 36px;
    font-size: 24px;
  `}
`;
const IsQuadraticVotingOverview = styled.p`
  font-size: 18px;
  white-space: pre-wrap;
  max-width: 520px;
  line-height: 31px;
  ${tab`
  `};
  ${sp`
    line-height: 27.2px;
    font-size: 16px;
  `};
`;
const IsQuadraticVotingJustifyCenterElement = styled.div`
  ${tab`
  `};
  ${sp`
    display: flex;
    justify-content: center;
  `};
`;
const IsQuadraticVotingButton = styled(AtButton)`
  width: 318px;
  height: 53px;
`;

// feature
const SectionFeature = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 72px;
`;
const FeatureDirectionColMaxWidth1000 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1025px;
  position: relative;
  ${tab`
    min-width: 561px;
  `}
  ${sp`
    max-width: 560px;
    min-width: 320px;
  `}
`;
const FeatureTitle = styled.p`
  margin-bottom: 32px;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  white-space: pre-wrap;
  ${tab`
  `}
  ${sp`
  `}
`;
const FeatureArea = styled.div`
  min-height: 870px;
  ${tab`
    min-height: 720px;
    width: 100%;
  `}
  ${sp`
    width: 100%;
  `}
`;
const FeatureElement1 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 844px;
  position: absolute;
  top: 52px;
  left: 90px;
  ${tab`
    width: 644px;
    left: -60px;
  `}
  ${sp`
    position: static;
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 40px
  `}
`;
const FeatureElement2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 912px;
  position: absolute;
  top: 358px;
  left: 23px;
  ${tab`
    width: 712px;
    top: 291px;
    left: -60px;
  `}
  ${sp`
    position: static;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px
  `};
`;
const FeatureElement3 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 873px;
  position: absolute;
  top: 664px;
  left: 90px;
  ${tab`
    width: 673px;
    top: 551px;
    left: -85px;
  `}
  ${sp`
    position: static;
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 40px
  `}
`;

const FeatureOverview = styled.div`
  width: auto;
  ${tab`
  `}
  ${sp`
    width: 100%;
    margin-bottom: 16px;
  `}
`;
const FeatureNoArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  ${sp`
    margin-bottom: 16px;
  `};
`;
const FeatureNo = styled.p`
  font-size: 64px;
  line-height: 83px;
  margin-right: 16px;
  white-space: pre-wrap;
  color: ${BASE_CSS.color.feature};
  font-weight: bold;
  ${tab`
    font-size: 46px;
    line-height: 46px;
  `}
  ${sp`
    font-size: 32px;
    line-height: 32px;
  `};
`;
const Feature = styled.p`
  font-size: 40px;
  line-height: 42px;
  white-space: pre-wrap;
  ${tab`
    font-size: 31px;
    line-height: 33px;
  `}
  ${sp`
    font-size: 24px;
    line-height: 26px;
  `}
`;
const FeatureText = styled.p`
  font-size: 18px;
  line-height: 31px;
  white-space: pre-wrap;
  ${tab`
    font-size: 20px;
    line-height: 28px;
  `}
  ${sp`
    font-size: 16px;
    line-height: 24px;
  `}
`;

// rule
const SectionRule = styled.section`
  display: flex;
  justify-content: center;
  background-color: rgba(47, 155, 255, 0.1);
  padding: 118px 0px 120px 0px;
  ${tab`
    padding: 118px 0px 120px 0px;
  `}
  ${sp`
    padding: 40px 0px 60px 0px;
    margin-bottom: 0px;
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
const Rule02 = styled.p`
  height: 104px;
  line-height: 104px;
  font-size: 64px;
  text-align: center;
  color: ${BASE_CSS.color.feature};
`;
const Rule03 = styled.p`
  height: 104px;
  line-height: 104px;
  font-size: 64px;
  text-align: center;
  color: ${BASE_CSS.color.feature};
`;
const RuleTitle = styled.p`
  margin-bottom: 40px;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  white-space: pre-wrap;
  ${tab`
    font-size: 18px;
  `}
  ${sp`
    font-weight: bold;
    font-size: 16px;
  `}
`;
const RuleDirectionColElement = styled.div`
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
const RuleElement = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 48px;
  ${tab`
    min-width: 561px;
  `}
  ${sp`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0px;
  `}
`;
const Rule = styled.div`
  width: 308px;
  height: 234px;
  padding: 32px;
  background-color: ${BASE_CSS.color.white};
  border-radius: 0.75rem;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  text-align: center;
  ${tab`
  `}
  ${sp`
    margin-bottom: 40px;
  `}
`;
const RuleText = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 18px;
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
    font-size: 16px;
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
const RuleButton = styled(AtButton)`
  width: 318px;
  height: 53px;
`;

// scene
const SectionScene = styled.section`
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  padding: 80px 0px;
  ${tab`
  `}
  ${sp`
    padding: 40px 0px 60px 0px;
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
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  white-space: pre-wrap;
  ${tab`
    font-size: 18px;
    margin-bottom: 70px;
  `}
  ${sp`
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 24px;
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
  width: 882px;
  margin-bottom: 48px;
  text-align: center;
  ${tab`
    width: 782px;
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
  width: 572px;
  text-align: center;
  ${tab`
    width: 525px;
  `}
  ${sp`
    width: 100%;
    margin-bottom: 0px;
    flex-direction: column;
  `}
`;
const SceneText = styled.p`
  font-size: 18px;
  color: ${BASE_CSS.color.main};
  white-space: pre-wrap;
  ${tab`
    font-size: 14px;
  `}
  ${sp`
    font-size: 16px;
    margin-bottom: 10px;
  `}
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 262px;
  height: 100px;
  background-color: ${BASE_CSS.color.white};
  border-radius: 0.75rem;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  ${tab`
    width: 242px;
  `}
  ${sp`
  `}
`;

// startNow
const SectionStartNow = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom: 120px;
  padding-top: 46px;
  padding-bottom: 64px;
  ${tab`
  `}
  ${sp`
    padding-top: 42px;
    padding-bottom: 80px;
  `}
`;
const StartNowMaxWidth1000 = styled.div<{ image: string }>`
  min-width: 1079px;
  min-height: 285px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat; /*画像が繰り返すのを防ぐ*/
  ${tab`
    min-width: 800px;
    min-height: 211px;
  `}
  ${sp`
    min-width: 370px;
    min-height: 87px;
  `}
`;
const StartNowTitle = styled.p`
  font-size: 32px;
  line-height: 42px;
  font-weight: bold;
  margin-top: 74px;
  margin-bottom: 60px;
  text-align: center;
  ${tab`
  `}
  ${sp`
    font-size: 18px;
    margin-top: 18px;
  `}
`;
const StartNowJustifyCenterElement = styled.div`
  display: flex;
  justify-content: center;
`;
const StartNowButton = styled(AtButton)`
  width: 318px;
  height: 53px;
`;
