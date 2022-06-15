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
              <LPMain>
                <Component {...pageProps} />
                <LPAdSense>
                  <EcAdSense format="horizontal" a8netOnamae468x60 />
                </LPAdSense>
              </LPMain>
            ) : (
              <Main>
                <Page>
                  <Component {...pageProps} />
                </Page>
                <PageAdSense>
                  <EcAdSense format="horizontal" adSense />
                  <br />
                  <EcAdSense format="horizontal" a8netLoli300x300 />
                  <br />
                  <EcAdSense format="horizontal" a8netOnamae300x300 />
                  <br />
                  <EcAdSense format="horizontal" a8netOZUBI300x250 />
                  <br />
                  <EcAdSense format="horizontal" a8netXSERVER300x250 />
                  <br />
                  <EcAdSense format="horizontal" a8netA8300x250 />
                  <br />
                  <EcAdSense format="horizontal" a8netOnamae300x300 />
                </PageAdSense>
              </Main>
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
  width: 80%;
`;
const PageAdSense = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LPMain = styled.main`
  width: 100%;
  padding: 65px 0px 200px 0px;
  display: flex;
  flex-direction: column;
`;
const LPAdSense = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
