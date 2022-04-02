import { ChartData } from "chart.js";
// Grafのdataを生成
export function chartData(
  labels: string[],
  effectiveVotes: number[],
  percentCredits: number[]
): ChartData<"bar", number[], string> {
  return {
    labels: labels,
    datasets: [
      {
        // 軸
        indexAxis: "y",
        // ラベル名
        label: "投票数",
        // データの値
        data: effectiveVotes,
        // グラフの背景色
        backgroundColor: "rgba(254,97,132,0.2)",
        // グラフの枠線の色
        borderColor: "rgba(254,97,132)",
        // グラフの枠線の太さ
        borderWidth: 1,
      },
      {
        // 軸
        indexAxis: "y",
        // ラベル名
        label: "投票率",
        // データの値
        data: percentCredits,
        // グラフの背景色
        backgroundColor: "rgba(59 130 246 / 0.2)",
        // グラフの枠線の色
        borderColor: "rgba(59 130 246)",
        // グラフの枠線の太さ
        borderWidth: 1,
      },
    ],
  };
}
