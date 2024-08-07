import React, { useState } from 'react';
import { useDropdown } from '../../../Context/DropdownContext';
import arrowDownIcon from '../../../assets/images/icons/icon-down-arrow.svg';
import CalendarDropdown from "./CalendarDropdown";

const Dropdown = ({ id, label, options }) => {
  const { dropdownStates, toggleDropdown, updateSelectedValues, updateDateSelection } = useDropdown();
  const isOpen = dropdownStates[id] || false;
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleCheckboxChange = (value) => {
    const updatedSelectedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter(option => option !== value)
      : [...selectedOptions, value];
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleCountrySelect = (value) => {
    updateSelectedValues(id, [value]);
    toggleDropdown(id); 
  };

  const handleDateSelect = (date, isStartDate) => {
    if (isStartDate) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  const applyDateSelection = () => {
    updateDateSelection( startDate, endDate);
    toggleDropdown(id);
  };

  const cancelDateSelection = () => {
    toggleDropdown(id);
  };

  return (
    <div className="relative font-inter text-lg text-[#101828] dark:text-white">
      <div
        className="flex flex-row gap-4 cursor-pointer border rounded-full py-2 px-6 dark:border-neutral-200"
        onClick={() => toggleDropdown(id)}
      >
        <span>{label}</span>
        <img src={arrowDownIcon} alt="arrow down icon" />
      </div>
      {isOpen && label !== "Date" && label !== "Country" && (
        <div className="absolute z-10 text-[#667085] mt-2 p-4 bg-white border rounded-2xl w-[270px] shadow-lg dark:bg-gray-900 dark:border-neutral-800">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex flex-row items-center gap-2"
            >
              <input
                type="checkbox"
                name={`${label}Input`}
                value={option.value}
                checked={selectedOptions.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
              />
              <span className="font-medium text-sm dark:text-white">{option.label}</span>
            </div>
          ))}
        </div>
      )}
      {isOpen && label === "Country" && (
        <div className="absolute z-10 text-[#667085] mt-2 bg-white border rounded-2xl w-[270px] shadow-lg overflow-y-scroll h-[200px] dark:bg-gray-900 dark:border-neutral-800">
          {options.map((option) => (
            <div
              key={option.value}
              className="pl-6 hover:bg-lightPurple hover:text-purple dark:hover:bg-neutral-700 dark:hover:text-neutral-200"
            >
              <span className="font-medium text-sm dark:text-white" 
              onClick={() => handleCountrySelect(option.label)}>{option.label}</span>
            </div>
          ))}
        </div>
      )}
      {isOpen && label === "Date" && (
        <div className="absolute z-10 text-[#667085] right-10 mt-2 pl-2 pb-4  border rounded-2xl w-[850px] shadow-lg dark:bg-gray-900 dark:border-neutral-800">
          <CalendarDropdown 
            startDate={startDate}
            endDate={endDate}
            onDateSelect={handleDateSelect}
            onApply={applyDateSelection}
            onCancel={cancelDateSelection}
          />
        </div>
      )}
    </div>
  );
};

export default Dropdown;