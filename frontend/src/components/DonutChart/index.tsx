import Chart from 'react-apexcharts';

const DonutChart = () => {

  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
  }

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
      options={{...options, labels: mockData.labels }}
      series={mockData.series}
      type="donut"
      height="240"
    />

  );
}

export default DonutChart;