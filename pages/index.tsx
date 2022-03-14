import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// component
import { MoHeader, MoFooter } from "@/components/molecules/EntryPoint";
import { PaTop } from "@/pages/PaTop";

/**
 * @description
 *  - Index.tsxファイルにはFooter,Routingを定義する
 * @todo
 *  - Footer, Routing 追加
 */
const Home: NextPage = ({}) => {
  return (
    <>
      <MoHeader />
      <PaTop />
      <MoFooter />
    </>
  );
};

export const getStaticProps = async ({ locale = "ja" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
