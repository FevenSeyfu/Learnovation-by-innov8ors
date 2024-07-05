import React, { useEffect, useState } from 'react';
import { useDropdown } from '../../../Context/DropdownContext';
import arrowDownIcon from '../../../assets/images/icons/icon-down-arrow.svg';

const Dropdown = ({ id, label, options }) => {
  const { dropdownStates, toggleDropdown, updateSelectedValues } = useDropdown();
  const isOpen = dropdownStates[id] || false;
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (value) => {
    const updatedSelectedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter(option => option !== value)
      : [...selectedOptions, value];
    setSelectedOptions(updatedSelectedOptions);
  };

  useEffect(() => {
    updateSelectedValues(id, selectedOptions);
  }, [selectedOptions, id]);

  return (
    <div className="relative font-inter text-lg text-[#101828]">
      <div
        className="flex flex-row gap-4 cursor-pointer border rounded-full py-2 px-6"
        onClick={() => toggleDropdown(id)}
      >
        <span>{label}</span>
        <img src={arrowDownIcon} alt="arrow down icon" />
      </div>
      {isOpen && (
        <div className="absolute z-10 text-[#667085] mt-2 p-4 bg-white border rounded-2xl w-[270px] shadow-lg">
          {options.map((option) => (
            <div key={option.value} className="flex flex-row items-center gap-2">
              <input
                type="checkbox"
                name={`${label}Input`}
                value={option.value}
                checked={selectedOptions.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
              />
              <span className="font-medium text-sm">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
