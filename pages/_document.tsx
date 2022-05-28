// <html>・<body>タグの定義を行う
import { GA_TRACKING_ID } from "@/architecture/application/gtag";
import { Html, Head } from "next/document";

<Html>
  <Head>
    {GA_TRACKING_ID != null && (
      <>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
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
      </>
    )}
  </Head>
</Html>;
