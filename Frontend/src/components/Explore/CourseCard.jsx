import React from "react";
import durationIcon from "../../assets/images/icon-duration.svg";
import ratingIcon from "../../assets/images/icon-rating.svg";
import levelIcon from "../../assets/images/icon-level.svg";
import Typography from "../../components/utility/Typography/Typography";
import ButtonPrimary from "../utility/Button/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import getImageURL from "../../utils/getImages-utils";

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

  const handleClick = () => {
    navigate(`/course/${id}`);
  };
  return (
    <div className="font-inter rounded-lg p-4 border border-[#C8C7FF] bg-[#FCFCFD] flex flex-col gap-2 ">
      <img src={getImageURL(CourseImg)} alt="course image" />
      <div className="max-h-8 overflow-hidden">
      <Typography tag={"h2"} weight={"semiBold"} size={"lg"} type={"text"}>
          {courseName}
        </Typography>
      </div>
      <div className="flex flex-col justify-end gap-2 flex-grow">
        <div className="flex flex-col gap-2 ">
          <div className="max-h-16 overflow-hidden">
          <Typography
            tag={"p"}
            weight={"regular"}
            size={"sm"}
            type={"text"}
            color="#667085"
          >
            {courseDescription}
          </Typography>...
          </div>
          <div className="flex flex-row flex-wrap items-center gap-2">
            <div className="flex flex-row items-center  gap-px">
              <img src={durationIcon} alt="duration icon" />
              <Typography
                tag={"p"}
                weight={"normal"}
                size={"xs"}
                type={"text"}
                color="#667085"
              >
                {duration}
              </Typography>
            </div>
            <div className="flex flex-row items-center  gap-px">
              <img src={ratingIcon} alt="rating icon" />
              <Typography
                tag={"p"}
                weight={"normal"}
                size={"xs"}
                type={"text"}
                color="#667085"
              >
                {rating}
              </Typography>
            </div>
            <div className="flex flex-row items-center  gap-px">
              <img src={levelIcon} alt="level icon" />
              <Typography
                tag={"p"}
                weight={"normal"}
                size={"xs"}
                type={"text"}
                color="#667085"
              >
                {level}
              </Typography>
            </div>
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
            <img
              src={getImageURL(instructorImage)}
              alt="instructor"
              className="rounded-full w-10 h-10"
            />
            <div>
              <Typography
                tag={"h3"}
                weight={"normal"}
                size={"xs"}
                type={"text"}
                color="#101828"
              >
                {instructorName}
              </Typography>
              <Typography
                tag={"p"}
                weight={"normal"}
                size={"xs"}
                type={"text"}
                color="#667085"
              >
                {instructorRole}
              </Typography>
            </div>
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
