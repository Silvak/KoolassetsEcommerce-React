import { Box, Button } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { months } from "@/mock/summaryData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const colorToday = "#3078BB";
const colorYesterday = "#72B2EE";

let misOptions = {
  responsive: true,
  barThickness: 10,
  scales: {
    y: {
      min: 0,
      max: 100,
    },
    x: {
      display: false,
      ticks: { color: "#000" },
    },
  },
};

const ActiveUsers = ({ data }) => {
  let myData = {
    labels: months,
    datasets: [
      // Cada una de las líneas del gráfico
      {
        label: "Hoy",
        data: data?.today,
        backgroundColor: colorToday,
      },
      {
        label: "Ayer",
        data: data?.yesterday,
        backgroundColor: colorYesterday,
        stack: "Stack 0",
      },
    ],
  };
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => alert("actualizando")}>Actualizar</Button>
      </Box>
      <Bar data={myData} options={misOptions} />
    </>
  );
};
export default ActiveUsers;
