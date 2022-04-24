// i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// component
import { EcVoteForm } from "@/components/ecosystems/EntryPoint";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  GetStaticPaths,
  GetStaticProps,
} from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { getEventData } from "@/architecture/application/getEvent";
import { dashboardData } from "@/architecture/application/dashboardData";

const Id = ({
  item,
  query,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <EcVoteForm item={item} />;
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
  // const item = {
  //   id: "a",
  //   eventTitle: "次の都知事は誰？",
  //   overview: "都知事を決めるための選挙を行います",
  //   publicationStartDate: "2022-04-04T14:17",
  //   publicationEndDate: "2022-10-28T14:17",
  //   votes: 99,
  //   options: [
  //     {
  //       title: "舎鈴",
  //       overview: "つけ麺",
  //       url: "https://www.tsukemen-sharin.com/",
  //       id: 2,
  //     },
  //     {
  //       title: "舎鈴",
  //       overview: "つけ麺",
  //       url: "https://www.tsukemen-sharin.com/",
  //       id: 4,
  //     },
  //   ],
  //   createAt: "2022年4月3日 14:25:01 UTC+9",
  // };
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

  // const conversionEventData = conversion(item!);
  // console.log(conversionEventData);

  return {
    props: {
      item,
      query,
      ...(await serverSideTranslations(language, ["common"])),
    },
  };
};

// getStaticPaths:動的なルーティングを（ダイナミックルーティング）Next.jsで設定する際に使用
// ビルド時に実行
// https://y-hiroyuki.xyz/next-js/getstaticpaths
// export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
//   const items = [
//     {
//       id: "a",
//     },
//     {
//       id: "b",
//     },
//   ];
//   const paths = items.map(({ id }) => ({
//     params: {
//       id: id,
//     },
//   }));
//   return {
//     // pathsは、どのパスをPre-renderingsするか指定
//     paths, //ビルド時にページを作成する必要がないことを示す

//     // fallbackは、指定されたパスがtrueかfalseかで返す値を決定するもの
//     // true:返されるのは事前に生成されたHTML
//     // false: 生成されていないパスは全て「404」
//     fallback: "blocking", //フォールバックの種類
//   };
// };
