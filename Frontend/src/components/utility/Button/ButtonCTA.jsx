import React from "react";

const ButtonCTA = ({onClick,disabled, children }) => {
  return (
    <button onClick={onClick}  className={`w-full md:w-[192px] font-inter inline-block rounded-lg  p-4 font-bold text-center text-2xl text-white  ${disabled ? 'cursor-not-allowed bg-[#D0D5DD] border border-[#D0D5DD] shadow-sm' : 'bg-gradient-to-r from-indigo-500 via-fusciaPink to-lightPink '}`}
    disabled={disabled}>
      {children}
    </button>
  );
};

export default ButtonCTA;
