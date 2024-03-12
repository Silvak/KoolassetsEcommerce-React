import React from "react";
import { userData } from "../mock/userData";
import ProfileUser from "../components/profile/profileUser";

function profileUser() {
  return (
    <>
      <ProfileUser user={userData} />
    </>
  );
}

export default profileUser;
