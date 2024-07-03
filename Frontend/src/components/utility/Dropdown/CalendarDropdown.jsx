import React, { useState } from "react";
import ButtonPrimary from "../Button/ButtonPrimary";
import ButtonSecondary from "../Button/ButtonSecondary";
import Calendar from "../Calender";
import { useDropdown } from "../../../Context/DropdownContext";

const CalendarDropdown = ({ id, label, options }) => {
    const { dropdownStates, toggleDropdown } = useDropdown();
    const isOpen = dropdownStates[id] || false;
  const [selectedRange, setSelectedRange] = useState("All time");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleRangeSelect = (range) => {
    // Update startDate and endDate based on the selected range
    setSelectedRange(range);
  };

  const applySelection = () => {
    // Handle the application of the selected date range
  };

  const cancelSelection = () => {
    // Handle cancellation
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <ul>
          <li>
            <a href="#">Today</a>
          </li>
          <li>
            <a href="#">Yesterday</a>
          </li>
          <li>
            <a href="#">This Week</a>
          </li>
          <li>
            <a href="#">Last Week</a>
          </li>
          <li>
            <a href="#">This Month</a>
          </li>
          <li>
            <a href="#">Last Week</a>
          </li>
          <li>
            <a href="#">This Month</a>
          </li>
          <li>
            <a href="#">Last Year</a>
          </li>
          <li>
            <a href="#">All time</a>
          </li>
        </ul>
        <div className="flex flex-row">
          <div id="start-date">
          <Calendar />
          </div>
          <div id="end-date">
          <Calendar />
          </div>
        </div>
      </div>
      <div>
        <div id="start-endDate-output"></div>
        <div id="actions">
            <ButtonSecondary color={'gray'} onClick={cancelSelection}>Cancel</ButtonSecondary>
            <ButtonPrimary onClick={applySelection}>Apply</ButtonPrimary>
      </div>
      </div>
    </div>
  );
};

export default CalendarDropdown;
