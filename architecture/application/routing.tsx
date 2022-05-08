// ルーティング周りの処理を書く
import Router from "next/router";

/**
 * 画面遷移のロジック
 * @param path string
 */
export function routerPush(path: string): void {
  Router.push(path);
}

export function getParams(): string {
  const id: string = Router.pathname;
  return id;
}
