import type { NextPage } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/**
 * @description
 *  - Index.tsxファイルにはHeader,Footer,Routingを定義する
 * @todo
 *  - Header, Footer, Routing 追加
 */
const Home: NextPage = ({}) => {
  const { t } = useTranslation('common')

  return (
    <>
      <p className="text-red-400">{t("header.siteName")}</p>
      <a
        href="https://github.com/quadraticvotingJP/quadratic-voting-jp"
        rel="noopener noreferrer"
        target="_blank"
        className="text-red-400"
      >
        {t("unique.screen.top.pageTitle.title")}
      </a>
    </>
  );
};

export const getStaticProps = async ({ locale = "ja" }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Home;
