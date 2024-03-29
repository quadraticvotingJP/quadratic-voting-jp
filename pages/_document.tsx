// Next.js の独自ファイル。 HTML の <html> や <body> タグの拡張に使う
// _document.js はサーバーサイドのみでレンダリングされるため、クライアントサイドでは使われない。
// https://nextjs-ja-translation-docs.vercel.app/docs/advanced-features/custom-document
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
// styled-componentsの設定
// https://zenn.dev/nbr41to/articles/c0c691653e3d55
// https://styled-components.com/docs/advanced#nextjs
import { ServerStyleSheet } from "styled-components";
import { GA_TRACKING_ID } from "@/lib/gtag";
import { BASE_CSS } from "@/utils/baseCss";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta name="theme-color" content={BASE_CSS.color.main} />
          {GA_TRACKING_ID && (
            <>
              {/* SEO */}
              <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
              />
              {/* google Analytics */}
              <script
                async
                crossOrigin="anonymous"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                id="google-analytics"
                crossOrigin="anonymous"
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });`,
                }}
              />
              {/* google Adsense */}
              <script
                async
                id="google-adsense"
                crossOrigin="anonymous"
                src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADSENCE}`}
                data-ad-client={`${process.env.NEXT_PUBLIC_GOOGLE_ADSENCE_PUB}`}
                onError={(e) => {
                  console.error("Script failed to load:", e);
                }}
              />
              {/* microsoft clarity */}
              <script
                id="microsoft-clarity"
                dangerouslySetInnerHTML={{
                  __html: `
                    (function(c,l,a,r,i,t,y){
                      c[a] = c[a] || function () { (c[a].q = c[a].q ||
                      []).push(arguments) };
                      t=l.createElement(r);
                      t.async=1;
                      t.src="https://www.clarity.ms/tag/"+i;
                      y=l.getElementsByTagName(r)[0];
                      y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY}");
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
