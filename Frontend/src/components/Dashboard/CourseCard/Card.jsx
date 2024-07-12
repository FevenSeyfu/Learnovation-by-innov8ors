import React from "react";
import Typography from "../../utility/Typography/Typography";
import { useDarkMode } from "usehooks-ts";
import ButtonSecondary from "../../utility/Button/ButtonSecondary";
import ButtonPrimary from "../../utility/Button/ButtonPrimary";
import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {
  const navigate = useNavigate();
  const isDarkMode = useDarkMode();

  const handleViewSyllabus = () =>{
    navigate(`/dashboard/course/${course.id}`);
  }
  const handleResume = () =>{
    navigate(`/dashboard/course/${course.id}/enrolled`);
  }
  return (
    <div className="flex flex-row font-inter items-start gap-4 p-10 border-2 rounded-lg dark:bg-gray-800 dark:border-gray-900">
      <img src={course.Img} alt="" className="w-12 h-12 rounded-full border" />
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-row justify-between">
          <div>
            <div className="flex border-2 rounded-full w-fit px-4 py-1 items-center  dark:border-neutral-400">
            <Typography
              tag={"span"}
              weight={"medium"}
              size={"xs"}
              type={"text"}
              color={isDarkMode ? "#86efac" : "#116B47"}
            >
              {course.category}
            </Typography>
            </div>
            <div className="flex flex-col gap-px">
              <Typography
                tag={"h3"}
                weight={"medium"}
                size={"xs"}
                type={"display"}
                color={isDarkMode ? "#fffff" : "#667085"}
              >
                {course.name}
              </Typography>
              <Typography
                tag={"span"}
                weight={"medium"}
                size={"sm"}
                type={"text"}
                color={isDarkMode ? "#fffff" : "#667085"}
              >
                {course.lesson}
              </Typography>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <ButtonSecondary size={"lg"} color={"gray"} onClick={handleViewSyllabus}>
              View Syllabus
            </ButtonSecondary>
            <ButtonPrimary size={"lg"} onClick={handleResume}>
              Resume
            </ButtonPrimary>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center gap-4 items-center">
          <div className="w-full h-4 bg-[#F4F4F4] rounded-full overflow-hidden">
            <div
              style={{
                width: `${course.progress}%`,
                background:
                  "linear-gradient(150.09deg, #8B15BD 0.04%, #F7936F 100.04%)",
              }}
              className="h-full  rounded-full"
            ></div>
          </div>
          <p>{course.progress.toFixed(0)}%</p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
