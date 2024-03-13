import React from 'react';
import { Drawer } from '@mui/material';
import SidebarContent from './SidebarContent';

const Sidebar = ({ open, onClose, onUpdatePath }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div style={{ width: '300px', backgroundColor: 'transparent', height: 'max-content', padding: '16px', overflowX:"hidden" }}>
        <SidebarContent onUpdatePath={onUpdatePath}/>
      </div>
    </Drawer>
  );
};

export default Sidebar;
