// https://stackoverflow.com/questions/69722076/next-js-type-error-cannot-find-name-staticimagedata
// このFileは下記ディレクトリのStaticImageDataのtypeErrorを解消するためのd.ts
// quadratic-voting-jp/node_modules/next/dist/client/head-manager.js.map
// type StaticImageDataがないとfunctions配下のbuildでコケる
export {};
declare global {
  type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
}
