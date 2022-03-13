import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// component
import { PaTop } from "@/pages/PaTop";

/**
 * @description
 *  - Index.tsxファイルにはHeader,Footer,Routingを定義する
 * @todo
 *  - Header, Footer, Routing 追加
 */
const Home: NextPage = ({}) => {
  return (
    <>
      <PaTop />
    </>
  );
};

export const getStaticProps = async ({ locale = "ja" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
