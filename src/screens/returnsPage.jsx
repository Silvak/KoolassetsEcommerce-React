import React from "react";
import SidebarProfile from "../components/profile/sidebarProfile";
import ContentPaymentsMethods from "../components/PaymentsMethods/contentPaymentsMethods";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { userData } from "../mock/userData";
import ReturnsView from "../components/returns/returnsView";


function ReturnsPage() {
  const user = userData[0];
  return (

    <div style={{ padding: "0 90px"}}>
      <Breadcrumb path="Devoluciones" />
      <div style={{ display: "flex" }}>
        <SidebarProfile user={user} />
        <ReturnsView />
      </div>
    </div>
  );
}

export default ReturnsPage;
