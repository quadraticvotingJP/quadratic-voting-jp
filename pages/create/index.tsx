import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
// component
import { EcCreateForm } from "@/components/ecosystems/EntryPoint";
const Index = ({}) => {
  return (
    <>
      <NextSeo
        title="アンケート作成 ｜革命的な民主主義を実現するアンケートフォーム"
        description="アンケート作成ページ。"
      />
      <EcCreateForm />
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
