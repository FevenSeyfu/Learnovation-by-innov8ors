import React, { useEffect, useState } from "react";
import courseData from "../../data/courses.json";
import CourseCard from "../../components/Course/CourseCard";
import ExploreHeader from "../../components/Explore/ExploreHeader";
import { useSearch } from "../../Context/SearchContext";
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const { searchTerm } = useSearch();

  useEffect(() => {
    fetch(courseData)
      setCourses(courseData.courses);
  }, []);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm)
  );
  return (
   <main className="flex flex-col">
      <ExploreHeader />
     <div class="w-full gap-4 grid grid-cols-3 px-8">
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
