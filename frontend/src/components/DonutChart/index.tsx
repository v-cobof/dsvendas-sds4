import axios from 'axios';
import Chart from 'react-apexcharts';
import { BASE_URL } from "utils/requests";
import { SaleSum } from "types/sale"
import { useEffect, useState } from 'react';

type ChartData = {
  labels: string[];
  series: number[];
}

const DonutChart = () => {

  const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
      .then(response => {
        const data = response.data as SaleSum[];
        const myLabels = data.map(x => x.sellerName);
        const mySeries = data.map(x => x.sum);

        setChartData({ labels: myLabels, series: mySeries });
      });
  }, []);
  /* useEffect recebe 2 argumentos, a função requisição do axios
   e um array que ele vai observar. Neste caso é vazio.*/

  /*const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
  }*/

  const options = {
    legend: {
      show: true
    }
  }

  // '...' is called Spread, and what is does is
  // it passes all key:value pairs from 'options' object
  // 
  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />

  );
}

export default DonutChart;