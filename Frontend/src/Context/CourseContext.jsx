import React, { createContext, useContext, useState, useEffect } from "react";
import coursesData from "../data/courses.json";

const CourseContext = createContext();

export const useCourseContext = () => useContext(CourseContext);

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(coursesData.courses);
  }, []);

  const updateCourseField = (courseId, fieldName, newValue) => {
    setCourses(courses.map(course => {
      if (course.id === courseId) {
        return { ...course, [fieldName]: newValue };
      }
      return course;
    }));
  };

  return (
    <CourseContext.Provider value={{ courses, updateCourseField }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => useContext(CourseContext);