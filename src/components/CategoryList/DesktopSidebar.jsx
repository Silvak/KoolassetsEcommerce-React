import React from 'react';
import SidebarContent from './SidebarContent';

const DesktopSidebar = ({ onUpdatePath }) => {
  return (
    <div style={{ height: "auto", padding: '16px', marginRight: 30 }}>
      <SidebarContent onUpdatePath={onUpdatePath}/>
    </div>
  );
};

export default DesktopSidebar;
