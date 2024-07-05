import React, { createContext, useContext, useState } from 'react';

const DropdownContext = createContext();

export const useDropdown = () => useContext(DropdownContext);

export const DropdownProvider = ({ children }) => {
  const [dropdownStates, setDropdownStates] = useState({});
  const [selectedValues, setSelectedValues] = useState({});

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
    setSelectedValues(prevValues => ({
      ...prevValues,
      [id]: values
    }));
  };

  return (
    <DropdownContext.Provider value={{ dropdownStates, toggleDropdown, selectedValues, updateSelectedValues }}>
      {children}
    </DropdownContext.Provider>
  );
};