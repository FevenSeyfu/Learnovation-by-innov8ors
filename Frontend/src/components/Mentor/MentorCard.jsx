import React from "react";
import Typography from "../utility/Typography/Typography";
import ButtonPrimary from "../utility/Button/ButtonPrimary";
import { useNavigate } from "react-router-dom";

const MentorCard = ({
  id,
  mentorName,
  mentorImg,
  mentorProfession,
  company,
  country,
  experience,
  helped,
  reviewed,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dashboard`);
  };
  return (
    <div className="font-inter rounded-lg p-4 border border-[#C8C7FF] bg-[#FCFCFD] text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-2 ">
      <img src={mentorImg} alt="mentor image"  className="h-1/2 rounded-lg"/>
      <div className="flex flex-col text-left gap-2">
        <Typography
          tag={"h2"}
          weight={"semiBold"}
          size={"lg"}
          type={"text"}
          
        >
          {mentorName}
        </Typography>
        <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
          <Typography
            tag={"p"}
            weight={"medium"}
            size={"sm"}
            type={"text"}
            color="#667085"
          >
            {mentorProfession} at {company}
          </Typography>
          <Typography
            tag={"p"}
            weight={"medium"}
            size={"xs"}
            type={"text"}
            color="#667085"
          >
            {mentorProfession}
          </Typography>
          <Typography
            tag={"p"}
            weight={"medium"}
            size={"xs"}
            type={"text"}
            color="#667085"
          >
            {experience} yrs of Exp
          </Typography>
          <Typography
            tag={"p"}
            weight={"medium"}
            size={"xs"}
            type={"text"}
            color="#667085"
          >
            {country}
          </Typography>
          <div>
          <div className="text-gray-800 dark:text-gray-300">
          <Typography 
            tag={"h3"}
            weight={"bold"}
            size={"sm"}
            type={"text"}
            color="#4b5563"
          >
            Helped
          </Typography>
          </div>
          <Typography
            tag={"h3"}
            weight={"medium"}
            size={"sm"}
            type={"text"}
            color="#667085"
          >
            {helped}
          </Typography>
          <div className="text-gray-800 dark:text-gray-300">
          <Typography
            tag={"h3"}
            weight={"bold"}
            size={"sm"}
            type={"text"}
            color="#4b5563"
          >
            Reviewed
          </Typography>
          </div>
          <Typography
            tag={"h3"}
            weight={"medium"}
            size={"sm"}
            type={"text"}
            color="#667085"
          >
            {reviewed}
          </Typography>
          </div>
        </div>
      </div>
      <ButtonPrimary size={"sm"} onClick={handleClick}>
        Request
      </ButtonPrimary>
    </div>
  );
};

export default MentorCard;
