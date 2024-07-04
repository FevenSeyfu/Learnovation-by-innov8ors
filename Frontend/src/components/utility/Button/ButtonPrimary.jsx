import React from "react";

const ButtonPrimary = ({ size, onClick, disabled, children }) => {
  const sizeClasses = {
    sm: "px-2 h-[36px]",
    md: "px-3 h-[40px]",
    lg: "px-4 h-[44px]",
    xl: "px-5 h-[48px]",
    "2xl": "px-6 h-[60px]",
  };
  return (
    <button
      onClick={onClick}
      className={`text-white font-inter font-semibold text-lg leading-7 border rounded-lg bg-purple border-purple shadow-sm hover:bg-royalBlue hover:border-royalBlue disabled:bg-lightPurple50 disabled:border-lightPurple50 disabled:cursor-not-allowed"
       ${sizeClasses[size] || 'px-6 h-[60px]'}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
