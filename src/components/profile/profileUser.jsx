import React from "react";
import SidebarProfile from "./sidebarProfile";
import BodyUser from "./bodyUser";
import { userData } from "../../mock/userData";

import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

function ProfileUser() {
  const user = userData[0];
  return (
    <div>
      <Breadcrumb path="Mi cuenta" />
      <div style={{ display: "flex" }}>
        <SidebarProfile user={user} />
        <BodyUser user={user} />
      </div>
    </div>
  );
}

export default ProfileUser;
