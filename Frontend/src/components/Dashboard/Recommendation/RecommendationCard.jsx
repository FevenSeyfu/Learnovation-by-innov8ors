import React from "react";
import Typography from "../../utility/Typography/Typography";
import durationIcon from "../../../assets/images/icons/icon-duration.svg";
import learnersIcon from "../../../assets/images/icons/icon-learners.svg";
import { useDarkMode } from "usehooks-ts";

function RecommendationCard({ recommendation }) {
  const isDarkMode = useDarkMode();
  return (
    <div className="p-10 border-2 rounded-xl flex flex-col gap-4 dark:bg-gray-800 dark:border-gray-900">
      <div className="flex flex-col gap-2">
        <div className="flex border-2 rounded-full w-fit px-4 py-1 items-center  dark:border-neutral-400 dark:text-green-300">
        <Typography
          tag={"span"}
          weight={"medium"}
          size={"xs"}
          type={"text"}
          color={isDarkMode ? "#86efac" : "#116B47"}
        >
          {recommendation.category}
        </Typography>
        </div>
        <div className="flex flex-col gap-px">
        <Typography
          tag={"h3"}
          weight={"medium"}
          size={"xs"}
          type={"display"}
          color={isDarkMode ? "#fffff" : "#000"}
        >
          {recommendation.name}
        </Typography>
        <Typography
          tag={"span"}
          weight={"medium"}
          size={"sm"}
          type={"text"}
          color={isDarkMode ? "#fffff" : "#667085"}
        >
          Name of Lesson
        </Typography>
        </div>
        </div>
        <div>
          <div className="flex flex-row items-center gap-2">
            <img src={learnersIcon} alt="people icon" className="w-6 h-6"/>
            <Typography
              tag={"p"}
              weight={"normal"}
              size={"xs"}
              type={"text"}
              color={isDarkMode ? "#fffff" : "#667085"}
            >
              {recommendation.learners} Active learners
            </Typography>
          </div>
          <div className="flex flex-row items-center  gap-2">
            <img src={durationIcon} alt="duration icon" className="w-6 h-6"/>
            <Typography
              tag={"p"}
              weight={"normal"}
              size={"xs"}
              type={"text"}
              color={isDarkMode ? "#fffff" : "#667085"}
            >
              {recommendation.hours} hrs
            </Typography>
          </div>
        </div>
      
    </div>
  );
}

export default RecommendationCard;
