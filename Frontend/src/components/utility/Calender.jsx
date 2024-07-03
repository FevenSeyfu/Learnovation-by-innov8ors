import React, { useState } from 'react';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { format, addMonths, subMonths, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek, isSameMonth, isToday } from 'date-fns';
import { useDropdown } from '../../Context/DropdownContext';

const Calendar = ({ id, label, options }) => {
    const { dropdownStates, toggleDropdown } = useDropdown();
    const isOpen = dropdownStates[id] || false;
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const renderHeader = () => {
    return (
      <div className="flex flex-row items-center">
        <div className="column col-start">
          <div className="icon" onClick={prevMonth}>
            <FaChevronLeft />
          </div>
        </div>
        <div className="column col-center">
          <span>{format(currentMonth, 'MMMM yyyy')}</span>
        </div>
        <div className="column col-end" onClick={nextMonth}>
          <div className="icon"><FaChevronRight /></div>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = ["Mo", "Tu", "We", "Th", "Fr", "Sat", "Su"];
  
    return (
      <div className="flex flex-row items-center  text-center justify-center gap-2">
        {days.map((day, index) => (
          <div className="w-10 h-10" key={index}>
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`flex flex-row w-10 h-10 text-center items-center justify-center ${!isSameMonth(day, monthStart)
              ? "disabled"
              : isToday(day) ? "bg-purple rounded-full" : ""}`}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className="number">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="flex flex-row items-center gap-2" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  const onDateClick = (day) => {
    console.log(format(day, 'yyyy-MM-dd'));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;