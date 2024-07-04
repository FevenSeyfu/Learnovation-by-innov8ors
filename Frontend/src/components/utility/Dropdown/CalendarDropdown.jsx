import React, { useState } from "react";
import ButtonPrimary from "../Button/ButtonPrimary";
import ButtonSecondary from "../Button/ButtonSecondary";
import Calendar from "../Calender";
import { useDropdown } from "../../../Context/DropdownContext";
import DateRangeLinks from "../DateRangeLinks";
import { format } from 'date-fns';

const CalendarDropdown = ({ id, label, options }) => {
  const { dropdownStates, toggleDropdown } = useDropdown();
  const isOpen = dropdownStates[id] || false;

  const [selectedRange, setSelectedRange] = useState("All time");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  
  const onRangeSelect = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const handleDateSelect = (date, isStartDate) => {
    if (isStartDate) {
      setStartDate(date);
      if (endDate && date > endDate) {
        setEndDate(null);
      }
    } else {
      setEndDate(date);
    }
  };

  const handleRangeSelect = (range) => {
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
      <div className="flex flex-row items-start justify-between">
        <DateRangeLinks onRangeSelect={onRangeSelect}/>
        <div className="flex flex-row items-start border ">
          <div id="start-date" >
            <Calendar
              selectedStartDate={startDate}
              selectedEndDate={endDate}
              onDateSelect={(date) => handleDateSelect(date, true)}
            />
          </div>
          <div id="end-date">
            <Calendar
              selectedStartDate={startDate}
              selectedEndDate={endDate}
              onDateSelect={(date) => handleDateSelect(date, false)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between ml-[200px]  w-[638px] px-4">
        <div id="start-endDate-output" className="flex flex-row items-center gap-3">
          <input type="text" name="start-date" id="start-date" placeholder={startDate ? format(new Date(startDate), 'MMM dd, yyyy'): format(new Date(), 'MMM dd, yyyy')} className="w-32 h-10 font-inter placeholder:font-normal placeholder:text-base leading-6 placeholder:text-[#101828] border-2 rounded-lg outline-none text-center"/>
          <span>-</span>
          <input type="text" name="end-date" id="end-date" placeholder={endDate ? format(new Date(endDate), 'MMM dd, yyyy'): format(new Date(), 'MMM dd, yyyy')} className="w-32 h-10 font-inter placeholder:font-normal placeholder:text-base leading-6 placeholder:text-[#101828] border-2 rounded-lg outline-none text-center"/>
        </div>
        <div id="actions" className="flex flex-row items-center gap-3">
          <ButtonSecondary size={'md'} color={"gray"} onClick={cancelSelection}>
            Cancel
          </ButtonSecondary>
          <ButtonPrimary size={'md'} onClick={applySelection}>Apply</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default CalendarDropdown;
