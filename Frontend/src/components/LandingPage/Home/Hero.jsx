import React from "react";
import heroImgDesktop from "../../../assets/images/hero-img-desktop.png";
import heroImgMobile from "../../../assets/images/hero-img-mobile.png";

const Hero = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row mt-[27px] md:mt-[130px]">
      <div>
        <h1 className="">Free certificates & courses for online learners</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
          ullamcorper sed pharetra sene.
        </p>
        <button>Get Started</button>
      </div>
      <picture>
        <source media="(min-width: 375px)" srcset={heroImgDesktop} />
        <img src={heroImgMobile} alt="hero image" />
      </picture>
    </div>
  );
};

export default Hero;
