/** @description Ecosystem Vote Form */
import React from "react";
import { GetStaticPaths } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useForm, SubmitHandler } from "react-hook-form";
import { utilsValidationRule } from "@/utils/validation";
// component
import { MoButtons } from "@/components/molecules/EntryPoint";
import { OrCardText } from "@/components/organisms/EntryPoint";

const EcVoteForm: React.FC = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <OrCardText
        title={t("common.event.eventTitle.title")}
        required={false}
        contents={"次の都知事は誰？"}
        showEdit={false}
        disabled={false}
      />
      <br />
      <OrCardText
        title={t("common.event.overview.title")}
        required={false}
        contents={"都知事を決めるための選挙を行います"}
        showEdit={false}
        disabled={false}
      />
      <br />
      <MoButtons
        left={{ title: "-", disabled: false, onClick: () => {} }}
        right={{ title: "+", disabled: false, onClick: () => {} }}
      />
    </>
  );
};

export default EcVoteForm;
// // i18n
// export const getStaticProps = async ({ locale = "ja" }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ["common"])),
//   },
// });

// // getStaticPaths:動的なルーティングを（ダイナミックルーティング）Next.jsで設定する際に使用
// // ビルド時に実行
// // https://y-hiroyuki.xyz/next-js/getstaticpaths
// export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
//   return {
//     // pathsは、どのパスをPre-renderingsするか指定
//     paths: [], //ビルド時にページを作成する必要がないことを示す

//     // fallbackは、指定されたパスがtrueかfalseかで返す値を決定するもの
//     // true:返されるのは事前に生成されたHTML
//     // false: 生成されていないパスは全て「404」
//     fallback: "blocking", //フォールバックの種類
//   };
// };
