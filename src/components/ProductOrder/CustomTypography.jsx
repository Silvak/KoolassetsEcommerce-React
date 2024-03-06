import React from 'react';
import { Typography } from '@mui/material';

const CustomTypographyTitle = ({ children }) => {
  return (
    <Typography variant="h6" style={{ fontWeight: 'bold', fontSize: 16, color: 'Black' }}>
      {children}
    </Typography>
  );
};

const CustomTypographyText = ({ children }) => {
  return (
    <Typography variant="h6" style={{ fontWeight: 'normal', fontSize: 16, color: 'black' }}>
      {children}
    </Typography>
  );
};

const CustomTypographyStatus = ({ children, color }) => {
  return (
    <Typography variant="h6" style={{ fontWeight: 'normal', fontSize: 16, color: color }}>
      {children}
    </Typography>
  );
};

export { CustomTypographyTitle, CustomTypographyText, CustomTypographyStatus };
