import React from "react";
import SidebarProfile from "../../components/profile/sidebarProfile";
import OrderBodyUser from "./bodyUser";
import { userData } from "../../mock/userData";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

function OrdersUser() {
  const user = userData[0];
  return (
    <div>
      <Breadcrumb path="Mi cuenta" />
      <div style={{ display: "flex" }}>
        <SidebarProfile user={user} />
        <OrderBodyUser user={user} />
      </div>
    </div>
  );
}

export default OrdersUser;
