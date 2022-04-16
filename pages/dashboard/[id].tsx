import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  GetStaticPaths,
} from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { EcDashboard } from "@/components/ecosystems/EntryPoint";
// application
import { getDashboard } from "@/architecture/application/getDashboard";
import { dashboardData } from "@/architecture/application/dashboardData";

const Id = ({
  locale,
  eventData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <EcDashboard />;
};
export default Id;

// getServerSideProps→getInitialPropsをサーバサイドだけで実行するようにしたもの
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { createAcquiredInformation } = getDashboard(); // api
  const { conversion } = dashboardData(); // dashboardData整形

  const language: string = context.locale!;
  const prams: string = context.query.id!.toLocaleString();
  const documentId: string = prams.substring(0, prams.indexOf("&secret="));

  const response = await createAcquiredInformation(
    "event",
    documentId,
    "answer"
  );
  // これをサーバー側で処理する？？？
  console.log(conversion(response!));
  const conversionEventData = conversion(response!);

  return {
    props: {
      ...(await serverSideTranslations(language, ["common"])), // i18n
      // conversionEventData,
    },
  };
};
