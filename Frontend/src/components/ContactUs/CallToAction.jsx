import React from 'react';
import { useNavigation } from "react-router-dom";
import Image from '../../assets/images/image.png';
import SmallButton from '../utility/smallButton';

const CallToAction = () => {
  

  return (
    <div className="flex flex-col justify-center items-center mb-16">
      <img src={Image} alt="oh no!" className="h-auto md:w-4/12 w-9/12" />
      <div className="mt-5 text-center md:mx-[20%] mx-[10%]">
        <h1 className="text-4xl font-semibold">Build your audience and grow your brand</h1>
        <p className="text-base font-normal text-lightGrey mt-5">Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene.</p>
      </div>
      <SmallButton>Get Started</SmallButton>
    </div>
  )
}

export default CallToAction