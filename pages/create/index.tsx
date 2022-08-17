import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
// component
import { EcCreateForm } from "@/components/ecosystems/EntryPoint";
const Index = ({}) => {
  return (
    <>
      <NextSeo
        title="アンケート作成 | 民主主義のデジタル化を実現するアンケートフォーム【QuadraticVoting.jp】"
        description="QuadraticVoting.jpのアンケート作成ページです。QuadraticVotingとは台湾デジタル大臣のオードリー・タン氏が紹介したことから、世界中に広がっています。今までの投票方法とは異なった手法で、少数派の選択肢の意見にも耳を傾け、多くの意見を尊重することが可能です。"
        openGraph={{
          title:
            "アンケート作成 | 民主主義のデジタル化を実現するアンケートフォーム【QuadraticVoting.jp】",
          description:
            "QuadraticVoting.jpのアンケート作成ページです。QuadraticVotingとは台湾デジタル大臣のオードリー・タン氏が紹介したことから、世界中に広がっています。今までの投票方法とは異なった手法で、少数派の選択肢の意見にも耳を傾け、多くの意見を尊重することが可能です。",
        }}
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
