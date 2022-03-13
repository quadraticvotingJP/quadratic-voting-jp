import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// component
import { MoHeader } from "@/components/molecules/MoHeader";
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
    </>
  );
};

export const getStaticProps = async ({ locale = "ja" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
