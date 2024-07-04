import React, { useEffect, useState } from "react";
import courseData from "../../data/courses.json";
import CourseCard from "../../components/Explore/CourseCard";
const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(courseData)
      .then((response) => response.json())
      .then((data) => setCourses(data.courses))
      .catch((error) => console.error("Error fetching courses:", error));
      setCourses(courseData.courses);
  }, []);
  return (
    <div class="w-full gap-4 grid grid-cols-3 px-8">
      {courses.slice(0, 6).map((course) => (
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
  );
};

export default Courses;
