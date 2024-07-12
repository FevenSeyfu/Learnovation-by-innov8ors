import React from "react";
import Typography from "../utility/Typography/Typography";
import ButtonSecondary from "../utility/Button/ButtonSecondary";
import checkIcon from "../../assets/images/icons/icon-check.svg";
import ButtonPrimary from "../utility/Button/ButtonPrimary";
import { useDarkMode } from "usehooks-ts";

const SetGoalModal = ({ onConfirm, onCancel }) => {
  const isDarkMode = useDarkMode();
  return (
    <div className="p-6 flex flex-col border-2 rounded-lg shadow-sm dark:bg-gray-900 dark:text-white dark:border-neutral-800 items-start gap-5">
      <img src={checkIcon} alt="check icon" />
      <div>
        <Typography
          tag={"h2"}
          weight={"semiBold"}
          size={"lg"}
          type={"text"}
          color={isDarkMode ? "#fffff" : "#101828"}
          className="dark:text-white"
        >
          You set a goal date to complete this course
        </Typography>
        <Typography
          tag={"p"}
          weight={"regular"}
          size={"sm"}
          type={"text"}
          color={isDarkMode ? "#fffff" : "#101828"}
          className="dark:text-white"
        >
          You view your date or change it you can access it in your calendar
        </Typography>
      </div>
      <div className="flex flex-row justify-between w-full">
        <ButtonSecondary size={"2xl"} color={"gray"} onClick={onCancel}>
          Close
        </ButtonSecondary>
        {/* <ButtonPrimary size={"lg"} onClick={onConfirm}>
          View Calender
        </ButtonPrimary> */}
      </div>
    </div>
  );
};

export default SetGoalModal;
