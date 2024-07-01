import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Dashboard/Header/Header';
import LeftSideBar from '../../Dashboard/Sidebar/LeftSideBar';
import RightSideBar from '../../Dashboard/Sidebar/RightSideBar';
import { SidebarProvider,useSidebar } from '../../../Context/SidebarContext';

const Layout = () => {
  const { isLeftSidebarExpanded, isRightSidebarExpanded } = useSidebar();
  const leftSidebarWidth = isLeftSidebarExpanded ? '277px' : '20px';
  const rightSidebarWidth = isRightSidebarExpanded ? '277px' : '20px';

  return (
    <SidebarProvider>
      <div className="flex flex-col h-screen">
        <div className="flex flex-1 overflow-hidden">
          <aside className={`border overflow-y-auto`} style={{ width: leftSidebarWidth }}>
            <LeftSideBar />
          </aside>
          <div className="flex flex-col flex-1" style={{ marginLeft: leftSidebarWidth, marginRight: rightSidebarWidth }}>
            <Header className="w-auto" />
            <main className="flex-1 overflow-y-auto">
              <Outlet />
            </main>
          </div>
          <aside className={`border overflow-y-auto`} style={{ width: rightSidebarWidth }}>
            <RightSideBar />
          </aside>
        </div>
      </div>
    </SidebarProvider>
  );
};
export default Layout;
