import React, { useEffect, useState } from "react";
import userData from "../../data/users.json";
import ExploreHeader from "../../components/Explore/ExploreHeader";
import MentorCard from "../../components/Mentor/MentorCard";
const Mentors = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetch(userData)
    const mentors = userData.users.filter(user => user.userRole === 'mentor');
    setMentors(mentors);
}, []);
  return (
   <main className="flex flex-col">
      <ExploreHeader />
     <div class="w-full gap-4 grid grid-cols-3 px-8">
      {mentors.slice(0, 6).map((mentor) => (
        <MentorCard
          key={mentor.id}
          id={mentor.id}
          mentorName={mentor.name}
          mentorImg={mentor.img}
          mentorProfession={mentor.professionalRole}
          company={mentor.companyName}
          country={mentor.country}
          experience={mentor.yearsOfExperience}
          helped={mentor.helped}
          reviewed={mentor.reviewed}
        />  
      ))} 
    </div>
   </main>
  );
};

export default Mentors;
