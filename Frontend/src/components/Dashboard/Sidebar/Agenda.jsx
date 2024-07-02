// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useSidebar } from "../../../Context/SidebarContext";

const Agenda = () => {
  const { toggleRightSidebar } = useSidebar();
  const { isRightSidebarExpanded } = useSidebar();
  return (
    <div className="h-screen border">
      <button onClick={toggleRightSidebar}>Your Plan</button>
      {isRightSidebarExpanded && (
        <div></div>
        )}
    </div>
  );
};

export default Agenda;
