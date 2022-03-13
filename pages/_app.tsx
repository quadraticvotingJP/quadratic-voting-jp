import "../styles/globals.css";
// i18n
import { appWithTranslation } from "next-i18next"
import nextI18NextConfig from '../next-i18next.config.js';
// tailwind css
import "../styles/tailwind.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp, nextI18NextConfig);
