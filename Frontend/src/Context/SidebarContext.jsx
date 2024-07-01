import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [isLeftSidebarExpanded, setLeftSidebarExpanded] = useState(false);
  const [isRightSidebarExpanded, setRightSidebarExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Define the routes that should expand the left sidebar
    const expandRoutes = ['/explore/courses', '/explore/events', '/explore/mentors', '/course/:id'];
    const shouldExpand = expandRoutes.some(route => location.pathname.includes(route.replace(':id', '')));
    setLeftSidebarExpanded(shouldExpand);
  }, [location]);

  const toggleRightSidebar = () => setRightSidebarExpanded(!isRightSidebarExpanded);

  return (
    <SidebarContext.Provider value={{ isLeftSidebarExpanded, isRightSidebarExpanded, toggleRightSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};