import React, { useState } from "react";
import { IconButton, List, Box, ListItemText, Typography, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RestoreIcon from '@mui/icons-material/Restore';
import CancelIcon from '@mui/icons-material/Cancel';

const SidebarProfile = ({ user }) => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const [open, setOpen] = useState(!isMobile); 

    const handleToggleSidebar = () => {
        setOpen(!open);
    };

    return (
        
        <Box style={{ position: 'relative' }}>
            {isMobile && (
                <IconButton
                    onClick={handleToggleSidebar}
                    style={{ position: 'absolute', top: '8px', left: '8px', backgroundColor: 'transparent', padding: '0px', zIndex: 999 }}
                >
                    <MenuIcon />
                </IconButton>
            )}

            {/* Sidebar */}
            <Box sx={{
                position: 'fixed',
                top: !isMobile ? 100 : 0,
                left: isMobile ? (open ? 0 : '-100%') : 160,
                backgroundColor: 'red',
                height: '100vh',
                width: 250,
                zIndex: 1000,
                transition: 'left 0.3s ease-in-out',
                paddingLeft: 1,
                paddingBlock: 2 
            }}>

                <List sx={{ color: "#000" }}>
                    {/* Datos de usuario */}
                    <Typography variant="h6" style={{ fontSize: "24px", marginBottom: 20 }}>Hola, {user.name.split(" ")[0]}</Typography>
                    <Typography variant="h6" style={{ fontSize: "18px", marginBottom: 10 }}>Administrar mi cuenta</Typography>
                    <Box sx={{ ml: 4, mb: 8, mt:2 }}>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 24, color:"gray" }}>
                            <AccountCircleIcon sx={{ marginRight: 1 }} />
                            <Typography variant="h6" style={{ fontSize: "14px", color: "gray",  }}>Mi perfil</Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 24, color:"gray" }}>
                            <PaymentIcon sx={{ marginRight: 1 }} />
                            <Typography variant="h4" style={{ fontSize: "14px", color: "gray",  }}>Método de pago</Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 24, color:"gray" }}>
                            <LogoutIcon sx={{ marginRight: 1 }} />
                            <Typography variant="h4" style={{ fontSize: "14px", color: "gray" }}>Cerrar sesión</Typography>
                        </div>
                    </Box>

                    <Typography variant="h6" style={{ fontSize: "18px", marginBottom: 10 }}>Mis órdenes</Typography>
                    <Box sx={{ ml: 4, mt:2 }}>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 24, color:"gray" }}>
                            <ShoppingCartIcon sx={{ marginRight: 1 }} />
                            <Typography variant="h6" style={{ fontSize: "14px", color: "gray",  }}>Estado actual</Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 24, color:"gray" }}>
                            <RestoreIcon sx={{ marginRight: 1 }} />
                            <Typography variant="h4" style={{ fontSize: "14px", color: "gray",  }}>Devoluciones</Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 24, color:"gray" }}>
                            <CancelIcon sx={{ marginRight: 1 }} />
                            <Typography variant="h4" style={{ fontSize: "14px", color: "gray" }}>Cancelaciones</Typography>
                        </div>
                    </Box>
                </List>
            </Box>

            {/* Capa semi-transparente */}
            {isMobile && open && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 999,
                    }}
                    onClick={() => setOpen(false)}
                />
            )}
        </Box>
    );
};

export default SidebarProfile;
