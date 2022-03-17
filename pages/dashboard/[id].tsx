import { GetStaticPaths } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Id = ({}) => {
  return (
    <>dashboard🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥</>
  );
};
export default Id;

// i18n
export const getStaticProps = async ({ locale = "ja" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

// getStaticPaths:動的なルーティングを（ダイナミックルーティング）Next.jsで設定する際に使用
// ビルド時に実行
// https://y-hiroyuki.xyz/next-js/getstaticpaths
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    // pathsは、どのパスをPre-renderingsするか指定
    paths: [], //ビルド時にページを作成する必要がないことを示す

    // fallbackは、指定されたパスがtrueかfalseかで返す値を決定するもの
    // true:返されるのは事前に生成されたHTML
    // false: 生成されていないパスは全て「404」
    fallback: "blocking", //フォールバックの種類
  };
};
