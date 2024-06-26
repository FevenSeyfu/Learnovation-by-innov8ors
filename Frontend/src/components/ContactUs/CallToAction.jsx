import React from 'react';
import Image from '../../assets/images/image.png';
import SmallButton from '../smallButton';

const CallToAction = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-16">
      <img src={Image} alt="oh no!" className="h-auto w-4/12" />
      <div className="mt-5 text-center">
        <h1 className="text-4xl font-semibold">Build your audience and</h1>
        <h1 className="text-4xl font-semibold">grow your brand</h1>
        <p className="text-base font-normal text-lightGrey mt-5">Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene.</p>
      </div>
      <SmallButton onClick={()=>{}}>Get Started</SmallButton>
    </div>
  )
}

export default CallToAction