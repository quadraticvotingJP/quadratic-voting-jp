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
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
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
                id="google-adsense"
                crossOrigin="anonymous"
                async
                src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADSENCE}`}
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
