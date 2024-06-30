import React from "react";

const ButtonPrimary = ({ size, onClick, disabled, children }) => {
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
      className={`text-white font-inter font-semibold text-lg leading-7 border rounded-lg bg-purple border-purple shadow-sm hover:bg-royalBlue hover:border-royalBlue disabled:bg-lightPurple50 disabled:border-lightPurple50"
       ${sizeClasses[size] || 'w-[106px] h-[60px]'}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
