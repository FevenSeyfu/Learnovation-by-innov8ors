import React, { useState } from "react";
import ButtonPrimary from "../Button/ButtonPrimary";
import ButtonSecondary from "../Button/ButtonSecondary";
import Calendar from "../Calender";
import DateRangeLinks from "../DateRangeLinks";
import { format } from 'date-fns';

const CalendarDropdown = ({ id, startDate, endDate, onApply, onCancel, onDateSelect }) => {
  const [selectedRange, setSelectedRange] = useState("All time");

  const handleRangeSelect = ({ startDate, endDate }) => {
    if (startDate === null && endDate === null) {
      onDateSelect(null, true); 
      onDateSelect(null, false); 
    } else {
      if (startDate) onDateSelect(startDate, true); 
      if (endDate) onDateSelect(endDate, false); 
    }
  };

  const handleDateSelect = (date, isStartDate) => {
    onDateSelect(date, isStartDate);
  };

  return (
    <div className="flex flex-col border-2 bg-white dark:bg-gray-900 dark:text-white dark:border-neutral-800">
      <div className="flex flex-row items-start justify-between">
        <DateRangeLinks onRangeSelect={handleRangeSelect}/>
        <div className="flex flex-row items-start border dark:text-gray-200 dark:border-neutral-400">
          <div id="start-date">
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
      <div className="flex flex-row items-center justify-between ml-[200px] w-[638px] px-4">
        <div id="start-endDate-output" className="flex flex-row items-center gap-3">
          <input 
            type="text" 
            name="start-date" 
            id="start-date" 
            readOnly
            value={startDate ? format(new Date(startDate), 'MMM dd, yyyy') : ''}
            className="w-32 h-10 font-inter placeholder:font-normal placeholder:text-base leading-6 placeholder:text-[#101828] border-2 rounded-lg outline-none text-center dark:bg-gray-900 dark:text-white dark:border-neutral-400 dark:placeholder:text-neutral-400"
          />
          <span>-</span>
          <input 
            type="text" 
            name="end-date" 
            id="end-date" 
            readOnly
            value={endDate ? format(new Date(endDate), 'MMM dd, yyyy') : ''}
            className="w-32 h-10 font-inter placeholder:font-normal placeholder:text-base leading-6 placeholder:text-[#101828] border-2 rounded-lg outline-none text-center dark:bg-gray-900 dark:text-white dark:border-neutral-400 dark:placeholder:text-neutral-400"
          />
        </div>
        <div id="actions" className="flex flex-row items-center gap-3">
          <ButtonSecondary size={'md'} color={"gray"} onClick={onCancel}>
            Cancel
          </ButtonSecondary>
          <ButtonPrimary size={'md'} onClick={onApply}>Apply</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default CalendarDropdown;