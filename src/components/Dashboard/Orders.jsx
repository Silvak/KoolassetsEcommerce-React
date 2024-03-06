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
import { months } from "@/mock/summaryData";

Chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const colorOrders = "#5DE44680";

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

const Orders = ({ data }) => {
  const classes = summaryStyles();

  let myData = {
    labels: months,
    datasets: [
      // Cada una de las líneas del gráfico
      {
        label: "Ventas",
        data: data,
        tension: 0.4,
        fill: true,
        borderColor: colorOrders,
        backgroundColor: colorOrders,
        pointRadius: 5,
        pointBorderColor: colorOrders,
        pointBackgroundColor: colorOrders,
      },
    ],
  };
  return (
    <>
      <Line data={myData} options={misOptions} />
      <hr className={classes.itemHr} />
      <Box className={classes.itemFooter}>
        <p>Órdenes diarias</p>
        <p>
          <strong>400</strong>
        </p>
      </Box>
    </>
  );
};
export default Orders;
