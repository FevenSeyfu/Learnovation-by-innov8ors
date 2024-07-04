import React from "react";
import heroImg from "../../../assets/images/hero-img.png";
import ButtonSm from "../../utility/Home/ButtonSm";
import { useNavigate } from "react-router-dom";
import ButtonCTA from "../../utility/Button/ButtonCTA";

const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };
  return (
    <div className="h-screen w-full flex flex-col-reverse md:gap-8 md:flex-row items-center justify-center px-6  md:mx-[10%] md:w-[80%] gap-7">
      <section className="w-full md:w-1/2 flex flex-col md:gap-8 px-2 text-left gap-2 font-nunito">
        <h1 className=" md:font-inter text-4xl font-extrabold md:font-semibold  md:text-5xl lg:text-6xl leading-tight text-darkGray">
          Free certificates & courses for online learners
        </h1>
        <p className="text-2xl font-normal text-[#797979] leading-8">
          Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
          ullamcorper sed pharetra sene.
        </p>
        <ButtonCTA onClick={handleClick}>Get Started</ButtonCTA>
      </section>
      <img src={heroImg} alt="hero image" className="w-full md:w-1/2 h-auto" />
    </div>
  );
};

export default Hero;
