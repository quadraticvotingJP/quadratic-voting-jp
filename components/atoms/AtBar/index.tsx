import React from "react";

// https://www.chartjs.org/docs/latest/charts/bar.html
// https://github.com/chartjs/Chart.js/blob/master/docs/charts/bar.md
import { Bar } from "react-chartjs-2";
import { CategoryScale, ChartData } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);

export type Props = {
  readonly data: ChartData<"bar", number[], string>;
  readonly height: number;
};

// eslint-disable-next-line react/display-name
export const AtBar: React.FC<Props> = React.memo(({ data, height }) => (
  <Bar height={height} data={data} />
));
