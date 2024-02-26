import React from 'react';
import { Drawer } from '@mui/material';
import SidebarContent from './SidebarContent';

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose} >
      <div style={{ width: '300px', backgroundColor: '#f0f0f0', height: 'max-content', padding: '16px' }}>
        <SidebarContent />
      </div>
    </Drawer>
  );
};

export default Sidebar;
