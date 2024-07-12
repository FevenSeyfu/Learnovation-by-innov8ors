import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GradientPurpleHeading from "../utility/Heading/GradientPurpleHeading";
import { useDarkMode } from "usehooks-ts";
import { useCourseContext } from "../../Context/CourseContext";
import Typography from "../utility/Typography/Typography";
import CourseMeta  from "./CourseMeta";
import Instructor from "./Instructor";
import ButtonCTA from "../utility/Button/ButtonCTA";

const CourseSkeleton = () => (
  <div className="animate-pulse flex flex-col gap-4 p-4 ">
    <div className="h-8 bg-gray-300 rounded"></div>
    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
    <div className="h-6 bg-gray-300 rounded w-5/6"></div>
    <div className="h-6 bg-gray-300 rounded w-4/6"></div>
  </div>
);

const CourseDetail = () => {
  const { id } = useParams();
  const { courses } = useCourseContext();
  const [course, setCourse] = useState(null);
  const isDarkMode = useDarkMode();
  const navigate = useNavigate();

  useEffect(() => {
    const selectedCourse = courses.find((course) => course.id === Number(id));
    setCourse(selectedCourse);
  }, [courses, id]);

  if (!course) {
    return <CourseSkeleton />;
  }
  const handleEnroll = () => {
    navigate(`/dashboard/course/${id}/enrolled`);
  }
  return (
    <div className="flex flex-col items-start gap-2 py-4 text-left">
      <div id="content" className="flex flex-col items-start  gap-8 ">
        <div id="heading">
          <p className="font-inter font-semibold text-lg text-[#344054] dark:text-white">
            course
          </p>
          <GradientPurpleHeading size={"bold"}>
            {course.title}
          </GradientPurpleHeading>
        </div>

        <div className="flex flex-col gap-4 ">
          <Typography
            tag={"h3"}
            weight={"bold"}
            size={"lg"}
            type={"text"}
            color={isDarkMode ? "#fffff" : "#667085"}
          >
            About Course
          </Typography>
          <Typography
            tag={"p"}
            weight={"regular"}
            size={"md"}
            type={"text"}
            color={isDarkMode ? "#000" : "#fff"}
          >
            {course.description}
          </Typography>
          <Typography
            tag={"h3"}
            weight={"bold"}
            size={"lg"}
            type={"text"}
            color={isDarkMode ? "#fffff" : "#667085"}
          >
            What you’re learn
          </Typography>
          <ul className="list-disc pl-5">
            {course.whatYouWillLearn.map((item, index) => (
              <li key={index}>
                <Typography
                  tag={"p"}
                  weight={"regular"}
                  size={"md"}
                  type={"text"}
                  color={isDarkMode ? "#000" : "#fff"}
                >
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
          <Typography
            tag={"h3"}
            weight={"bold"}
            size={"lg"}
            type={"text"}
            color={isDarkMode ? "#fffff" : "#667085"}
          >
            Course Materials
          </Typography>
          <ul className="list-disc pl-5">
            {Object.entries(course.courseMaterials).map(([key, value]) => (
              <li key={key}>
                <Typography
                  tag={"p"}
                  weight={"regular"}
                  size={"md"}
                  type={"text"}
                  color={isDarkMode ? "#000" : "#fff"}
                >
                  {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div id="meta" className="flex flex-row flex-wrap items-center gap-4">
          <CourseMeta duration={course.duration} rating={course.rating} level={course.level}/>
          </div>
            
          <div id="instructor" className="flex flex-row items-center gap-2">
          <Instructor instructorImage={course.instructorImg} instructorName={course.instructorName} instructorRole={course.instructorRole}/>
          </div>
        </div>
        <ButtonCTA onClick={handleEnroll} disabled={false}>
          Enroll
        </ButtonCTA>
    </div>
    </div>
  );
};

export default CourseDetail;
