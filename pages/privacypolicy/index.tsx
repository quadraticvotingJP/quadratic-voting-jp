import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
// component
import { EcPrivacyPolicy } from "@/components/ecosystems/EntryPoint";
const Index = ({}) => {
  return (
    <>
      <NextSeo
        title="プライバシーポリシー ｜革命的な民主主義を実現するアンケートフォーム"
        description="アンケート作成ページ。"
      />
      <EcPrivacyPolicy />
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
