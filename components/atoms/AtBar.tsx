import React from "react";

// https://www.chartjs.org/docs/latest/charts/bar.html
// https://github.com/chartjs/Chart.js/blob/master/docs/charts/bar.md
import { Bar } from "react-chartjs-2";
import { CategoryScale, ChartData } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);

type Props = {
  data: ChartData<"bar", number[], string>;
};

// eslint-disable-next-line react/display-name
const AtBar: React.FC<Props> = React.memo(({ data }) => {
  return <Bar data={data} />;
});

export default AtBar;
