import { Box, Button } from "@mui/material";
import { formStyles } from "./styles";
import CustomInput from "../Input/CustomInput";

import { useState } from "react";

const options = [
  {
    id: 1,
    value: "entregado",
    label: "Entregado",
  },
  {
    id: 2,
    value: "enEspera",
    label: "En espera",
  },
  {
    id: 3,
    value: "cancelado",
    label: "Cancelado",
  },
];

const detailsOrderData = {
  product: "Samsung A54",
  username: "Jesus",
  orderId: "3333333",
  userId: "3333333",
  orderDate: "15/8/24",
  dateRegisterUser: "15/8/24",
  orderPrice: "30.000",
  ordersUser: "20",
  status: "Entregado",
};

const DetailsOrderForm = () => {
  const [status, setStatus] = useState(detailsOrderData.status.toLowerCase());
  const css = formStyles();

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Box component="form" className={css.form}>
      <CustomInput
        type="text"
        placeholder={detailsOrderData.product}
        id="product"
        label="Nombre del producto"
      />
      <CustomInput
        type="text"
        placeholder={detailsOrderData.username}
        id="username"
        label="Nombre de usuario"
      />
      <CustomInput
        type="text"
        placeholder={`#${detailsOrderData.orderId}`}
        id="orderId"
        label="ID del pedido"
      />
      <CustomInput
        type="text"
        placeholder={detailsOrderData.userId}
        id="userId"
        label="ID del usuario"
      />
      <CustomInput
        type="text"
        placeholder={detailsOrderData.orderDate}
        id="orderDate"
        label="Fecha de pedido"
      />
      <CustomInput
        type="text"
        placeholder={detailsOrderData.dateRegisterUser}
        id="dateRegisterUser"
        label="Fecha de registro del usuario"
      />
      <CustomInput
        type="text"
        placeholder={`$${detailsOrderData.orderPrice}`}
        id="priceOrder"
        label="Valor del pedido"
      />
      <CustomInput
        type="text"
        placeholder={detailsOrderData.ordersUser}
        id="ordersUser"
        label="Compras hechas por el usuario"
      />

      <Box>
        <label>Estado del pedido</label>
        <select
          className={`${css.select} ${css.gridItem} ${css[status]}`}
          value={status}
          onChange={handleChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Box>

      <Button variant="contained" className={`${css.btn} ${css.gridItem}`}>
        Guardar
      </Button>
    </Box>
  );
};
export default DetailsOrderForm;
