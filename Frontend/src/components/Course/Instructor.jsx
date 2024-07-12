import React from "react";
import getImageURL from "../../utils/getImages-utils";
import Typography from "../utility/Typography/Typography";

const Instructor = ({ instructorImage, instructorName, instructorRole }) => {
  return (
    <>
      <img
        src={getImageURL(instructorImage)}
        alt="instructor"
        className="rounded-full w-10 h-10"
      />
      <div className="flex flex-col">
        <Typography
          tag={"h3"}
          weight={"normal"}
          size={"xs"}
          type={"text"}
          color="#4b5563"
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
    </>
  );
};

export default Instructor;
