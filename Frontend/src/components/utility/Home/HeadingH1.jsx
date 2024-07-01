import React from "react";

const HeadingH1 = ({ children }) => {
  return (
    <h1 className="text-darkGray text-4xl md:text-[50px] font-extrabold md:font-semibold leading-9 md:leading-[55px]  text-left md:text-center md:w-2/3">
      {children}
    </h1>
  );
};

export default HeadingH1;
