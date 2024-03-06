import { summaryStyles } from "@/components/Dashboard/styles";
import { Box } from "@mui/material";

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

const colorProductsOnSale = "#B800A580";

let myData = {
  labels: months,
  datasets: [
    // Cada una de las líneas del gráfico
    {
      label: "Ventas",
      data: salesData,
      tension: 0.4,
      fill: true,
      borderColor: colorProductsOnSale,
      backgroundColor: colorProductsOnSale,
      pointRadius: 5,
      pointBorderColor: colorProductsOnSale,
      pointBackgroundColor: colorProductsOnSale,
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

const ProductsOnSale = () => {
  const classes = summaryStyles();
  return (
    <>
      <Line data={myData} options={misOptions} />
      <hr className={classes.itemHr} />
      <Box className={classes.itemFooter}>
        <p>Añadidos hoy</p>
        <p>
          <strong>300</strong>
        </p>
      </Box>
    </>
  );
};
export default ProductsOnSale;
