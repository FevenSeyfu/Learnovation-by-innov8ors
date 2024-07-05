import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Dashboard/Header/Header';
import LeftSideBar from '../../Dashboard/Sidebar/LeftSideBar';
import { useSidebar } from '../../../Context/SidebarContext';
import ExpandedLeftSideBar from '../../Dashboard/Sidebar/ExpandedLeftSideBar';
import Agenda from '../../Dashboard/Sidebar/Agenda';
import ExploreHeader from '../../Explore/ExploreHeader';

const Layout = () => {
  const { isLeftSidebarExpanded, isRightSidebarExpanded } = useSidebar();

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="flex flex-1 overflow-hidden">
          <aside className="overflow-y-auto w-20">
            <LeftSideBar />
          </aside>
          {isLeftSidebarExpanded && (
            <aside className="overflow-y-auto w-auto  mt-[72px]">
              <ExpandedLeftSideBar />
            </aside>
          )}
          <div className="flex flex-col flex-1 overflow-hidden">
            <Header />
            <div className="flex-1 overflow-y-auto">
              <Outlet />
            </div>
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