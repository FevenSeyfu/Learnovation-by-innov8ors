import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Dashboard/Header/Header';
import LeftSideBar from '../../Dashboard/Sidebar/LeftSideBar';
import RightSideBar from '../../Dashboard/Sidebar/Agenda';
import { useSidebar } from '../../../Context/SidebarContext';
import ExpandedLeftSideBar from '../../Dashboard/Sidebar/ExpandedLeftSideBar';
import Agenda from '../../Dashboard/Sidebar/Agenda';

const Layout = () => {
  const { isLeftSidebarExpanded, isRightSidebarExpanded } = useSidebar();

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-1 overflow-hidden">
          <aside className="overflow-y-auto w-20">
            <LeftSideBar />
          </aside>
          {isLeftSidebarExpanded && (
            <aside className="overflow-y-auto w-[277px] mt-[72px]">
              <ExpandedLeftSideBar />
            </aside>
          )}
          <div className="flex flex-col flex-1 overflow-hidden">
            <Header />
            <main className="flex-1 overflow-y-auto">
              <Outlet />
            </main>
          </div>
          <aside className={`overflow-y-auto  ${isRightSidebarExpanded ? ' w-[515px]' : 'w-20'}`}>
            <Agenda />
          </aside>
        </div>
      </div>
    </>
  );
};
export default Layout;