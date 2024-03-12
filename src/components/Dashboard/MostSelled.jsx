import { Box, Button, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const MostSelled = ({ data }) => {
  let myData = {
    labels: ["Computación", "Telefonía", "Prendas", "Herramientas"],
    datasets: [
      {
        label: "Vendidos",
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <Box>
        <h6
          style={{
            fontSize: "16px",
            fontWeight: "normal",
            marginBottom: "10px",
          }}
        >
          Productos más vendidos
        </h6>
      </Box>
      <Pie data={myData} />
      <Box>
        <Button
          variant="contained"
          sx={{ width: "100%", mt: 2, background: "#1B1AFF" }}
        >
          Ver todos
        </Button>
      </Box>
    </>
  );
};
export default MostSelled;
