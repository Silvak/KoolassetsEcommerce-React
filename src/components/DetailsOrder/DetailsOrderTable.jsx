import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Hidden,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {
  CustomTypographyStatus,
  CustomTypographyText,
  CustomTypographyTitle,
} from "@/components/ProductOrder/CustomTypography";
import products from "@/mock/orderListDashboard";
import { getColor } from "@/utils/getColorStatus";

const DetailsOrderTable = () => {
  const detailsOrder = products[0];

  const handleClickDetails = () => {
    alert("Hice click en detalles");
  };
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0px 2px 10px 0px #00000026",
        border: "2px solid #DFDFDF",
        borderRadius: "6px",
        mt: 4,
      }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ background: "none" }}>
                <CustomTypographyTitle>Nombre</CustomTypographyTitle>
              </TableCell>
              <Hidden only={["xs", "sm"]}>
                <TableCell style={{ background: "none" }}>
                  <CustomTypographyTitle>ID Órden</CustomTypographyTitle>
                </TableCell>
                <TableCell style={{ background: "none" }}>
                  <CustomTypographyTitle>Fecha</CustomTypographyTitle>
                </TableCell>
                <TableCell style={{ background: "none" }}>
                  <CustomTypographyTitle>ID Usuario</CustomTypographyTitle>
                </TableCell>
                <TableCell style={{ background: "none" }}>
                  <CustomTypographyTitle>Status</CustomTypographyTitle>
                </TableCell>
              </Hidden>
              <TableCell style={{ background: "none" }}>
                <CustomTypographyTitle>Valor</CustomTypographyTitle>
              </TableCell>
              <TableCell style={{ background: "none" }}>
                <CustomTypographyTitle>Detalles</CustomTypographyTitle>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={detailsOrder.id}>
              <TableCell style={{ border: "none" }} size="small">
                <CustomTypographyText>{detailsOrder.name}</CustomTypographyText>
              </TableCell>
              <Hidden only={["xs", "sm"]}>
                <TableCell style={{ border: "none" }}>
                  <CustomTypographyText>
                    {detailsOrder.orderId}
                  </CustomTypographyText>
                </TableCell>
                <TableCell style={{ border: "none" }} size="small">
                  <CustomTypographyText>
                    {detailsOrder.date}
                  </CustomTypographyText>
                </TableCell>
                <TableCell style={{ border: "none" }} size="small">
                  <CustomTypographyText>
                    {detailsOrder.userId}
                  </CustomTypographyText>
                </TableCell>
                <TableCell style={{ border: "none" }} size="small">
                  <CustomTypographyStatus color={getColor(detailsOrder.status)}>
                    {detailsOrder.status}
                  </CustomTypographyStatus>
                </TableCell>
              </Hidden>
              <TableCell style={{ border: "none" }} size="small">
                <CustomTypographyText>
                  {detailsOrder.value}
                </CustomTypographyText>
              </TableCell>
              <TableCell style={{ border: "none" }} size="small">
                <button
                  className="DetailsLink"
                  style={{
                    cursor: "pointer",
                    border: "none",
                    background: "none",
                    fontSize: 16,
                    color: "#000",
                  }}
                  onClick={handleClickDetails}
                >
                  <Hidden only={["md", "lg", "xl"]}>
                    <IconButton aria-label="Detalles">
                      <MoreVertIcon />
                    </IconButton>
                  </Hidden>
                  <Hidden only={["xs", "sm"]}>{detailsOrder.options}</Hidden>
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
export default DetailsOrderTable;
