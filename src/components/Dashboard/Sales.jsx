import { Line } from "react-chartjs-2";

import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const salesData = [0, 12, 15, 5, 20, 8, 60, 40, 45, 60, 12, 100];
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let myData = {
  labels: months,
  datasets: [
    // Cada una de las líneas del gráfico
    {
      label: "Ventas",
      data: salesData,
      tension: 0.5,
      fill: true,
      borderColor: "#E4464680",
      backgroundColor: "#E4464680",
      pointRadius: 5,
      pointBorderColor: "#E4464680",
      pointBackgroundColor: "#E4464680",
    },
    // {
    //   label: "Otra línea",
    //   data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25],
    // },
  ],
};

let misOptions = {
  scales: {
    y: {
      min: 0,
    },
    x: {
      ticks: { color: "#000" },
    },
  },
};

const Sales = () => {
  return <Line data={myData} options={misOptions} />;
};
export default Sales;
