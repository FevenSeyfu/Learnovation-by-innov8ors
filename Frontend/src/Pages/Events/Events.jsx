import React, { useEffect, useState } from "react";
import eventData from "../../data/events.json";
import EventCard from "../../components/Event/EventCard";
import ExploreHeader from "../../components/Explore/ExploreHeader";
import { useSearch } from "../../Context/SearchContext";
const Events = () => {
  const [events, setEvents] = useState([]);
  const { searchTerm } = useSearch();

  useEffect(() => {
    fetch(eventData)
      setEvents(eventData.events);
  }, []);

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm)
  );
  return (
   <main className="flex flex-col">
      <ExploreHeader />
     <div class="w-full gap-4 grid grid-cols-3 px-8">
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
