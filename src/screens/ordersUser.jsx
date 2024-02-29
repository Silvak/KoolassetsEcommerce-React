import React from "react";
import { userData } from "../mock/userData";
import OrdersUser from "../components/orders/ordersUser.jsx";

function profileUser() {

  return (
    <div>
        <OrdersUser user={userData} />
    </div>
  );
}

export default profileUser;