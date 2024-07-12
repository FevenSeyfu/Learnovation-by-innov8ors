import React from "react";

const ButtonSecondary = ({ color, size, onClick, disabled, children }) => {
  const sizeClasses = {
    sm: "px-2 py-2 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-4 py-2 text-base",
    xl: "px-5 py-4 text-base",
    "2xl": "px-7 py-4 text-lg",
  };
  return (
    <button
      onClick={onClick}
      className={`font-inter font-semibold text-lg leading-7 border rounded-lg shadow-sm dark:text-white dark:bg-gray-800 dark:border-violet-500 dark:hover:bg-gray-900 dark:hover:border-pink-500  ${
        color == "gray"
          ? "text-gray700 bg-white border-gray300 hover:bg-[#F9FAFB] hover:border-[#D0D5DD] disabled:bg-lightPurple50 disabled:border-lightPurple50 disabled:text-gray300"
          : "text-royalBlue bg-brand50 border-brand50 hover:bg-[#F4EBFF] hover:border-[#F4EBFF] disabled:text-[#D6BBFB] disabled:bg-[#FCFAFF] disabled:border-[#FCFAFF]"
      } disabled:cursor-not-allowed ${sizeClasses[size] || "px-4 py-2 text-base"}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
