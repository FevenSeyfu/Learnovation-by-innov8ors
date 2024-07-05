import React, { useEffect, useMemo, useState } from "react";
import userData from "../../data/users.json";
import ExploreHeader from "../../components/Explore/ExploreHeader";
import MentorCard from "../../components/Mentor/MentorCard";
import { useDropdown } from "../../Context/DropdownContext";
const Mentors = () => {
  const [mentors, setMentors] = useState([]);
  const { selectedValues,dropdownStates } = useDropdown();

  const selectedCountry = useMemo(
    () => selectedValues.country[0] || "",
    [selectedValues.country]
  );

  const selectedExpYears = useMemo(
    () => selectedValues.yrsOfExpDropdown || [],
    [selectedValues.yrsOfExpDropdown]
  );

  useEffect(() => {
    const mentors = userData.users.filter((user) => user.userRole === "mentor");
    setMentors(mentors);
  }, []);

  const filteredMentors = useMemo(
    () =>
      mentors.filter((mentor) => {
        const mentorExp = mentor.yearsOfExperience;
        const matchesCountry =
          selectedCountry !== "" ? mentor.country === selectedCountry : true;
        const matchesExperience =
          selectedExpYears.length === 0 ||
          selectedExpYears.some((expRange) => {
            if (expRange === "0-1") return mentorExp < 1;
            if (expRange === "1-3") return mentorExp >= 1 && mentorExp <= 3;
            if (expRange === "3-5") return mentorExp > 3 && mentorExp <= 5;
            if (expRange === "5+") return mentorExp > 5;
            return false;
          });
        return matchesCountry && matchesExperience;
      }),
    [mentors, selectedCountry, selectedExpYears]
  );
  const isDropdownOpen = Object.values(dropdownStates).some(state => state);
  return (
    <main className="flex flex-col">
      <ExploreHeader />
      <div className={`w-full gap-4 grid grid-cols-3 px-8  ${isDropdownOpen && 'blur-sm'}`}>
        {filteredMentors.slice(0, 6).map((mentor) => (
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
