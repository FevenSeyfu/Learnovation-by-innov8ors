import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [isLeftSidebarExpanded, setLeftSidebarExpanded] = useState(false);
  const [isRightSidebarExpanded, setRightSidebarExpanded] = useState(false);

  const toggleLeftSidebar = () => setLeftSidebarExpanded(!isLeftSidebarExpanded);
  const toggleRightSidebar = () => setRightSidebarExpanded(!isRightSidebarExpanded);

  return (
    <SidebarContext.Provider value={{ isLeftSidebarExpanded, isRightSidebarExpanded, toggleLeftSidebar, toggleRightSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};