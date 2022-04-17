import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { EcDashboard } from "@/components/ecosystems/EntryPoint";
// application
import { getDashboard } from "@/architecture/application/getDashboard";
import { dashboardData } from "@/architecture/application/dashboardData";

const Id = ({
  locale,
  conversionEventData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <EcDashboard dashboardData={conversionEventData} />;
};
export default Id;

// getServerSideProps→getInitialPropsをサーバサイドだけで実行するようにしたもの
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { createAcquiredInformation } = getDashboard(); // api
  const { conversion } = dashboardData(); // dashboardData整形
  const language: string = context.locale!;
  const documentId: string = context.query[""]!.toLocaleString();
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
    },
  };
};
