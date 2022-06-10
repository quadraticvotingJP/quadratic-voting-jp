import { useRouter } from "next/router";
import styled from "styled-components";
// GA
import { pageview } from "@/lib/gtag";
// SEO
import { DefaultSeo } from "next-seo";
import { SEO } from "@/lib/next-seo.config";
// hooks
import { useEffect, useState } from "react";
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
import { EcAdSense, EcLoading } from "@/components/ecosystems/EntryPoint";
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

  // Loading
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setPageLoading(true);
    const handleComplete = () => setPageLoading(false);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <>
      <DefaultSeo {...SEO} />
      <Container>
        <MoHeader />

        {pageLoading ? (
          <EcLoading />
        ) : (
          <>
            {isLandingPage ? (
              <Main>
                <Page>
                  <Component {...pageProps} />
                </Page>
                <EcAdSense
                  className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6"
                  format="horizontal"
                />
              </Main>
            ) : (
              <>
                <div className="container mx-auto flex mt-14 sm:mt-16">
                  <div className="lg:flex-grow md:w-1/2 mx-10 mt-16 mb-32">
                    <Component {...pageProps} />
                  </div>
                  <EcAdSense
                    className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6"
                    format="horizontal"
                  />
                </div>
              </>
            )}
          </>
        )}
        <MoFooter />
      </Container>
    </>
  );
}
export default appWithTranslation(MyApp, nextI18NextConfig);

const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;
const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 100px 40px 200px 40px;
`;
const Page = styled.div`
  width: 65%;
`;
