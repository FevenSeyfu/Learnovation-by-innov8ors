import React from 'react';
import { useLocation } from 'react-router-dom';
import SideBarModule from '../../Course/SideBarModule';
import SideBarExplore from '../../Explore/SideBarExplore';

const ExpandedLeftSideBar = () => {
  const location = useLocation();
  let content;
  if (location.pathname.includes('/explore')) {
    content = <SideBarExplore />;
  } else if (/^\/dashboard\/course\/\d+$/.test(location.pathname)) {
    content = <SideBarModule />;
  } else {
    content = <div>No sidebar content available for this route.</div>;
  }
  

  return (
    <div className=' '>
      {content}
    </div>
  );
}

export default ExpandedLeftSideBar;