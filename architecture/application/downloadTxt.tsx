export function downloadTxt() {
  /**
   * @description
   * 投票者リンクをテキストファイルで吐き出す
   * @param voterLinks @type {string}
   * @returns @type {void}
   */
  function textFile(voterLinks: string): void {
    const text = voterLinks;
    // リンクコンポーネントの作成
    const element = document.createElement("a");
    // テキストからブロブを作成する
    const file = new Blob([text], { type: "text/plain" });
    // ダウンロード可能なリンクコンポーネントを非表示にする設定
    element.href = URL.createObjectURL(file);
    element.download = "voter_links.txt";
    element.style.display = "none";
    // // リンクコンポーネントを追加
    document.body.appendChild(element);
    // // リンク先のコンポーネントをクリックすると、ファイルをダウンロード可能
    element.click();
    // // 本体からリンクコンポーネントを削除
    document.body.removeChild(element);
  }
  return { textFile };
}
