import React from "react";
import courseIcon from "../../assets/images/icon-courses.svg";
import eventsIcon from "../../assets/images/icon-events.svg";
import mentorsIcon from "../../assets/images/icon-mentors.svg";
import { NavLink } from "react-router-dom";

const SideBarExplore = () => {
  return (
    <ul
      className="py-6 px-2 border font-inter font-medium text-base text-[#101828]"
      style={{ height: "calc(100vh - 72px)" }}
    >
      <li>
        <NavLink
          to={"/dashboard/explore/courses"}
          className={({ isActive }) =>
            isActive ? "flex flex-row gap-2 rounded-lg text-left pl-4 pr-16 py-2 bg-[#F2F4F7] " : "flex flex-row gap-2 pl-4 pr-16 py-2"
          }
        >
          <img src={courseIcon} alt="course's icon" />
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/explore/events"}
          className={({ isActive }) =>
            isActive ? "flex flex-row gap-2 rounded-lg text-left pl-4 pr-16 py-2 bg-[#F2F4F7] " : "flex flex-row gap-2 pl-4 pr-16 py-2"
          }
        >
          <img src={eventsIcon} alt="event's icon" />
          Events
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/explore/mentors"}
          className={({ isActive }) =>
            isActive ? "flex flex-row gap-2 rounded-lg text-left pl-4 pr-16 py-2 bg-[#F2F4F7] " : "flex flex-row gap-2 pl-4 pr-16 py-2"
          }
        >
          <img src={mentorsIcon} alt="mentor's icon" />
          Mentors
        </NavLink>
      </li>
    </ul>
  );
};

export default SideBarExplore;
