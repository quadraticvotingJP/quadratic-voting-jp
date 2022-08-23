import { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
// component
import { EcCreateForm } from "@/components/ecosystems/EntryPoint";
// GA
import { gaSetLogEvent } from "@/architecture/application/gaLogEvent";
import { CREATE_VISIT } from "@/architecture/domain/gaEventName";
const Index = ({}) => {
  useEffect(() => {
    gaSetLogEvent(CREATE_VISIT);
  }, []);
  return (
    <>
      <NextSeo
        title="アンケート作成 | 民主主義のデジタル化を実現するアンケートフォーム【QuadraticVoting.jp】"
        description="QuadraticVoting.jpのアンケート作成ページです。クアドラティックボーティングとは台湾デジタル大臣オードリー・タン氏が紹介したことから、世界中に広がっている投票方法です。QuadraticVoting.jpは少数派の選択肢の意見にも耳を傾け、多くの意見を尊重するクアドラティックボーティングを採用したアンケートフォームです。"
        openGraph={{
          title:
            "アンケート作成 | 民主主義のデジタル化を実現するアンケートフォーム【QuadraticVoting.jp】",
          description:
            "QuadraticVoting.jpのアンケート作成ページです。クアドラティックボーティングとは台湾デジタル大臣オードリー・タン氏が紹介したことから、世界中に広がっている投票方法です。QuadraticVoting.jpは少数派の選択肢の意見にも耳を傾け、多くの意見を尊重するクアドラティックボーティングを採用したアンケートフォームです。",
        }}
        noindex
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
