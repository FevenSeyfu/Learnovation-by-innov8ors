import React from "react";

const ButtonSecondary = ({ color, size, onClick, disabled, children }) => {
  const sizeClasses = {
    sm: "w-[106px] h-[36px]",
    md: "w-[110px] h-[40px]",
    lg: "w-[125px] h-[44px]",
    xl: "w-[129px] h-[48px]",
    "2xl": "w-[106px] h-[60px]",
  };
  return (
    <button
      onClick={onClick}
      className={`font-inter font-semibold text-lg leading-7 border rounded-lg shadow-sm  ${
        color == "gray"
          ? "text-gray700 bg-white border-gray300 hover:bg-[#F9FAFB] hover:border-[#D0D5DD] disabled:bg-lightPurple50 disabled:border-lightPurple50 disabled:text-gray300"
          : "text-royalBlue bg-brand50 border-brand50 hover:bg-[#F4EBFF] hover:border-[#F4EBFF] disabled:text-[#D6BBFB] disabled:bg-[#FCFAFF] disabled:border-[#FCFAFF]"
      } disabled:cursor-not-allowed ${sizeClasses[size] || "w-[106px] h-[60px]"}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
