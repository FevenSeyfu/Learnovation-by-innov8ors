import React from 'react';
import Hero from  '../../components/LandingPage/Home/Hero.jsx'
import CallToAction from '../../components/LandingPage/Home/CallToAction.jsx'
import Features from '../../components/LandingPage/Home/Features.jsx';
import HowItWorks from '../../components/LandingPage/Home/HowItWorks.jsx';
const HomePage = () => {

  return (
    <div className="bg-lightOrange px-12 md:px-0 md:mx-[10%] md:w-[80%]">
        <Hero />
       <div id="features">
       <Features />
       </div>
        <HowItWorks />
        <CallToAction />
    </div>
  )

}
export default HomePage