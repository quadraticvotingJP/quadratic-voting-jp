// i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// component
import { EcVoteForm } from "@/components/ecosystems/EntryPoint";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { getEventData } from "@/architecture/application/getEvent";
import { dashboardData } from "@/architecture/application/dashboardData";

const Id = ({
  item,
  documentId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <EcVoteForm documentId={documentId} item={item} />;
};
export default Id;

// i18n
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { createAcquiredInformation } = getEventData(); // api
  const { conversion } = dashboardData(); // dashboardData整形
  const language: string = context.locale!;
  const documentId: string = context.query[""]!.toLocaleString();
  const query: ParsedUrlQuery = context.query;
  const item = await createAcquiredInformation("event", documentId, "answer");
  if (item === undefined) {
    return {
      props: {
        item,
        query,
        ...(await serverSideTranslations(language, ["common"])),
      },
    };
  }
  delete item.createAt;
  item.options.map((option: any) => {
    return Object.assign(option, {
      vote: 0,
      ...option,
    });
  });
  console.log(item);

  return {
    props: {
      item,
      documentId,
      ...(await serverSideTranslations(language, ["common"])),
    },
  };
};
