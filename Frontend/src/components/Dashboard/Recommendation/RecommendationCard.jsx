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
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z" clip-rule="evenodd"/>
            </svg>
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
            <svg class="w-6 h-6 text-gray-800 dark:text-white fill-gray-800 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
            </svg>
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
