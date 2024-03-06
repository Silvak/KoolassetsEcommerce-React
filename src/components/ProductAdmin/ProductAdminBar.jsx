import React, { useState } from 'react';
import { Button, Grid, MenuItem, Select, TextField, createTheme, useMediaQuery, ThemeProvider } from '@mui/material';


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

    const matches = useMediaQuery('(min-width:900px) and (max-width:1200px)'); 


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
        <Grid container spacing={2} alignItems="center" style={{paddingBottom: 8}}>
          <ThemeProvider theme={theme}>
            <Grid item xs={12} md={1.5}>
                <TextField
                    size='small'
                    placeholder="#ID"
                    fullWidth
                    style={{margin: 0, marginTop: matches ? 0 : 18}}
                />
            </Grid>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
            <Grid item xs={12} md={2}>
                <Select
                    value={orderBy}
                    size='small'
                    onChange={handleOrderByChange}
                    fullWidth
                    displayEmpty
                    style={{color:"#757575"}}
>
                    <MenuItem value="" style={{ display: 'none' }}>Fecha</MenuItem>
                    <MenuItem value="Ascendente">Ascendente</MenuItem>
                    <MenuItem value="Descendente">Descendente</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} md={2}>
                <Select
                    size='small'
                    value={filterByValue}
                    onChange={handleFilterByValueChange}
                    fullWidth
                    displayEmpty
                    style={{color:"#757575"}}
>
                    <MenuItem value="" style={{ display: 'none' }}>Valor</MenuItem>
                    <MenuItem value="$100-$1000">$100 a $1000</MenuItem>
                    <MenuItem value="$1000-$10000">$1k a $10k</MenuItem>
                    <MenuItem value="$10000-$100000">$10k a $100k</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} md={2}>
                <Select
                    size='small'
                    value={filterByStatus}
                    onChange={handleFilterByStatusChange}
                    fullWidth
                    displayEmpty
                    style={{color:"#757575"}}
>
                    <MenuItem value="" style={{ display: 'none' }}>Estado</MenuItem>
                    <MenuItem value="En espera">En espera</MenuItem>
                    <MenuItem value="Entregado">Entregado</MenuItem>
                    <MenuItem value="Cancelado">Cancelado</MenuItem>
                </Select>
            </Grid>
            </ThemeProvider>
            <Grid item xs={12} md={4.5} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" disableRipple color='primary' style={{marginTop: matches ? 0 : 10}}>
                    Añadir
                </Button>
            </Grid>
        </Grid>
    );
}

export default ProductAdminBar;
