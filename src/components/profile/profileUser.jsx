import React from "react";
import SidebarProfile from "./sidebarProfile";
import RouteRelative from "./route";
import BodyUser from "./bodyUser"
import { userData } from "../../mock/userData";


function ProfileUser() {
    const user = userData[0];
    return (
        <div>
            <RouteRelative />
            <div style={{ display: "flex" }}>
                <SidebarProfile user={user} />
                <BodyUser user={user} />
            </div>
        </div>
    );
}

export default ProfileUser;
