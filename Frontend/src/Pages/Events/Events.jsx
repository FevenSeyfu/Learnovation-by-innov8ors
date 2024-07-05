import React, { useEffect, useState } from "react";
import eventData from "../../data/events.json";
import EventCard from "../../components/Event/EventCard";
import ExploreHeader from "../../components/Explore/ExploreHeader";
const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(eventData)
      setEvents(eventData.events);
  }, []);
  return (
   <main className="flex flex-col">
      <ExploreHeader />
     <div class="w-full gap-4 grid grid-cols-3 px-8">
      {events.slice(0, 6).map((event) => (
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
