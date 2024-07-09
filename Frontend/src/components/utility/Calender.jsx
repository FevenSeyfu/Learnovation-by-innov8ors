import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  format,
  addMonths,
  subMonths,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  isToday,
  isWithinInterval,
} from "date-fns";
import { useDropdown } from "../../Context/DropdownContext";

const Calendar = ({ selectedStartDate, selectedEndDate, onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const renderHeader = () => {
    return (
      <div className="flex flex-row items-center justify-between px-4 mb-2 w-full ">
        <div className="flex flex-row items-center">
          <div className="icon" onClick={prevMonth}>
            <FaChevronLeft />
          </div>
        </div>
        <div className="column col-center">
          <span>{format(currentMonth, "MMMM yyyy")}</span>
        </div>
        <div className="column col-end" onClick={nextMonth}>
          <div className="icon">
            <FaChevronRight />
          </div>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = ["Mo", "Tu", "We", "Th", "Fr", "Sat", "Su"];

    return (
      <div className="flex flex-row items-center text-sm  text-center justify-center ">
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

    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      let days = [];
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        const isStart = selectedStartDate && isSameDay(day, selectedStartDate);
        const isEnd = selectedEndDate && isSameDay(day, selectedEndDate);
        const isRange =
          isWithinInterval(day, {
            start: selectedStartDate,
            end: selectedEndDate,
          });

        days.push(
          <div
          className={`flex flex-row w-10 h-10 text-sm text-center items-center justify-center ${
            !isSameMonth(day, monthStart)
              ? "disabled"
              : isStart || isEnd
              ? "bg-purple rounded-full text-white "
              : isRange && !isStart && !isEnd
              ? "bg-lightPurple text-purple "
              : isToday(day)
              ? "text-blue-500"
              : ""
          }`}
            key={day}
            onClick={() => onDateSelect(cloneDay)}
          >
            <span className="number">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="flex flex-row items-center" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <div className="flex flex-col w-full items-center p-4 border-r dark:border-neutral-400">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
