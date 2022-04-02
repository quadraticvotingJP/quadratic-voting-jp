import { ChartData } from "chart.js";
// domain
import { chartData } from "@/architecture/domain/chart";

interface Color {
  background: string[];
  border: string[];
}

export function setGraf() {
  function createData(
    labels: string[],
    data: number[]
  ): ChartData<"bar", number[], string> {
    // Grafのカラーパターンを生成
    const color: Color = { background: [], border: [] };
    const min = 0;
    const max = 255;
    function mathRandom(): number {
      return Math.floor(Math.random() * (max + 1 - min)) + min;
    }
    // labelsの数カラーパターン作成
    for (let index = 0; index < labels.length; index++) {
      const Red: number = mathRandom();
      const Green: number = mathRandom();
      const Blue: number = mathRandom();
      color.background.push(`rgba(${Red}, ${Green}, ${Blue}, 0.2)`);
      color.border.push(`rgba(${Red}, ${Green}, ${Blue})`);
    }
    // Grafのdataを生成
    return chartData(labels, data, color.background, color.border);
  }
  return { createData };
}
