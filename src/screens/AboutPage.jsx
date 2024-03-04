import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import { Typography } from "@mui/material";
import AboutMembers from "../components/AboutUs/AboutMembers";

import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

function AboutPage() {
  return (
    <div>
      <Breadcrumb path="Acerca de nosotros" />
      <AboutUs />
      {/* Members Info */}
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <AboutMembers />
      </div>
    </div>
  );
}

export default AboutPage;
