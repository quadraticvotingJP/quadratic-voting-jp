import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { EcDashboard } from "@/components/ecosystems/EntryPoint";
// application
import { getDashboard } from "@/architecture/application/getDashboard";
import { dashboardData } from "@/architecture/application/dashboardData";

const Id = ({
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
  const query: { data?: string } = context.query;
  // サーバーサイドでAPIを叩いてresponseを整形する

  if (query.data) {
    const documentId: string = query.data;
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
      },
    };
  }
  console.log("☆☆not id☆☆");
  return {
    props: {
      query,
    },
  };
};
