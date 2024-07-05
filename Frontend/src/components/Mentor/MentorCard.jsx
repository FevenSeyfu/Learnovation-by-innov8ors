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
    <div className="font-inter rounded-lg p-4 border border-[#C8C7FF] bg-[#FCFCFD] flex flex-col gap-2 ">
      <img src={mentorImg} alt="mentor image"  className="h-1/2"/>
      <div className="flex flex-col text-left gap-2">
        <Typography
          tag={"h2"}
          weight={"semiBold"}
          size={"lg"}
          type={"text"}
          color={"#000000"}
        >
          {mentorName}
        </Typography>
        <div className="flex flex-col gap-2">
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
          <Typography
            tag={"h3"}
            weight={"bold"}
            size={"sm"}
            type={"text"}
            color="#101828"
          >
            Helped
          </Typography>
          <Typography
            tag={"h3"}
            weight={"medium"}
            size={"sm"}
            type={"text"}
            color="#667085"
          >
            {helped}
          </Typography>
          <Typography
            tag={"h3"}
            weight={"bold"}
            size={"sm"}
            type={"text"}
            color="#101828"
          >
            Reviewed
          </Typography>
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
