import React from "react";
import { useDropdown } from "../../../Context/DropdownContext";
import arrowDownIcon from "../../../assets/images/icon-down-arrow.svg";
import CalendarDropdown from "./CalendarDropdown";

const Dropdown = ({ id, label, options }) => {
  const { dropdownStates, toggleDropdown } = useDropdown();
  const isOpen = dropdownStates[id] || false;

  return (
    <div className="relative font-inter text-lg text-[#101828]">
      <div
        className="flex flex-row gap-4 cursor-pointer border rounded-full py-2 px-6"
        onClick={() => toggleDropdown(id)}
      >
        <span>{label}</span>
        <img src={arrowDownIcon} alt="arrow down icon" />
      </div>
      {isOpen && label !== "Date" && label !== "Country" && (
        <div className="absolute z-10 text-[#667085] mt-2 p-4 bg-white border rounded-2xl w-[270px] shadow-lg">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex flex-row items-center gap-2"
            >
              <input
                type="checkbox"
                name={`${label}Input`}
                value={option.value}
              />
              <span className="font-medium text-sm">{option.label}</span>
            </div>
          ))}
        </div>
      )}
      {isOpen && label === "Country" && (
        <div className="absolute z-10 text-[#667085] mt-2 bg-white border rounded-2xl w-[270px] shadow-lg overflow-y-scroll h-[200px]">
          {options.map((option) => (
            <div
              key={option.value}
              className="pl-6 hover:bg-lightPurple hover:text-purple"
            >
              <span className="font-medium text-sm">{option.label}</span>
            </div>
          ))}
        </div>
      )}
      {isOpen && label === "Date" && (
        <div className="absolute z-10 text-[#667085] right-10 mt-2 pl-2 pb-4 bg-white border rounded-2xl w-[850px] shadow-lg">
          <CalendarDropdown />
        </div>
      )}
    </div>
  );
};

export default Dropdown;
