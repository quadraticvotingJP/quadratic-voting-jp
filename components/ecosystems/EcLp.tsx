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
  return (
    <>
      {RESPONSIVE.SIZE_SP ? (
        <SpSectionFirstView>
          <FirstViewTitle>{t("lp.firstView.title")}</FirstViewTitle>
          <FirstViewSubTitle>{t("lp.firstView.subTitle")}</FirstViewSubTitle>
          <AtImage
            src={images["spFirstView"]}
            alt="firstView"
            layout="intrinsic"
            width={326}
            height={241}
          />
        </SpSectionFirstView>
      ) : (
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
      )}

      <SectionIsQuadraticVoting id="isQuadraticVoting">
        <IsQuadraticVotingJustifyBetweenMaxWidth1000>
          <IsQuadraticVotingOverViewArea>
            <IsQuadraticVotingTitle>
              {RESPONSIVE.SIZE_SP ? (
                <>
                  {t("lp.isQuadraticVoting.spTitle")}
                  <br />
                  {t("lp.isQuadraticVoting.spSubTitle")}
                </>
              ) : (
                <>{t("lp.isQuadraticVoting.title")}</>
              )}
            </IsQuadraticVotingTitle>
            <IsQuadraticVotingSubTitle>
              {t("lp.isQuadraticVoting.subTitle")}
            </IsQuadraticVotingSubTitle>
            <IsQuadraticVotingOverview>
              {t("lp.isQuadraticVoting.overview")}
            </IsQuadraticVotingOverview>
            {!RESPONSIVE.SIZE_SP && (
              <IsQuadraticVotingJustifyCenterElement>
                <IsQuadraticVotingButton
                  title={t("common.button.startNow")}
                  disabled={false}
                  onClick={moveCreateEvent}
                  square={true}
                />
              </IsQuadraticVotingJustifyCenterElement>
            )}
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
          {RESPONSIVE.SIZE_SP && (
            <IsQuadraticVotingJustifyCenterElement>
              <IsQuadraticVotingButton
                title={t("common.button.startNow")}
                disabled={false}
                onClick={moveCreateEvent}
                square={true}
              />
            </IsQuadraticVotingJustifyCenterElement>
          )}
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
    </>
  );
};
export default EcLp;

// first view
const SectionFirstView = styled.section<{ image: string }>`
  padding: 185px 50px 50px 50px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat; /*?????????????????????????????????*/
  background-size: 100% 100%;
  background-color: ${BASE_CSS.color.main};
  object-fit: cover;
  background-position: center;
  background-size: cover;
  ${tab`
    padding: 100px 60px 100px 60px;
  `}
`;
const SpSectionFirstView = styled.section`
  background-color: ${BASE_CSS.color.main};
  object-fit: cover;
  padding: 100px 20px 100px 20px;
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
    font-size: 20px;
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
    margin-bottom: 37px;
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
  padding: 40px 0px 60px 0px;
  margin-bottom: 60px;
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
  font-size: 16px;
  font-weight: bold;
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
    margin-bottom: 20px;
    font-size: 18px;
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
    font-size: 16px;
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
    padding-bottom: 0px;
    margin-bottom: 40px;
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
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 32px;
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
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
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
  font-size: 60px;
  white-space: pre-wrap;
  margin-bottom: 16px;
  color: ${BASE_CSS.color.feature};
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
  margin-bottom: 80px;
  ${tab`
    margin-bottom: 140px;
  `}
  ${sp`
    padding: 40px 0px 60px 0px;
    margin-bottom: 60px;
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
  width: 262px;
  height: 100px;
  line-height: 100px;
  margin-right: 20px;
  background-color: ${BASE_CSS.color.white};
  border-radius: 0.75rem;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
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
    padding-bottom: 60px
  `}
`;
const StartNowMaxWidth1000 = styled.div<{ image: string }>`
  min-width: 1079px;
  min-height: 285px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat; /*?????????????????????????????????*/
  ${tab`
    width: 100%;
    min-width: 561px;
  `}
  ${sp`
    width: 100%;
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
    margin-top: 30px;
    font-size: 16px;
    margin-bottom: 70px;
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
