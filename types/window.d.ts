// https://wp-kyoto.net/next-jsgoogle-adsense/
/* eslint-disable no-var */
interface Window {
  prerenderReady: boolean;
  adsbygoogle: { [key: string]: unknown }[];
}

declare global {
  var window: Window;
}
