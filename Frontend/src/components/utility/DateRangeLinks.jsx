import React, { useState } from 'react';
import { startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear, subDays } from 'date-fns';

const DateRangeLinks = ({ onRangeSelect }) => {
  const [selectedRange, setSelectedRange] = useState('');

  const handleButtonClick = (e, rangeType) => {
    e.preventDefault();
    setSelectedRange(rangeType); 

    let startDate, endDate;

    switch (rangeType) {
      case 'Today':
        startDate = new Date();
        endDate = new Date();
        break;
      case 'Yesterday':
        startDate = subDays(new Date(), 1);
        endDate = subDays(new Date(), 1);
        break;
      case 'This Week':
        startDate = startOfWeek(new Date());
        endDate = endOfWeek(new Date());
        break;
      case 'Last Week':
        startDate = startOfWeek(subDays(new Date(), 7));
        endDate = endOfWeek(subDays(new Date(), 7));
        break;
      case 'This Month':
        startDate = startOfMonth(new Date());
        endDate = endOfMonth(new Date());
        break;
      case 'Last Month':
        startDate = startOfMonth(subDays(new Date(), 30));
        endDate = endOfMonth(subDays(new Date(), 30));
        break;
      case 'This Year':
        startDate = startOfYear(new Date());
        endDate = endOfYear(new Date());
        break;
      case 'Last Year':
        startDate = startOfYear(subDays(new Date(), 365));
        endDate = endOfYear(subDays(new Date(), 365));
        break;
      case 'All time':
        break;
      default:
        return;
    }

    onRangeSelect({ startDate, endDate });
  };

  return (
    <ul className="text-sm flex flex-col p-2">
      {['Today', 'Yesterday', 'This Week', 'Last Week', 'This Month', 'Last Month', 'This Year', 'Last Year', 'All time'].map(range => (
        <li key={range}>
          <button
            className={`w-full text-left text-sm py-2 px-4 ${selectedRange === range ? 'bg-lightPurple text-purple' : ''}`}
            onClick={(e) => handleButtonClick(e, range)}
          >
            {range}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DateRangeLinks;