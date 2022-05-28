import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
// architecture
import { routerPush } from "@/architecture/application/routing";

// component
import { AtHref, AtButton } from "@/components/atoms/EntryPoint";

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
      <section id="firstView">
        <div>
          <p className="whitespace-pre-wrap text-4xl font-bold mb-10">
            {t("lp.firstView.title")}
          </p>
          <p className="text-3xl font-bold mb-40">
            {t("lp.firstView.subTitle")}
          </p>
        </div>
        <div className="flex justify-center">
          <AtButton
            title={t("common.button.startNow")}
            disabled={false}
            onClick={moveCreateEvent}
          />
        </div>
      </section>
      <section id="isQuadraticVoting">
        <div className="flex">
          <div>
            <p>{t("lp.isQuadraticVoting.title")}</p>
            <p className="whitespace-pre-wrap">
              {t("lp.isQuadraticVoting.subTitle")}
            </p>
            <p className="whitespace-pre-wrap">
              {t("lp.isQuadraticVoting.overview")}
            </p>
            <AtButton
              title={t("common.button.startNow")}
              disabled={false}
              onClick={moveCreateEvent}
            />
          </div>
          <div>
            <div>
              <p>{t("lp.isQuadraticVoting.conventional")}</p>
              <img src="" alt="" />
            </div>
            <div>
              <p>{t("lp.isQuadraticVoting.quadraticVoting")}</p>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="feature">
        <p>{t("lp.feature.title")}</p>
        <div className="flex">
          <img src="" alt="" />
          <div>
            <p>{t("lp.feature.no1")}</p>
            <p>{t("lp.feature.no1Feature")}</p>
            <p className="whitespace-pre-wrap">
              {t("lp.feature.no1Explanation")}
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <p>{t("lp.feature.no2")}</p>
            <p>{t("lp.feature.no2Feature")}</p>
            <p className="whitespace-pre-wrap">
              {t("lp.feature.no2Explanation")}
            </p>
          </div>
          <img src="" alt="" />
        </div>
        <div className="flex">
          <img src="" alt="" />
          <div>
            <p>{t("lp.feature.no3")}</p>
            <p>{t("lp.feature.no3Feature")}</p>
            <p className="whitespace-pre-wrap">
              {t("lp.feature.no3Explanation")}
            </p>
          </div>
        </div>
      </section>
      <section id="rule">
        <p>{t("lp.rule.title")}</p>
        <div className="flex">
          <div>
            <img src="" alt="" />
            <p className="whitespace-pre-wrap">{t("lp.rule.rule1")}</p>
          </div>
          <div>
            <img src="" alt="" />
            <p className="whitespace-pre-wrap">{t("lp.rule.rule2")}</p>
          </div>
          <div>
            <img src="" alt="" />
            <p className="whitespace-pre-wrap">{t("lp.rule.rule3")}</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <p className="whitespace-pre-wrap">{t("lp.rule.example1")}</p>
            <p className="whitespace-pre-wrap">{t("lp.rule.example2")}</p>
            <p className="whitespace-pre-wrap">{t("lp.rule.example3")}</p>
            <AtButton
              title={t("common.button.startNow")}
              disabled={false}
              onClick={moveCreateEvent}
            />
            <AtHref
              blank={true}
              title={t("lp.rule.urlTitle")}
              link={t("lp.rule.url")}
              className="text-blue-500"
            />
          </div>
          <div>{/* 得票例 */}</div>
        </div>
      </section>
      <section id="scene">
        <div className="flex">
          <p>{t("lp.scene.scene1")}</p>
          <p className="whitespace-pre-wrap">{t("lp.scene.scene2")}</p>
          <p>{t("lp.scene.scene3")}</p>
        </div>
        <div className="flex">
          <p>{t("lp.scene.scene4")}</p>
          <p>{t("lp.scene.scene5")}</p>
        </div>
      </section>
      <section id="startNow">
        <p>{t("lp.startNow.title")}</p>
        <AtButton
          title={t("common.button.startNow")}
          disabled={false}
          onClick={moveCreateEvent}
        />
      </section>
    </>
  );
};
export default EcLp;
