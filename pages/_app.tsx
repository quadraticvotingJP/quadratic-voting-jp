import Script from "next/script";
import { GA_TRACKING_ID } from "@/architecture/application/gtag";
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
// firebase
import { authentication } from "@/firebase/initialize";
import { signInAnonymously } from "firebase/auth";
// component
import { MoHeader, MoFooter } from "@/components/molecules/EntryPoint";
import { EcAdvertisement } from "@/components/ecosystems/EntryPoint";
// context
import { LoadingProvider } from "@/context/LoadingContext";
// application
import { routerPush } from "@/architecture/application/routing";

function MyApp({ Component, pageProps, router }: AppProps) {
  // 匿名ログイン
  useEffect(() => {
    signInAnonymously(authentication);
  }, []);

  // 該当しないpathであれば/に飛ばす
  // useEffect(() => {
  //   if (router.pathname === "/create") return;
  //   if (router.pathname === "/dashboard/[id]") return;
  //   if (router.pathname === "/vote/[id]") return;
  //   routerPush("/");
  // }, [router.pathname]);
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
      <LoadingProvider>
        <MoHeader />
        <div className="flex mt-14 sm:mt-16 min-h-screen">
          <EcAdvertisement className="w-1/5 bg-gray-400" />
          <div className="w-full mx-10 mt-16 mb-32">
            <Component {...pageProps} />
          </div>
          <EcAdvertisement className="w-1/5 bg-gray-400" />
        </div>
        <MoFooter />
      </LoadingProvider>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
