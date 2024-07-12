import React, {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import certificateHidden from "../../assets/images/Certificates/certificateLocked.png";
import Typography from "../utility/Typography/Typography";
import { useDarkMode } from "usehooks-ts";
import { useCourseContext } from "../../Context/CourseContext";
import ButtonCTA from "../utility/Button/ButtonCTA";

const SkeletonLoader = () => (
  <div className="animate-pulse flex flex-col gap-4">
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    <div className="h-32 bg-gray-300 rounded"></div>
  </div>
);

const CourseInfo = () => {
  const { id } = useParams();
  const { courses } = useCourseContext();
  const [course, setCourse] = useState(null);
  const isDarkMode = useDarkMode();
  
  useEffect(() => {
    const selectedCourse = courses.find((course) => course.id === Number(id));
    setCourse(selectedCourse);
  }, [courses, id]);

  if (!course) {
    return (
      <div className="p-4 border rounded-2xl flex flex-col gap-2">
        <SkeletonLoader />
      </div>
    );
  }

  const handleClaim = () => {
    alert("Claim certificate");
  };
  return (
    <div className="p-4 border rounded-2xl flex flex-col gap-2 dark:border-gray-700">
      <div className="text-left flex flex-col gap-4">
        <div>
          <Typography
            tag={"p"}
            weight={"medium"}
            size={"xs"}
            type={"text"}
            color={isDarkMode ? "#fffff" : "#667085"}
          >
            Language in
          </Typography>
          <div className="text-gray-600 dark:text-gray-400">
          <Typography
            tag={"p"}
            weight={"regular"}
            size={"md"}
            type={"text"}
            color={isDarkMode ? "#94a3b8" : "#e5e7eb"}
          >
            {course.language}
          </Typography>
          </div>
        </div>
        <div>
          <Typography
            tag={"p"}
            weight={"medium"}
            size={"xs"}
            type={"text"}
            color={isDarkMode ? "#fffff" : "#667085"}
          >
            Last Updated
          </Typography>
          <div className="text-gray-600 dark:text-gray-400">
          <Typography
            tag={"p"}
            weight={"regular"}
            size={"md"}
            type={"text"}
            color={isDarkMode ? "#94a3b8" : "#e5e7eb"}
          >
            {course.lastUpdated}
          </Typography>
          </div>
        </div>
        <div>
          <Typography
            tag={"p"}
            weight={"medium"}
            size={"xs"}
            type={"text"}
            color={isDarkMode ? "#fffff" : "#667085"}
          >
            Courses Type
          </Typography>
          <div className="text-gray-600 dark:text-gray-400">
          <Typography
            tag={"p"}
            weight={"regular"}
            size={"md"}
            type={"text"}
            color={isDarkMode ? "#94a3b8" : "#e5e7eb"}
          >
            {course.courseType}
          </Typography>
          </div>
        </div>
        <div>
          <Typography
            tag={"p"}
            weight={"medium"}
            size={"xs"}
            type={"text"}
            color={isDarkMode ? "#fffff" : "#667085"}
          >
            Enrolled
          </Typography>
          <div className="text-gray-600 dark:text-gray-400">
          <Typography
            tag={"p"}
            weight={"regular"}
            size={"md"}
            type={"text"}
            color={isDarkMode ? "#94a3b8" : "#e5e7eb"}
          >
            {course.learnersEnrolled}
          </Typography>
          </div>
        </div>
        <div>
          <Typography
            tag={"p"}
            weight={"medium"}
            size={"xs"}
            type={"text"}
            color={isDarkMode ? "#fffff" : "#667085"}
          >
            Certificate of Completion
          </Typography>
          <div className="text-gray-600 dark:text-gray-400">
          <Typography
            tag={"p"}
            weight={"regular"}
            size={"md"}
            type={"text"}
            color={course.isCompleted ? "#1d9767" : "#fe2a45"}
          >
            {course.isCompleted ? "Completed" : "Locked"}
          </Typography>
          </div>
        </div>
      </div>
      <img src={certificateHidden} alt="Certificate Preview" className="w-60" />
      <div className={`${!course.isComplete && 'hidden' }`}>
        <ButtonCTA onClick={handleClaim} disabled={false}>
          Claim
        </ButtonCTA>
      </div>
    </div>
  );
};

export default CourseInfo;
