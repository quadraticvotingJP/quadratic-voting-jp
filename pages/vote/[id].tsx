// i18n
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// component
import { EcVoteForm } from "@/components/ecosystems/EntryPoint";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

const Id = ({}) => {
  return <EcVoteForm />;
};
export default Id;

export interface Item {
  id: string;
}

interface Props {
  item: Item;
}

// 1. Paramsの型を定義し、ParsedUrlQueryをextendsする
interface Params extends ParsedUrlQuery {
  id: string;
}

// i18n
export const getStaticProps: GetStaticProps<Props, Params> = async ({
  locale = "ja",
  params,
}) => {
  const itemf = params?.id;
  const item = {
    id: "a",
  };
  return {
    props: {
      item,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

// getStaticPaths:動的なルーティングを（ダイナミックルーティング）Next.jsで設定する際に使用
// ビルド時に実行
// https://y-hiroyuki.xyz/next-js/getstaticpaths
export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const items = [
    {
      id: "a",
    },
    {
      id: "b",
    },
  ];
  const paths = items.map(({ id }) => ({
    params: {
      id: id,
    },
  }));
  return {
    // pathsは、どのパスをPre-renderingsするか指定
    paths, //ビルド時にページを作成する必要がないことを示す

    // fallbackは、指定されたパスがtrueかfalseかで返す値を決定するもの
    // true:返されるのは事前に生成されたHTML
    // false: 生成されていないパスは全て「404」
    fallback: "blocking", //フォールバックの種類
  };
};
