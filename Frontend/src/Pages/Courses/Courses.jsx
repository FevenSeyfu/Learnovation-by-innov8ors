import React, { useEffect, useState, useMemo } from "react";
import courseData from "../../data/courses.json";
import CourseCard from "../../components/Course/CourseCard";
import ExploreHeader from "../../components/Explore/ExploreHeader";
import { useSearch } from "../../Context/SearchContext";
import { useDropdown } from "../../Context/DropdownContext";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const { searchTerm } = useSearch();
  const { selectedValues } = useDropdown();

  const selectedCategories = useMemo(() => selectedValues.courseCategory || [], [selectedValues.courseCategory]);
  const selectedLevels = useMemo(() => selectedValues.courseLevel || [], [selectedValues.courseLevel]);

  useEffect(() => {
    setCourses(courseData.courses);
  }, []);

  const filteredCourses = useMemo(() => courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategories.length === 0 || selectedCategories.includes(course.category)) &&
    (selectedLevels.length === 0 || selectedLevels.includes(course.level.toLowerCase()))
  ), [courses, searchTerm, selectedCategories, selectedLevels]);
  return (
    <main className="flex flex-col">
      <ExploreHeader />
      <div className="w-full gap-4 grid grid-cols-3 px-8">
        {filteredCourses.slice(0, 6).map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            courseName={course.title}
            CourseImg={course.img}
            courseDescription={course.description}
            duration={course.duration}
            rating={course.rating}
            level={course.level}
            learnersEnrolled={course.learnersEnrolled}
            instructorName={course.instructorName}
            instructorRole={course.instructorRole}
            instructorImage={course.instructorImg}
          />
        ))}
      </div>
    </main>
  );
};

export default Courses;
