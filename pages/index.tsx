import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
// application
// import { getImages } from "@/architecture/application/getImages";
import { getLpImages } from "@/architecture/application/getLpImages";
// component
import { EcLp } from "@/components/ecosystems/EntryPoint";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Top: NextPage = ({
  images,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo
        title="トップページ ｜民主主義のデジタル化を実現するアンケートフォーム"
        description="トップページ"
      />
      <EcLp images={images} />
    </>
  );
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
