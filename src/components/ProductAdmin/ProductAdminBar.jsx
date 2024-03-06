import React, { useState } from 'react';
import { Button, MenuItem, Select, TextField, Typography, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';

const theme = createTheme({
    components: {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    color: 'gray',
                    fontWeight: 400,
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    minWidth: 200,
                },
                icon: {
                    color: '#757575',
                },
            },
        },
    },
});

function ProductAdminBar() {
    const [orderBy, setOrderBy] = useState('');
    const [filterByValue, setFilterByValue] = useState('');
    const [filterByStatus, setFilterByStatus] = useState('');
    const matches = useMediaQuery('(max-width:600px)'); 

    const handleOrderByChange = (event) => {
        setOrderBy(event.target.value);
        console.log("Ordenar por:", event.target.value);
    };

    const handleFilterByValueChange = (event) => {
        setFilterByValue(event.target.value);
        console.log("Filtrar por valor:", event.target.value);
    };

    const handleFilterByStatusChange = (event) => {
        setFilterByStatus(event.target.value);
        console.log("Filtrar por estado:", event.target.value);
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: 50 }}>
                <div style={{ display: "flex" }}>
                    <ThemeProvider theme={theme}>
                        <TextField
                            size='small'
                            placeholder="#ID"
                            style={{ marginRight: 10, width: 100 }}
                        />
                        <Select
                            value={orderBy}
                            size='small'
                            onChange={handleOrderByChange}
                            style={{ minWidth: 200, marginRight: 10, color: "#757575" }}
                            displayEmpty
                        >
                            <MenuItem value="" style={{ display: 'none' }}>
                                Fecha
                            </MenuItem>
                            <MenuItem value="Ascendente">Ascendente</MenuItem>
                            <MenuItem value="Descendente">Descendente</MenuItem>
                        </Select>
                        <Select
                            size='small'
                            value={filterByValue}
                            onChange={handleFilterByValueChange}
                            style={{ minWidth: 200, marginRight: 10, color: "#757575" }}
                            displayEmpty
                        >
                            <MenuItem value="" style={{ display: 'none' }}>
                                Valor
                            </MenuItem>
                            <MenuItem value="$100-$1000">$100 a $1000</MenuItem>
                            <MenuItem value="$1000-$10000">$1k a $10k</MenuItem>
                            <MenuItem value="$10000-$100000">$10k a $100k</MenuItem>
                        </Select>
                        <Select
                            size='small'
                            value={filterByStatus}
                            onChange={handleFilterByStatusChange}
                            style={{ minWidth: 200, color: "#757575" }}
                            displayEmpty
                        >
                            <MenuItem value="" style={{ display: 'none' }}>
                                Estado
                            </MenuItem>
                            <MenuItem value="En espera">En espera</MenuItem>
                            <MenuItem value="Entregado">Entregado</MenuItem>
                            <MenuItem value="Cancelado">Cancelado</MenuItem>
                        </Select>
                    </ThemeProvider>
                </div>
                <Button variant="contained" disableRipple color='primary'>
                    Añadir
                </Button>
            </div>
        </>
    );
}

export default ProductAdminBar;
