import React from "react";
import durationIcon from "../../assets/images/icons/icon-duration.svg";
import ratingIcon from "../../assets/images/icons/icon-rating.svg";
import levelIcon from "../../assets/images/icons/icon-level.svg";
import Typography from "../utility/Typography/Typography";

const CourseMeta = ({ duration, rating, level }) => {
  return (
    <>
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
    </>
  );
};

export default CourseMeta;
