import React, { createContext, useContext, useState } from 'react';

const DropdownContext = createContext();

export const useDropdown = () => useContext(DropdownContext);

export const DropdownProvider = ({ children }) => {
  const [dropdownStates, setDropdownStates] = useState({});
  const [selectedValues, setSelectedValues] = useState({
    dateRange: { startDate: null, endDate: null }
  });

  const toggleDropdown = (id) => {
    setDropdownStates(prevStates => ({
      ...Object.keys(prevStates).reduce((acc, key) => {
        acc[key] = false; 
        return acc;
      }, {}),
      [id]: !prevStates[id]
    }));
  };

  const updateSelectedValues = (id, values) => {
    if (id === 'dateDropDown') {
      setSelectedValues(prevValues => ({
        ...prevValues,
        dateRange: values
      }));
    } else {
      setSelectedValues(prevValues => ({
        ...prevValues,
        [id]: values
      }));
    }
  };

  const updateDateSelection = (startDate, endDate) => {
    setSelectedValues(prevValues => ({
      ...prevValues,
      dateRange: { startDate, endDate }
    }));
  };

  return (
    <DropdownContext.Provider value={{ dropdownStates, toggleDropdown, selectedValues,updateSelectedValues, updateDateSelection }}>
      {children}
    </DropdownContext.Provider>
  );
};
