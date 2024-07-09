import React from "react";

const ButtonPrimary = ({ size, onClick, disabled, children }) => {
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
      className={`text-white font-inter font-semibold text-lg leading-7 border rounded-lg bg-purple border-purple shadow-sm hover:bg-royalBlue hover:border-royalBlue disabled:bg-lightPurple50 disabled:border-lightPurple50 disabled:cursor-not-allowed"
       ${sizeClasses[size] || "px-4 py-2 text-base"}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
