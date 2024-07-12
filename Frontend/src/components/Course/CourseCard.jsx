import React from "react";
import Typography from "../utility/Typography/Typography";
import ButtonPrimary from "../utility/Button/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import getImageURL from "../../utils/getImages-utils";
import { useDarkMode } from "usehooks-ts";
import  CourseMeta  from "./CourseMeta";
import Instructor from "./Instructor";

const CourseCard = ({
  id,
  courseName,
  CourseImg,
  courseDescription,
  duration,
  rating,
  level,
  learnersEnrolled,
  instructorName,
  instructorRole,
  instructorImage,
}) => {
  const navigate = useNavigate();
  const isDarkMode = useDarkMode();
  const handleClick = () => {
    navigate(`/dashboard/course/${id}`);
  };
  return (
    <div className="font-inter rounded-lg p-4 border border-[#C8C7FF] bg-[#FCFCFD] text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-2 ">
      <img src={getImageURL(CourseImg)} alt="course image" />
      <div className="max-h-8 overflow-hidden">
        <Typography
          tag={"h2"}
          weight={"semiBold"}
          size={"lg"}
          type={"text"}
          color="#4b5563"
          className="dark:text-white"
        >
          {courseName}
        </Typography>
      </div>
      <div className="flex flex-col justify-end gap-2 flex-grow">
        <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
          <div className="max-h-16 overflow-hidden">
            <Typography
              tag={"p"}
              weight={"regular"}
              size={"sm"}
              type={"text"}
              color="#667085"
              className="text-gray-600 dark:text-gray-400"
            >
              {courseDescription}
            </Typography>
            ...
          </div>
          <div  className="flex flex-row flex-wrap items-center gap-2">
            <CourseMeta duration={duration} rating={rating} level={level} />
          </div>

          <div className="learners-enrolled-Typography">
            <Typography
              tag={"p"}
              weight={"medium"}
              size={"xs"}
              type={"text"}
              color="#667085"
            >
              Learners Enrolled: {learnersEnrolled}
            </Typography>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-between items-center gap-y-2">
          <div className="flex flex-row items-center gap-2">
          <Instructor instructorImage={instructorImage} instructorName={instructorName} instructorRole={instructorRole}/>
          </div>
          <ButtonPrimary size={"sm"} onClick={handleClick}>
            Enroll
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
