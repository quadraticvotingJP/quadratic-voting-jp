import type { NextPage } from "next";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
// application
import { getImages } from "@/architecture/application/getImages";
// component
import { EcLp } from "@/components/ecosystems/EntryPoint";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Top: NextPage = ({
  images,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <EcLp images={images} />;
};
export default Top;

// getServerSideProps→getInitialPropsをサーバサイドだけで実行するようにしたもの
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { imageList } = getImages(); // 画像リストを取得関数をimport
  const images = await imageList("lp");
  return {
    props: {
      images,
      ...(await serverSideTranslations(context.locale!, ["common"])),
    },
  };
};
