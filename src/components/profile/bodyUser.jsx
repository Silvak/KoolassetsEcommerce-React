import React from "react";
import {Box, useMediaQuery} from '@mui/material/';
import ProfileDetails from "./profileDetail";


function BodyUser({ user }) {
    const isMobile = useMediaQuery("(max-width:600px)");
    return (
        <div style={{ display: "flex", text: "center", alignItems:"flex-start" }}>
            <Box sx={{
                marginLeft: { xs: 0, sm: 15, md: 15, lg: 15, xl: 15 },
                marginTop: isMobile ? 0 : "-2rem",
                minWidth: "30vw",
                maxWidth: "85%",
                padding:"5%",
                height:"97vh"

            }}>
                <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20 }}>
                    <img
                        src={user.image}
                        alt={`Foto de ${user.name}`}
                        style={{
                            width: 64,
                            height: 64,
                            borderRadius: "50%",
                            backgroundColor: "#ECECEC",
                            padding: 5
                        }}
                    />
                    <p style={{ color: "#000", fontSize: 32 }}>
                        {user.name.split(" ")[0]} {user.lastName.split(" ")[0]}
                    </p>

                    <p style={{ color: "#aaaaaa", fontWeight: 400, fontSize: 12, marginTop: 10 }}>
                        {user.id}
                    </p>
                </div>
                <ProfileDetails user={user} />
            </Box>
        </div>
    );
}

export default BodyUser;
