import type { NextPage } from "next";
// component
import { EcLp } from "@/components/ecosystems/EntryPoint";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Top: NextPage = ({}) => {
  return <EcLp />;
};
export default Top;

// i18n
export const getStaticProps = async ({ locale = "ja" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
