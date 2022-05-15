/**
 * @todo コンポーネントの出し分け処理
 * @todo データ加工処理
 * @todo 日付による画面出し分け制御
 */

import React, { useEffect, useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// component
import { EcVoteForm } from "@/components/ecosystems/EntryPoint";

//application
import { getAnswerData } from "@/architecture/application/getAnswer";
import { getEventData } from "@/architecture/application/getEvent";
import { routerPush } from "@/architecture/application/routing";
import { eventDateAuthorize } from "@/architecture/application/getToday";
import { useRouter } from "next/router";

// context
import { useLoadingContext } from "@/context/LoadingContext";

const Id = ({
  event = null,
  documentId,
  query,
  isAnswer = true,
  cantVote = false,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const isReady: boolean = useRouter().isReady; // routingが完了したかどうか
  const { setLoading } = useLoadingContext(); // loading
  const [routeLoading, setrouteLoading] = useState<boolean>(false); // routing中に画面に描画させるコンポーネント
  useEffect(() => {
    if (isReady) {
      if (isAnswer || cantVote) routerPush(`/dashboard/${documentId}`);
      setrouteLoading(true);
      setLoading(false);
    }
  }, [isReady, event]);
  if (!routeLoading || event === null) {
    setLoading(true);
    return <></>;
  }
  return <EcVoteForm query={query} documentId={documentId} event={event} />;
};
export default Id;

// getServerSideProps→getInitialPropsをサーバサイドだけで実行するようにしたもの
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { answerInformation } = getAnswerData(); // api
  const { createAcquiredInformation } = getEventData(); // api
  const { beforePublicationStartDate, afterPublicationEndDate } =
    eventDateAuthorize();
  const query: { user?: string; id?: string } = context.query;

  // Queryにユーザーデータが存在するか確認
  if (!query.id || !query.user) {
    return {
      props: {},
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
      },
    };
  }

  // 該当するイベントが存在するか確認
  if (event === undefined) {
    return {
      props: {
        documentId,
      },
    };
  }
  delete event.createAt;

  // 開始日と終了日内か確認
  const now = new Date();
  const dateBefore: boolean = beforePublicationStartDate(
    event.publicationStartDate
  );
  const dateAfter: boolean = afterPublicationEndDate(event.publicationEndDate);
  if (dateBefore || dateAfter) {
    return {
      props: {
        cantVote: true,
        documentId,
      },
    };
  }

  // 投票用のKeyを取得した選択肢毎に追加する
  event.options.map((option: any) => {
    return Object.assign(option, {
      vote: 0,
      left: false,
      right: false,
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
      ...(await serverSideTranslations(context.locale!, ["common"])),
    },
  };
};
