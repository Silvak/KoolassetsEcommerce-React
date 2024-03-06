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

const Sales = ({ data }) => {
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
        borderColor: "#E4464680",
        backgroundColor: "#E4464680",
        pointRadius: 5,
        pointBorderColor: "#E4464680",
        pointBackgroundColor: "#E4464680",
      },
    ],
  };
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
