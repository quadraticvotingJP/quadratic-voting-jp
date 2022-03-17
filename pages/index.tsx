import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// component
import { MoHeader, MoFooter } from "@/components/molecules/EntryPoint";
import { PaTop } from "@/pages/PaTop";
import { EcAdvertisement } from "@/components/ecosystems/EntryPoint";

/**
 * @description
 *  - Index.tsxファイルにはFooter,Routingを定義する
 * @todo
 *  - Routing 追加
 */
const Home: NextPage = ({}) => {
  return (
    <>
      <MoHeader />
      <div className="flex">
        <EcAdvertisement className="w-1/5 bg-gray-400" />
        <PaTop />
        <EcAdvertisement className="w-1/5 bg-gray-400" />
      </div>
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
