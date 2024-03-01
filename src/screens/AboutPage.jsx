import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs';
import { Typography } from "@mui/material";
import AboutMembers from '../components/AboutUs/AboutMembers';

function AboutPage() {
  return (
    <div>
        <div style={{ marginLeft: "6vw", padding: "0px", marginTop: 12 }}>
                <Typography
                    variant="h6"
                    style={{ fontSize: "12px", color: "gray", marginBlock: "20px" }}
                >
                    Inicio / <span style={{ color: "#000" }}>Acerca de nosotros</span>
                </Typography> 
        </div>
        <div>
            <AboutUs />
        </div>
        {/* Members Info */}
        <div style={{marginTop: "100px", display: "flex", justifyContent: "center"}}>
            <AboutMembers />
        </div>
    </div>
  )
}

export default AboutPage;