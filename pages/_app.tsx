import "../styles/globals.css";
// i18n
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config.js";
// tailwind css
import "../styles/tailwind.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
// component
import { MoHeader, MoFooter } from "@/components/molecules/EntryPoint";
import { EcAdvertisement } from "@/components/ecosystems/EntryPoint";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MoHeader />
      <div className="flex mb-32 mt-14 sm:mt-16">
        <EcAdvertisement className="w-1/5 bg-gray-400" />
        <div className="w-full">
          <Component {...pageProps} />
        </div>
        <EcAdvertisement className="w-1/5 bg-gray-400" />
      </div>
      <MoFooter />
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
