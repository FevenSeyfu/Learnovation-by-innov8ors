import React from "react";
import GradientPurpleHeading from "../../utility/Heading/GradientPurpleHeading";

const SecondHeader = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-start" id="titles">
      <GradientPurpleHeading size={"bold"}>{title}</GradientPurpleHeading>
      <p className="font-inter font-bold text-lg text-[#344054]">{subtitle}</p>
    </div>
  );
};

export default SecondHeader;
