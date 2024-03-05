import React from 'react';
import SidebarContent from './SidebarContent';

const DesktopSidebar = ({ onUpdatePath }) => {
  return (
    <div style={{ width:'8vw', height: "auto", padding: '16px' }}>
      <SidebarContent onUpdatePath={onUpdatePath}/>
    </div>
  );
};

export default DesktopSidebar;
