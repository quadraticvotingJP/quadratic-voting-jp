/** 投票画面  */

import React from "react";
import { NextSeo } from "next-seo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// firebase
import { authentication } from "@/firebase/initialize";
import { signInAnonymously, UserCredential } from "firebase/auth";

// component
import {
  EcVoteForm,
  EcInvalidLink,
  EcTimeReflection,
} from "@/components/ecosystems/EntryPoint";

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
 * - 匿名データが取得できているか確認
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

  const userInfo: UserCredential = await signInAnonymously(authentication);

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
  // 匿名データが取得できているか確認
  if (!userInfo) {
    return {
      props: {
        documentId,
        ...(await serverSideTranslations(context.locale!, ["common"])),
      },
    };
  }

  const uid: string = userInfo.user.uid;
  const answer = await answerInformation("event", documentId, "answer", uid); // //回答したデータが存在するかチェックするAPI

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
      uid,
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
  uid = null,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { beforePublicationStartDate, afterPublicationEndDate, getNowToTime } =
    eventDateAuthorize(); // 日にちチェック
  const now = getNowToTime();
  const dateBefore: boolean = beforePublicationStartDate(
    conversionVoteData?.publicationStartDate,
    now
  ); // 開始前か確認
  const dateAfter: boolean = afterPublicationEndDate(
    conversionVoteData?.publicationEndDate,
    now
  ); // 終了後か確認

  if (
    !documentId === null ||
    isAnswer ||
    cantVote ||
    query === null ||
    uid === null
  ) {
    return <EcInvalidLink />;
  }
  // 開始日と終了日内か確認
  if (!isDate) {
    if (dateBefore) {
      return (
        <EcTimeReflection
          time={conversionVoteData.publicationStartDate}
          now={now}
        />
      );
    }
    if (dateAfter) {
      return <EcInvalidLink />;
    }
  }

  return (
    <>
      <NextSeo
        title="投票 | 民主主義のデジタル化を実現するアンケートフォーム【QuadraticVoting.jp】"
        description="QuadraticVoting.jpの投票ページです。QuadraticVotingとは台湾デジタル大臣のオードリー・タン氏が紹介したことから、世界中に広がっています。今までの投票方法とは異なった手法で、少数派の選択肢の意見にも耳を傾け、多くの意見を尊重することが可能です。"
        openGraph={{
          title:
            "投票 | 民主主義のデジタル化を実現するアンケートフォーム【QuadraticVoting.jp】",
          description:
            "QuadraticVoting.jpの投票ページです。QuadraticVotingとは台湾デジタル大臣のオードリー・タン氏が紹介したことから、世界中に広がっています。今までの投票方法とは異なった手法で、少数派の選択肢の意見にも耳を傾け、多くの意見を尊重することが可能です。",
        }}
      />
      <EcVoteForm
        query={query}
        documentId={documentId}
        conversionVoteData={conversionVoteData}
        uid={uid}
      />
    </>
  );
};
export default Id;
