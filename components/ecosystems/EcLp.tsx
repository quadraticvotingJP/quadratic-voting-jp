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
      <section id="firstView" className="bg-gray-200 px-20 py-32 mb-14">
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
            className="bg-black-900 hover:bg-black-900 hover:bg-opacity-80 text-white text-base w-40 h-12 py-2 px-6 w-64 rounded disabled:bg-slate-300"
            title={t("common.button.startNow")}
            disabled={false}
            onClick={moveCreateEvent}
          />
        </div>
      </section>
      <section id="isQuadraticVoting" className="p-12 mb-14">
        <div className="flex">
          <div className="mr-12">
            <p className="mb-10">{t("lp.isQuadraticVoting.title")}</p>
            <p className="mb-10 text-lg whitespace-pre-wrap">
              {t("lp.isQuadraticVoting.subTitle")}
            </p>
            <p className="mb-14 whitespace-pre-wrap">
              {t("lp.isQuadraticVoting.overview")}
            </p>
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
        </div>
      </section>
      <section id="feature" className="p-12 mb-14">
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
      </section>
      <section id="rule" className="p-12 mb-14">
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
      </section>
      <section id="scene" className="p-12 mb-14">
        <p className="mb-10 text-center">{t("lp.scene.title")}</p>
        <div className="flex flex-col items-center">
          <div className="w-3/4 flex justify-between mb-10">
            <p>{t("lp.scene.scene1")}</p>
            <p className="whitespace-pre-wrap">{t("lp.scene.scene2")}</p>
            <p>{t("lp.scene.scene3")}</p>
          </div>
          <div className="w-1/2 flex justify-between mb-10">
            <p>{t("lp.scene.scene4")}</p>
            <p>{t("lp.scene.scene5")}</p>
          </div>
        </div>
      </section>
      <section id="startNow" className="p-12">
        <p className="text-3xl font-bold mb-14 text-center">
          {t("lp.startNow.title")}
        </p>
        <div className="flex justify-center">
          <AtButton
            className="bg-black-900 hover:bg-black-900 hover:bg-opacity-80 text-white text-base w-40 h-12 py-2 px-6 w-64 rounded disabled:bg-slate-300"
            title={t("common.button.startNow")}
            disabled={false}
            onClick={moveCreateEvent}
          />
        </div>
      </section>
    </>
  );
};
export default EcLp;
