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
                width: '25vw', // Cambio aquí a vw para el ancho mínimo adaptable
                zIndex: 1000,
                transition: 'left 0.3s ease-in-out',
                paddingLeft: '1vw', // Cambio aquí a vw para el padding adaptable
                paddingBlock: '2vh' // Cambio aquí a vh para el padding adaptable
            }}>

                <List sx={{ color: "#000" }}>
                    {/* Datos de usuario */}
                    <Typography variant="h6" style={{ fontSize: "3vw", marginBottom: '2vh', minWidth: '15vw' }}>Hola, {user.name.split(" ")[0]}</Typography>
                    <Typography variant="h6" style={{ fontSize: "2vw", marginBottom: '1vh', minWidth: '15vw' }}>Administrar mi cuenta</Typography>
                    <Box sx={{ ml: '4vw', mb: '8vh', mt: '2vh' }}>
                        <div style={listItemStyles}>
                            <AccountCircleIcon sx={iconStyles} />
                            <Typography variant="h6" style={customTypography}>Mi perfil</Typography>
                        </div>
                        <div style={listItemStyles}>
                            <PaymentIcon sx={iconStyles} />
                            <Typography variant="h6" style={customTypography}>Método de pago</Typography>
                        </div>
                        <div style={listItemStyles}>
                            <LogoutIcon sx={iconStyles} />
                            <Typography variant="h6" style={customTypography}>Cerrar sesión</Typography>
                        </div>
                    </Box>

                    <Typography variant="h6" style={{ fontSize: "2vw", marginBottom: '1vh', minWidth: '15vw' }}>Mis órdenes</Typography>
                    <Box sx={{ ml: '4vw', mt: '2vh' }}>
                        <div style={listItemStyles}>
                            <ShoppingCartIcon sx={iconStyles} />
                            <Typography variant="h6" style={customTypography}>Estado actual</Typography>
                        </div>
                        <div style={listItemStyles}>
                            <RestoreIcon sx={iconStyles} />
                            <Typography variant="h6" style={customTypography}>Devoluciones</Typography>
                        </div>
                        <div style={listItemStyles}>
                            <CancelIcon sx={iconStyles} />
                            <Typography variant="h6" style={customTypography}>Cancelaciones</Typography>
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


const listItemStyles = {
    display: "flex",
    alignItems: "center",
    marginBottom: '2vh', // Cambio aquí a vh para el margen inferior adaptable
    color: "gray"
};

const customTypography = {
    fontSize: "1.4vw", // Cambio aquí a vw para el tamaño de fuente adaptable
    color: "gray",
    minWidth: '15vw' // Cambio aquí a vw para el ancho mínimo adaptable
};

const iconStyles = {
    marginRight: '1vw' // Cambio aquí a vw para el margen derecho adaptable
};

export default SidebarProfile;
