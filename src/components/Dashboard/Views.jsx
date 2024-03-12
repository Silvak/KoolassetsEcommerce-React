import { summaryStyles } from "@/components/Dashboard/styles";
import { Line } from "react-chartjs-2";

import { months } from "@/mock/summaryData";
import { Box } from "@mui/material";
import {
  CategoryScale,
  Chart as Chartjs,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
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
const Views = ({ data }) => {
  const classes = summaryStyles();

  let myData = {
    labels: months,
    datasets: [
      // Cada una de las líneas del gráfico
      {
        label: "Vistas",
        data: data,
        tension: 0.4,
        fill: true,
        borderColor: "#5DE44680",
        backgroundColor: "#5DE44680",
        pointRadius: 5,
        pointBorderColor: "#5DE44680",
        pointBackgroundColor: "#5DE44680",
      },
    ],
  };
  return (
    <>
      <Line data={myData} options={misOptions} />
      <hr className={classes.itemHr} />
      <Box className={classes.itemFooter}>
        <p>Visitas hoy</p>
        <p>
          <strong>120</strong>
        </p>
      </Box>
    </>
  );
};
export default Views;
