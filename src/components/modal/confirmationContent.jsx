import React from 'react';
import PropTypes from 'prop-types';
import { useBoundStore } from '../../stores/index';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

function ConfirmationContent({ onClose }) {
    const { setModal } = useBoundStore();
    const navigate = useNavigate();

    const handleConfirm = () => {
        navigate("/");
        onClose();
    }

    const handleCancel = () => {
        setModal({ stateModal: false, contentModal: null });
        onClose();
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", textAlign: "center", paddingInline: 12, paddingBlock: 18 }}>
            <Typography variant='h6' sx={{ color: "#000", fontSize: { xs: "20px", md: "28px" }, fontWeight: 500, marginBottom: 4 }}>¿Estás seguro que deseas cerrar sesión?</Typography>
            <div>
                <Button variant="contained" sx={{ backgroundColor: "#1B1AFF", width: { xs: 120, md: "max-content" }, mr: 1, paddingInline: "5%", fontSize: "18px", borderRadius: "5px" }} onClick={handleCancel}>¡Me quedo!</Button>
                <Button variant="outlined" sx={{ color: "#1B1AFF", border: "1px solid #1B1AFF", ml: 1, fontWeight: 700, fontSize: "18px", borderRadius: "5px" }} onClick={handleConfirm}>Sí, cerrar sesión.</Button>
            </div>
        </div>
    );
}

ConfirmationContent.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default ConfirmationContent;
