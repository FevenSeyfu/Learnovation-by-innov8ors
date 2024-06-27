import React from "react";
import heroImgDesktop from "../../../assets/images/hero-img-desktop.png";
import heroImgMobile from "../../../assets/images/hero-img-mobile.png";

const Hero = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center mt-[27px] md:mt-[130px]  md:mx-[10%] md:w-[80%] gap-7">
      <div className="flex flex-col w-full px-8 text-left gap-2 font-nunito">
        <h1 className=" md:font-inter text-4xl font-extrabold md:font-semibold md:text-[75px] leading-tight text-[#242331]">Free certificates & courses for online learners</h1>
        <p className="text-2xl font-normal text-[#797979] leading-8">
          Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
          ullamcorper sed pharetra sene.
        </p>
        <button className="w-full md:w-[192px] font-inter inline-block rounded-lg py-4 bg-gradient-to-r from-indigo-500 via-fusciaPink to-lightPink  font-bold text-center text-2xl text-white mt-8">Get Started</button>
      </div>
      <picture className="w-full">
        <source media="(min-width: 375px)" srcSet={heroImgDesktop} />
        <img src={heroImgMobile} alt="hero image" />
      </picture>
    </div> 
  );
};

export default Hero;
