import React from "react";
import searchIcon from "../../assets/images/icons/icon-search.svg";

import { useLocation } from "react-router-dom";
import SecondHeader from "../Dashboard/Header/SecondHeader";
import Dropdown from "../utility/Dropdown/Dropdown";
import CalendarDropdown from "../utility/Dropdown/CalendarDropdown";

const ExploreHeader = () => {
  const courseOptions = [
    { label: "Business", value: "business" },
    { label: "Design", value: "design" },
    { label: "Information Technology", value: "it" },
    { label: "Coding", value: "coding" },
    { label: "Health", value: "health" },
  ];

  const levelOptions = [
    { label: "Beginner", value: "beginner" },
    { label: "Intermediate", value: "intermediate" },
    { label: "Advanced", value: "advanced" },
  ];

  const eventOptions = [
    { label: "Hackathon", value: "hackathon" },
    { label: "Pitch", value: "pitch" },
    { label: "Challenges", value: "challenges" },
    { label: "Conference", value: "conference" },
    { label: "Workshop", value: "workshop" },
    { label: "Networking", value: "networking" },
  ];

  const countryOptions = [
    { label: "Australia", value: "au" },
    { label: "Brazil", value: "br" },
    { label: "Canada", value: "ca" },
    { label: "China", value: "cn" },
    { label: "France", value: "fr" },
    { label: "Germany", value: "de" },
    { label: "India", value: "in" },
    { label: "Italy", value: "it" },
    { label: "Japan", value: "jp" },
    { label: "Mexico", value: "mx" },
    { label: "Russia", value: "ru" },
    { label: "South Africa", value: "za" },
    { label: "South Korea", value: "kr" },
    { label: "United Kingdom", value: "uk" },
    { label: "United States", value: "us" }
  ];
  

  const yrsofExpOptions = [
    { label: "Less than 1 year", value: "0-1" },
    { label: "1 to 3 years", value: "1-3" },
    { label: "3 to 5 years", value: "3-5" },
    { label: "More than 5 years", value: "5+" },
  ];
  const location = useLocation();
  const getHeading = () => {
    if (location.pathname.includes("/explore/courses")) {
      return "Courses";
    } else if (location.pathname.includes("/explore/events")) {
      return "Events";
    } else if (location.pathname.includes("/explore/mentors")) {
      return "Mentors";
    }
  };

  const renderSearchForm = () => {
    if (
      location.pathname.includes("/explore/courses") ||
      location.pathname.includes("/explore/events")
    ) {
      return (
        <form>
          <div className="relative">
            <img
              src={searchIcon}
              alt="search icon"
              className="absolute left-[10px] top-1/2 -translate-y-1/2 pointer-events-none"
            />
            <input
              type="search"
              id="default-search"
              placeholder="Search"
              className="block w-full p-2 pl-10 text-sm border border-zinc-200 rounded-lg bg-white focus:border-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>
        </form>
      );
    }
    return <div className="flex-grow"></div>;
  };

  const renderDropdowns = () => {
    if (location.pathname.includes("/explore/courses")) {
      return (
        <>
          <Dropdown id={'courseCategory'} label="Category" options={courseOptions} />
          <Dropdown id={'courseLevel'} label="Level" options={levelOptions} />
        </>
      );
    } else if (location.pathname.includes("/explore/events")) {
      return (
        <>
          <Dropdown id={'eventCategoryDropdown'} label="Category" options={eventOptions} />
          <Dropdown id={'dateDropDown'} label="Date" options={ ''} />
        </>
      );
    } else if (location.pathname.includes("/explore/mentors")) {
      return (
        <>
          <Dropdown id={'countryDropdown'} label="Country" options={countryOptions} />
          <Dropdown id={'yrsOfExpDropdown'} label="Years of Exp" options={yrsofExpOptions} />
        </>
      );
    }
  };

  return (
    <header className="flex flex-col gap-4 px-8 py-4">
      <SecondHeader title={getHeading()} subtitle={'Oneliner'}/>
      <div className="flex flex-row justify-between">
        {renderSearchForm()}
        <div className="flex flex-row gap-2">{renderDropdowns()}</div>
      </div>
    </header>
  );
};

export default ExploreHeader;
