import React from "react";
import features from "../../../utils/FeaturesData";
import getImageURL from "../../../utils/getImages-utils";
import TitleBtn from "../../utility/Home/TitleBtn";
import HeadingH1 from "../../utility/Home/HeadingH1";

const Features = () => {
  return (
    <div id="features" className="flex flex-col gap-7 md:gap-11 mt-7 justify-center items-center font-nunito md:font-inter">
      <div id="title" className="flex flex-col gap-8 items-center  text-left ">
        <TitleBtn>Features</TitleBtn>
        <HeadingH1>
        Powerful features to boost your productivity
        </HeadingH1>
      </div>
      <ul id="feature-list" className="text-darkGray text-left flex flex-col gap-16 md:gap-y-48 w-full  md:justify-center ">
        {features.map((feature,index) => (
          <li key={feature.id} className={`relative mb-10 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:items-center gap-4 md:gap-10 bg-radial-gradient`}>
            <section id="feature-description" className="md:w-[1/3]">
              <h2 className="text-lg md:text-3xl font-bold md:font-semibold leading-5 mb-4">{feature.title}</h2>
              <p className="md:font-nunito text-xs md:text-xl font-normal text-[#797979] leading-2">{feature.description}</p>
            </section>
            <img src={getImageURL(feature.imageUrl)} alt={feature.title} className="z-10 bg-white w-full md:w-2/3 md:h-auto;
            "/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;