import React from "react";

const ButtonSm = ({onClick, children }) => {
  return (
    <button onClick={onClick}  className="w-full md:w-[192px] font-inter inline-block rounded-lg py-4 bg-gradient-to-r from-indigo-500 via-fusciaPink to-lightPink  font-bold text-center text-2xl text-white mt-8">
      {children}
    </button>
  );
};

export default ButtonSm;
