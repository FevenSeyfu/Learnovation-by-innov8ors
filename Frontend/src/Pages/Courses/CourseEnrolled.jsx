import React, { useState } from "react";
import CourseEnrolledSidebar from "../../components/Course/Enrolled/CourseEnrolledSidebar";
import Video from "../../components/Course/Enrolled/Video";
import Reading from "../../components/Course/Enrolled/Reading";
import Quiz from "../../components/Course/Enrolled/Quiz";
import Assignment from "../../components/Course/Enrolled/Assignment";
import { useParams } from "react-router-dom";

const CourseEnrolled = () => {
  const { id } = useParams();
  const [completedSections, setCompletedSections] = useState([]);
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="flex flex-row  h-full">
      <CourseEnrolledSidebar
        completedSections={completedSections}
        setCompletedSections={setCompletedSections}
        activeSection={activeSection}
        setActiveSection={setActiveSection} 
        courseId={Number(id)}
      />
      <main className="p-4 flex-grow">
        {activeSection === "video" && (
          <Video
            completedSections={completedSections}
            setCompletedSections={setCompletedSections}
          />
        )}
        {activeSection === "reading" && (
          <Reading
            completedSections={completedSections}
            setCompletedSections={setCompletedSections}
          />
        )}
        {activeSection === "quiz" && (
          <Quiz
            completedSections={completedSections}
            setCompletedSections={setCompletedSections}
          />
        )}
        {activeSection === "assignment" && (
          <Assignment
            completedSections={completedSections}
            setCompletedSections={setCompletedSections}
          />
        )}
      </main>
    </div>
  );
};

export default CourseEnrolled;
