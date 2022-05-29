import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// component
import { EcCreateForm } from "@/components/ecosystems/EntryPoint";
const Index = ({}) => {
  return <EcCreateForm />;
};
export default Index;

// i18n
export const getStaticProps = async ({ locale = "ja" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
