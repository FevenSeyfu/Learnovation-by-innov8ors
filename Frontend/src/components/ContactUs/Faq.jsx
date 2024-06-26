import React from 'react';
import Accordion from '../../components/accordion';
import data from '../../utils/accordionData';


const Faq = () => {
  return (
    <div className="justify-center items-center mb-5 bg-royalBlue pb-10">
        <p className="text-white font-medium pb-10 pt-20 text-center">Frequently Asked Questions</p>
        <div className="mb-5 mx-[30%]">
          {data.map(({ question, answer }) => (
            // eslint-disable-next-line react/jsx-key
            <Accordion 
              question={question} 
              answer={answer} 
              />
          ))}
        </div>
    </div>
  )
}

export default Faq