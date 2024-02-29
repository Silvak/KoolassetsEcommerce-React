import React from "react";
import SidebarProfile from "../../components/profile/sidebarProfile";
import RouteRelative from "../../components/profile/route";
import OrderBodyUser from "./bodyUser"
import { userData } from "../../mock/userData";


function OrdersUser() {
    const user = userData[0];
    return (
        <div>
            <RouteRelative />
            <div style={{ display: "flex" }}>
                <SidebarProfile user={user} />
                <OrderBodyUser user={user} />
            </div>
        </div>
    );
}

export default OrdersUser;
