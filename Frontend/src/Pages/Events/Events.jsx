import React, { useEffect, useMemo, useState } from "react";
import eventData from "../../data/events.json";
import EventCard from "../../components/Event/EventCard";
import ExploreHeader from "../../components/Explore/ExploreHeader";
import { useSearch } from "../../Context/SearchContext";
import { useDropdown } from "../../Context/DropdownContext";
import { parseISO, isWithinInterval } from 'date-fns';

const Events = () => {
  const [events, setEvents] = useState([]);
  const { searchTerm } = useSearch();
  const { selectedValues,dropdownStates } = useDropdown();

  const selectedCategories = useMemo(
    () => selectedValues.eventCategoryDropdown || [], 
    [selectedValues.eventCategoryDropdown]
  );

    const selectedDateRange = useMemo(
    () => ({
      selectedStartDate: selectedValues.dateRange.startDate,
      selectedEndDate: selectedValues.dateRange.endDate
    }), 
    [selectedValues.dateRange.startDate, selectedValues.dateRange.endDate]
  );

  useEffect(() => {
    setEvents(eventData.events);
  }, []);

  const filteredEvents = useMemo(() => 
    events.filter(event => {
      const eventDate = parseISO(event.date);
      const titleMatch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(event.category.toLowerCase());

      const dateMatch = !selectedDateRange.selectedStartDate || !selectedDateRange.selectedEndDate || 
        isWithinInterval(eventDate, { start: selectedDateRange.selectedStartDate, end: selectedDateRange.selectedEndDate});

      return titleMatch && categoryMatch && dateMatch;
    }), 
    [events, searchTerm, selectedCategories,selectedDateRange]
  );
  const isDropdownOpen = Object.values(dropdownStates).some(state => state);

  return (
    <main className="flex flex-col">
      <ExploreHeader />
      <div className={`w-full gap-4 grid grid-cols-3 px-8  ${isDropdownOpen && 'blur-sm'}`}>
        {filteredEvents.slice(0, 6).map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            eventName={event.title}
            eventImg={event.img}
            eventDescription={event.description}
            date={event.date}
            location={event.location}
            category={event.category}
            hostName={event.host[0].hostName}
            hostRole={event.host[0].hostRole}
            hostImage={event.host[0].hostImg}
          />
        ))}
      </div>
    </main>
  );
};

export default Events;
