import React, { useState } from 'react';

function Agenda() {
  // ... rest of your code ...

  const getNextMonday = () => {
    const today = new Date();
    const day = today.getDay();
    const nextMonday = new Date();
    nextMonday.setDate(today.getDate() + (7 + (1 - day)) % 7);
    return nextMonday.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
  };

  const getTwoDaysLater = () => {
    const twoDaysLater = new Date();
    twoDaysLater.setDate(twoDaysLater.getDate() + 2);
    return twoDaysLater.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
  };

  // ... rest of your code ...

  return (
    <div className="agenda relative w-300px p-20 border border-gray-300 rounded-md font-sans">
      {/* ... other elements ... */}
      <div
        className={`agenda-content p-4 ${showAgenda ? 'block' : 'hidden'}`}
      >
        <h2 className="text-lg font-bold mb-2">Learnovation Academy Daily Agenda</h2>
        <p className="mb-4">
          No tasks scheduled for today, <span>{todayDate}</span>.
        </p>
        <h3 className="text-md font-bold mb-2">Upcoming Events</h3>
        <table className="w-full border-collapse mb-2">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left border border-gray-300 bg-gray-200">
                Name of Event
              </th>
              <th className="px-4 py-2 text-left border border-gray-300 bg-gray-200">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Conference</td>
              <td className="px-4 py-2 border border-gray-300">{getNextMonday()}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Project Deadline</td>
              <td className="px-4 py-2 border border-gray-300">{getTwoDaysLater()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Agenda;