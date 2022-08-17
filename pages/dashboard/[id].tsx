import { NextSeo } from "next-seo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { EcDashboard } from "@/components/ecosystems/EntryPoint";
// application
import { getDashboard } from "@/architecture/application/getDashboard";
import { dashboardData } from "@/architecture/application/dashboardData";

const Id = ({
  conversionEventData,
  query,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo
        title="ダッシュボード | 民主主義のデジタル化を実現するアンケートフォーム【QuadraticVoting.jp】"
        description="QuadraticVoting.jpのダッシュボードページです。QuadraticVotingとは台湾デジタル大臣のオードリー・タン氏が紹介したことから、世界中に広がっています。今までの投票方法とは異なった手法で、少数派の選択肢の意見にも耳を傾け、多くの意見を尊重することが可能です。"
        openGraph={{
          title:
            "ダッシュボード | 民主主義のデジタル化を実現するアンケートフォーム【QuadraticVoting.jp】",
          description:
            "QuadraticVoting.jpのダッシュボードページです。QuadraticVotingとは台湾デジタル大臣のオードリー・タン氏が紹介したことから、世界中に広がっています。今までの投票方法とは異なった手法で、少数派の選択肢の意見にも耳を傾け、多くの意見を尊重することが可能です。",
        }}
      />
      <EcDashboard dashboard={conversionEventData} query={query} />
    </>
  );
};
export default Id;

// getServerSideProps→getInitialPropsをサーバサイドだけで実行するようにしたもの
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { createAcquiredInformation } = getDashboard(); // api
  const { conversion } = dashboardData(); // dashboardData整形
  const query: { id?: string } = context.query;
  // サーバーサイドでAPIを叩いてresponseを整形する

  if (!query.id) {
    return {
      props: {},
    };
  }

  const documentId: string = query.id;
  const response = await createAcquiredInformation(
    "event",
    documentId,
    "answer"
  );

  const conversionEventData = conversion(response!);
  return {
    props: {
      conversionEventData,
      query,
      ...(await serverSideTranslations(context.locale!, ["common"])),
    },
  };
};
