// src/components/Dashboard/Sidebar/ExpandedLeftSideBar.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import SideBarExplore from '../../Explore/SideBarExplore';
import CourseInfoSidebar from '../../Course/CourseInfoSidebar';
import CourseEnrolledSidebar from '../../Course/CourseEnrolledSidebar';


const ExpandedLeftSideBar = () => {
  const location = useLocation();
  let content;

  if (location.pathname.includes('/explore')) {
    content = <SideBarExplore />;
  } else if (/^\/dashboard\/course\/\d+$/.test(location.pathname)) {
    content = <CourseInfoSidebar />;
  } else if (/^\/course\/\d+\/(advanced-design-concepts|design-thinking-and-strategy|creative-problem-solving)\/(video|reading|quiz|assignment)$/.test(location.pathname)) {
    content = <CourseEnrolledSidebar />;
  } else {
    content = <div>No sidebar content available for this route.</div>;
  }

  return (
      <div className='h-full'>
        {content}
      </div>
  );
}

export default ExpandedLeftSideBar;