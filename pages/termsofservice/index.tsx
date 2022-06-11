import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
// component
import { EcTermsOfService } from "@/components/ecosystems/EntryPoint";
const Index = ({}) => {
  return (
    <>
      <NextSeo
        title="利用規約 ｜革命的な民主主義を実現するアンケートフォーム"
        description="アンケート作成ページ。"
      />
      <EcTermsOfService />
    </>
  );
};
export default Index;

// i18n
export const getStaticProps = async ({ locale = "ja" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
