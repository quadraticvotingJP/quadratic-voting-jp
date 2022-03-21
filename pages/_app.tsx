// hooks
import { useEffect } from "react";
// i18n
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config.js";
// tailwind or css
import "../styles/globals.css";
import "../styles/tailwind.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
// component
import { MoHeader, MoFooter } from "@/components/molecules/EntryPoint";
import { EcAdvertisement } from "@/components/ecosystems/EntryPoint";
// application
import { routerPush } from "@/architecture/application/routing";

function MyApp({ Component, pageProps, router }: AppProps) {
  // 該当しないpathであれば/に飛ばす
  // useEffect(() => {
  //   if (router.pathname === "/create") return;
  //   if (router.pathname === "/dashboard/[id]") return;
  //   if (router.pathname === "/vote/[id]") return;
  //   routerPush("/");
  // }, [router.pathname]);
  return (
    <>
      <MoHeader />
      <div className="flex mb-32 mt-14 sm:mt-16">
        <EcAdvertisement className="w-1/5 bg-gray-400" />
        <div className="w-full p-6 sm:p-40">
          <Component {...pageProps} />
        </div>
        <EcAdvertisement className="w-1/5 bg-gray-400" />
      </div>
      <MoFooter />
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
