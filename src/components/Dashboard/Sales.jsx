import { summaryStyles } from "@/components/Dashboard/styles";

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
import { Box } from "@mui/material";

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
      tension: 0.4,
      fill: true,
      borderColor: "#E4464680",
      backgroundColor: "#E4464680",
      pointRadius: 5,
      pointBorderColor: "#E4464680",
      pointBackgroundColor: "#E4464680",
    },
  ],
};

let misOptions = {
  scales: {
    y: {
      min: 0,
    },
    x: {
      display: false,
      ticks: { color: "#000" },
    },
  },
};

const Sales = () => {
  const classes = summaryStyles();

  return (
    <>
      <Line data={myData} options={misOptions} />
      <hr className={classes.itemHr} />
      <Box className={classes.itemFooter}>
        <p>Ventas hoy</p>
        <p>
          <strong>120</strong>
        </p>
      </Box>
    </>
  );
};
export default Sales;
