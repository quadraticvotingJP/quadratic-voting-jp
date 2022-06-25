/** 投票画面  */

import React from "react";
import { NextSeo } from "next-seo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// component
import { EcVoteForm, EcInvalidLink } from "@/components/ecosystems/EntryPoint";

//application
import { getAnswerData } from "@/architecture/application/getAnswer";
import { getEventData } from "@/architecture/application/getEvent";
import { eventDateAuthorize } from "@/architecture/application/getToday";
import { voteData } from "@/architecture/application/voteData";

/**
 * getServerSideProps→getInitialPropsをサーバサイドだけで実行するようにしたもの
 *
 * @description 処理概要
 * - QueryにドキュメントIDが存在しない
 * - 該当するイベントが存在しない
 * - Queryにユーザーデータが存在するか確認
 * - 回答者がすでに回答済みの場合
 * - 開始日と終了日内か確認
 *
 * @param context
 * @returns GetServerSideProps
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { answerInformation } = getAnswerData(); // api
  const { createAcquiredInformation } = getEventData(); // api
  const { conversion } = voteData(); // 投票データ変換

  const query: VotePageQuery = context.query; // クエリーパラメーター
  const documentId: string | undefined = query.id;
  const userId: string | undefined = query.user;

  // QueryにドキュメントIDが存在しない場合
  if (!documentId) {
    return {
      props: {
        ...(await serverSideTranslations(context.locale!, ["common"])),
      },
    };
  }

  const event = await createAcquiredInformation("event", documentId, "answer"); // event取得API

  // 該当するイベントが存在するか確認
  if (event === undefined) {
    return {
      props: {
        ...(await serverSideTranslations(context.locale!, ["common"])),
      },
    };
  }
  // Queryにユーザーデータが存在するか確認
  if (!userId) {
    return {
      props: {
        documentId,
        ...(await serverSideTranslations(context.locale!, ["common"])),
      },
    };
  }

  const answer = await answerInformation("event", documentId, "answer", userId); // //回答したデータが存在するかチェックするAPI

  // 回答者がいた場合
  if (answer !== undefined) {
    return {
      props: {
        documentId,
        ...(await serverSideTranslations(context.locale!, ["common"])),
      },
    };
  }
  delete event.createAt;

  // 投票用のKeyを取得した選択肢毎に追加する
  const conversionVoteData = conversion(event);

  // イベントが存在し、未回答の場合のリターン
  return {
    props: {
      conversionVoteData,
      documentId,
      query,
      isAnswer: false,
      isDate: false,
      ...(await serverSideTranslations(context.locale!, ["common"])),
    },
  };
};

const Id = ({
  conversionVoteData = null,
  documentId = null,
  query = null,
  isAnswer = true,
  cantVote = false,
  isDate = true,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { beforePublicationStartDate, afterPublicationEndDate } =
    eventDateAuthorize(); // 日にちチェック
  const dateBefore: boolean = beforePublicationStartDate(
    conversionVoteData?.publicationStartDate
  ); // 開始前か確認
  const dateAfter: boolean = afterPublicationEndDate(
    conversionVoteData?.publicationEndDate
  ); // 終了後か確認

  if (!documentId === null || isAnswer || cantVote || query === null) {
    return <EcInvalidLink />;
  }
  // 開始日と終了日内か確認
  if (!isDate) {
    if (dateBefore || dateAfter) {
      return <EcInvalidLink />;
    }
  }

  return (
    <>
      <NextSeo
        title="投票 ｜革命的な民主主義を実現するアンケートフォーム"
        description="アンケートに対する投票ページ。"
      />
      <EcVoteForm
        query={query}
        documentId={documentId}
        conversionVoteData={conversionVoteData}
      />
    </>
  );
};
export default Id;
