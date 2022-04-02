import { ChartData } from "chart.js";
// Grafのdataを生成
export function chartData(
  labels: string[],
  data: number[],
  backgroundColor: string[],
  borderColor: string[]
): ChartData<"bar", number[], string> {
  return {
    labels: labels,
    datasets: [
      {
        // 横軸
        indexAxis: "y",
        // ラベル名
        label: "選択肢",
        // データの値
        data: data,
        // グラフの背景色
        backgroundColor: backgroundColor,
        // グラフの枠線の色
        borderColor: borderColor,
        // グラフの枠線の太さ
        borderWidth: 1,
      },
    ],
  };
}
