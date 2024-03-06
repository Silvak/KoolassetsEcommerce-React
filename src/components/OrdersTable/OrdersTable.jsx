import { makeStyles } from "@material-ui/core";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: "#FFF",
  },
  head: {
    backgroundColor: "none",
  },
  row: {
    backgroundColor: "none",
  },
});

const rows = [
  {
    producto: "Producto 1",
    idOrden: "12345",
    fecha: "2023-03-08",
    idUsuario: "123",
    estado: "Pendiente",
    valor: "$100",
    opciones: "Ver detalles",
  },
  {
    producto: "Producto 2",
    idOrden: "67890",
    fecha: "2023-03-09",
    idUsuario: "456",
    estado: "En curso",
    valor: "$200",
    opciones: "Ver detalles",
  },
];

const OrdersTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead className={classes.head}>
          <TableRow className={classes.row}>
            <TableCell>Producto</TableCell>
            <TableCell>ID órden</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>ID Usuario</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell>Opciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.idOrden} className={classes.row}>
              <TableCell>{row.producto}</TableCell>
              <TableCell>{row.idOrden}</TableCell>
              <TableCell>{row.fecha}</TableCell>
              <TableCell>{row.idUsuario}</TableCell>
              <TableCell>{row.estado}</TableCell>
              <TableCell>{row.valor}</TableCell>
              <TableCell>
                <Button>{row.opciones}</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default OrdersTable;
