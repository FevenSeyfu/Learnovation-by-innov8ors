import React from 'react';
import { useLocation } from 'react-router-dom';
import SideBarExplore from '../../Explore/SideBarExplore';
import CourseInfoSidebar from '../../Course/CourseInfoSidebar';


const ExpandedLeftSideBar = () => {
  const location = useLocation();
  let content;

  if (location.pathname.includes('/explore')) {
    content = <SideBarExplore />;
  } else if (/^\/dashboard\/course\/\d+$/.test(location.pathname)) {
    content = <CourseInfoSidebar />;
  } 
  else {
    content = <div></div>;
  }

  return (
      <div className='h-full'>
        {content}
      </div>
  );
}

export default ExpandedLeftSideBar;