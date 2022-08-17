// firebase and GA
import { logEvent } from "firebase/analytics";
import { analytics } from "@/firebase/initialize";

/**
 * GAのイベントに記録するための関数
 * レポート＞エンゲージメント＞イベントに記載される
 * @param eventName string イベント名
 */
export function gaSetLogEvent(eventName: string): void {
  logEvent(analytics!, eventName);
}
