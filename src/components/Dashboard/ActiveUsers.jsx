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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const activeUsersData = [90, 35, 45, 30, 55, 15, 12, 5, 60, 70, 100, 10];
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

const colorToday = "#3078BB";
const colorYesterday = "#72B2EE";

let myData = {
  labels: months,
  datasets: [
    // Cada una de las líneas del gráfico
    {
      label: "Hoy",
      data: activeUsersData,
      backgroundColor: colorToday,
    },
    {
      label: "Ayer",
      data: [10, 22, 55, 40, 80, 20, 100, 40, 44, 76, 5, 87],
      backgroundColor: colorYesterday,
      stack: "Stack 0",
    },
  ],
};

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

const ActiveUsers = () => {
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
