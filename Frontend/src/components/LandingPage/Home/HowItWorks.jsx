import React from "react";
import demoImg from "../../../assets/images/feature-courses.png";
import TitleBtn from "../../utility/Home/TitleBtn";
import HeadingH1 from "../../utility/Home/HeadingH1";
const HowItWorks = () => {
  return (
    <div className="px-[45px] md:px-[8%] flex flex-col gap-12 md:mt-20">
      <div id="title" className="flex flex-col gap-8 items-center text-left ">
        <TitleBtn>How It Work</TitleBtn>
        <HeadingH1>Work smarter <br /> with easy access for user..</HeadingH1>
      </div>
      <img src={demoImg} alt="Demo Image" />
    </div>
  );
};

export default HowItWorks;
