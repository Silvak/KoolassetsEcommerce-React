import React from "react";
import SidebarProfile from "../components/profile/sidebarProfile";
import ContentPaymentsMethods from "../components/PaymentsMethods/contentPaymentsMethods";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

import { userData } from "../mock/userData";
function PaymentsMethods() {
  const user = userData[0];
  return (
    <div>
      <Breadcrumb path="Mi cuenta" />
      <div style={{ display: "flex" }}>
        <SidebarProfile user={user} />
        <ContentPaymentsMethods />
      </div>
    </div>
  );
}

export default PaymentsMethods;
