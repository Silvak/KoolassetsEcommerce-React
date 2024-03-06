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

const viewsData = [0, 56, 20, 36, 80, 40, 30, 12, 25, 30, 12, 100];
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
      label: "Vistas",
      data: viewsData,
      tension: 0.5,
      fill: true,
      borderColor: "#5DE44680",
      backgroundColor: "#5DE44680",
      pointRadius: 5,
      pointBorderColor: "#5DE44680",
      pointBackgroundColor: "#5DE44680",
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
const Views = () => {
  return <Line data={myData} options={misOptions} />;
};
export default Views;
