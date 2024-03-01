import React from 'react'
import SidebarProfile from "../components/profile/sidebarProfile";
import ContentPaymentsMethods from "../components/PaymentsMethods/contentPaymentsMethods";
import RouteRelative from "../components/profile/route";

import { userData } from "../mock/userData";
function PaymentsMethods() {
  const user = userData[0]
  return (

    <div>
      <RouteRelative />
      <div style={{ display: "flex" }}>
        <SidebarProfile user={user} />
        <ContentPaymentsMethods />
      </div>
    </div>
  )
}

export default PaymentsMethods;