/**
 * @todo コンポーネントの出し分け処理
 * @todo データ加工処理
 * @todo 日付による画面出し分け制御
 */

import React, { useEffect } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// component
import { EcVoteForm } from "@/components/ecosystems/EntryPoint";

//application
import { getAnswerData } from "@/architecture/application/getAnswer";
import { getEventData } from "@/architecture/application/getEvent";
import { routerPush } from "@/architecture/application/routing";

const Id = ({
  event,
  documentId,
  query,
  isAnswer,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useEffect(() => {
    if (isAnswer) routerPush(`/dashboard/id?data=${documentId}`);
  }, []);
  return isAnswer ? (
    <></>
  ) : (
    <EcVoteForm query={query} documentId={documentId} event={event} />
  );
};
export default Id;

// getServerSideProps→getInitialPropsをサーバサイドだけで実行するようにしたもの
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { answerInformation } = getAnswerData(); // api
  const { createAcquiredInformation } = getEventData(); // api
  const query: { user?: string; id?: string } = context.query;

  // Queryにユーザーデータが存在するか確認
  if (!query.id || !query.user) {
    return {
      props: {
        isAnswer: true,
      },
    };
  }
  const documentId: string = query.id;
  const userId = query.user;
  const event = await createAcquiredInformation("event", documentId, "answer");

  // //回答したデータが存在するかチェックするAPI
  const answer = await answerInformation("event", documentId, "answer", userId);
  // 回答者がいた場合
  if (answer !== undefined) {
    return {
      props: {
        documentId,
        isAnswer: true,
      },
    };
  }

  // 該当するイベントが存在するか確認
  if (event === undefined) {
    return {
      props: {
        isAnswer: true,
        documentId,
      },
    };
  }
  delete event.createAt;
  // 投票用のKeyを取得した選択肢毎に追加する
  event.options.map((option: any) => {
    return Object.assign(option, {
      vote: 0,
      ...option,
    });
  });

  // イベントが存在し、未回答の場合のリターン
  return {
    props: {
      event,
      documentId,
      query,
      isAnswer: false,
      ...(await serverSideTranslations("ja", ["common"])),
    },
  };
};
