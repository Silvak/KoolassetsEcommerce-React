import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/material";

import Sidebar from "@/components/Dashboard/Sidebar";
import Summary from "@/components/Dashboard/Summary";

const useStyles = makeStyles({
  container: {
    display: "flex",
    "@media (min-width: 800px)": {
      gap: "20px",
    },
  },
});

const DashboardPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Sidebar />
      <Summary />
    </Box>
  );
};
export default DashboardPage;
