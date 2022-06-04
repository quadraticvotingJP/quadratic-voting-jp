import { useRouter } from "next/router";
// GA
import { pageview } from "@/lib/gtag";
// SEO
import { DefaultSeo } from "next-seo";
import { SEO } from "@/lib/next-seo.config";
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
import { EcAdSense } from "@/components/ecosystems/EntryPoint";
// context
import { LoadingProvider } from "@/context/LoadingContext";
// application
import { routerPush } from "@/architecture/application/routing";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLandingPage: boolean = router.route === "/";

  // 匿名ログイン
  useEffect(() => {
    signInAnonymously(authentication);
  }, []);

  // googleAnalytics4
  // https://fwywd.com/tech/next-ga-pv
  useEffect(() => {
    const handleRouteChange = (url: any) => pageview(url);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <LoadingProvider>
        <MoHeader />
        <div className="flex mt-14 sm:mt-16 min-h-screen">
          {isLandingPage ? (
            <div className="w-full  mb-32">
              <Component {...pageProps} />
              {/* 広告 */}
              <div className="flex">
                <div className="w-1/5"></div>
                <EcAdSense className="w-full" format="horizontal" />
                <div className="w-1/5"></div>
              </div>
            </div>
          ) : (
            <>
              <div className="w-1/5"></div>
              <div className="w-full mx-10 mt-16 mb-32">
                <Component {...pageProps} />
              </div>
              <EcAdSense className="w-1/5" format="horizontal" />
            </>
          )}
        </div>
        <MoFooter />
      </LoadingProvider>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
