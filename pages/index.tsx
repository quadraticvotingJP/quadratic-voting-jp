import type { NextPage } from "next";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect } from "react";
// application
// import { getImages } from "@/architecture/application/getImages";
import { getLpImages } from "@/architecture/application/getLpImages";
// component
import { EcLp } from "@/components/ecosystems/EntryPoint";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// GA
import { gaSetLogEvent } from "@/architecture/application/gaLogEvent";
import { ROOT_VISIT } from "@/architecture/domain/gaEventName";

const Top: NextPage = ({
  images,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useEffect(() => {
    gaSetLogEvent(ROOT_VISIT);
  }, []);
  return <EcLp images={images} />;
};

export default Top;

// getServerSideProps→getInitialPropsをサーバサイドだけで実行するようにしたもの
export const getServerSideProps: GetServerSideProps = async (context) => {
  // fireBase storageからの画像習得API
  // const { imageList } = getImages(); // 画像リストを取得関数をimport
  // const images = await imageList("lp");

  // fireStoreからの画像習得API
  const { imageList } = getLpImages(); // api
  const lpImages = await imageList(
    "images",
    process.env.NEXT_PUBLIC_DOCUMENT_IMAGE!
  );
  const images = lpImages!.lp;
  return {
    props: {
      images,
      ...(await serverSideTranslations(context.locale!, ["common"])),
    },
  };
};
