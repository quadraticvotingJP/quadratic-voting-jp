import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { EcDashboard } from "@/components/ecosystems/EntryPoint";
// application
import { getDashboard } from "@/architecture/application/getDashboard";
import { dashboardData } from "@/architecture/application/dashboardData";

const Id = ({
  locale,
  conversionEventData,
  query,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <EcDashboard dashboard={conversionEventData} query={query} />;
};
export default Id;

// getServerSideProps→getInitialPropsをサーバサイドだけで実行するようにしたもの
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { createAcquiredInformation } = getDashboard(); // api
  const { conversion } = dashboardData(); // dashboardData整形
  const language: string = context.locale!;
  const documentId: any = context.query[""]!;
  const query: ParsedUrlQuery = context.query;
  // サーバーサイドでAPIを叩いてresponseを整形する
  const response = await createAcquiredInformation(
    "event",
    documentId,
    "answer"
  );
  const conversionEventData = conversion(response!);
  return {
    props: {
      ...(await serverSideTranslations(language, ["common"])), // i18n
      conversionEventData,
      query,
    },
  };
};
