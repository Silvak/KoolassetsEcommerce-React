import React from "react";
import Box from '@mui/material/Box';
import ProfileDetails from "./profileDetail";

function BodyUser({ user }) {
    return (
        <div style={{display:"flex", text:"center", alignItems:"center"}}>

        <Box sx={{
            marginLeft: { xs: 0, sm: 60, md: 60, lg: 60, xl: 60 },
            marginTop: 4,
            backgroundColor:"blue",
            minWidth: "30vw"
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20 }}>
                <img
                    src={user.image}
                    alt={`Foto de ${user.name}`}
                    style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        backgroundColor: "#ECECEC",
                        padding: 5
                    }}
                />
                <p style={{ color: "#000", fontSize: 32 }}>
                    {user.name.split(" ")[0]} {user.lastName.split(" ")[0]}
                </p>
                
                <p style={{ color: "#aaaaaa", fontWeight: 400, fontSize: 12, marginTop:10 }}>
                    {user.id}
                </p>
            </div>
            <ProfileDetails user={user}/>
        </Box>
                    </div>
    );
}

export default BodyUser;
