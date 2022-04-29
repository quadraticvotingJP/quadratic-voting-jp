// i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// component
import { EcVoteForm } from "@/components/ecosystems/EntryPoint";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { getAnswerData } from "@/architecture/application/getAnswer";
import { getEventData } from "@/architecture/application/getEvent";

const Id = ({
  event,
  documentId,
  query,
  answer,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return answer ? (
    ""
  ) : (
    <EcVoteForm query={query} documentId={documentId} event={event} />
  );
};
export default Id;

// i18n
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { answerInformation } = getAnswerData(); // api
  const { createAcquiredInformation } = getEventData(); // api
  const language: string = context.locale!;
  const documentId: string = context.query[""]!.toLocaleString();
  const query: { user?: string } = context.query;

  const event = await createAcquiredInformation("event", documentId, "answer");

  if (query.user) {
    const userId = query.user;
    const answer = await answerInformation(
      "event",
      documentId,
      "answer",
      userId
    );

    if (answer !== undefined) {
      return {
        props: {
          answer: true,
          ...(await serverSideTranslations(language, ["common"])),
        },
      };
    }
  }

  if (event === undefined) {
    return {
      props: {
        answer: true,
        ...(await serverSideTranslations(language, ["common"])),
      },
    };
  }
  delete event.createAt;
  event.options.map((option: any) => {
    return Object.assign(option, {
      vote: 0,
      ...option,
    });
  });
  // console.log(event);

  return {
    props: {
      event,
      documentId,
      query,
      answer: false,
      ...(await serverSideTranslations(language, ["common"])),
    },
  };
};
