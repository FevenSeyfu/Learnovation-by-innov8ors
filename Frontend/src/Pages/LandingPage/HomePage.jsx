import React from 'react';
import Hero from  '../../components/LandingPage/Home/Hero.jsx'
import HowItWorks from '../../components/LandingPage/Home/HowItWorks.jsx';
import CallToAction from '../../components/LandingPage/Home/CallToAction.jsx'

const HomePage = () => {
  return (
    <div>
        <Hero />
        <HowItWorks />
        <CallToAction />
    </div>
  )
}

export default HomePage