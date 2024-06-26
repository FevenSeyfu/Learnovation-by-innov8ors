import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


// eslint-disable-next-line react/prop-types
const Accordion = ({question, answer}) => {
    const [isActive, setIsActive] = useState(false);
  
    return(
        <div className="px-8 py-3 bg-white rounded-lg mb-5 w-full">
            <div className="flex flex-row justify-between">
                <p className="pr-24 font-normal text-sm">{question}</p>
                <button className="p-2 bg-indigo-500 text-white rounded-2xl self-start" onClick={() => setIsActive(!isActive)}>
                    {isActive ? 
                        <IoIosArrowDown /> 
                    :
                        <IoIosArrowForward />
                    }
                </button>
            </div>
            {
                isActive &&
                    <p className="justify-center text-sm p-6 text-lightGrey">
                        {answer}
                    </p>
            }

        </div>
    )
}


export default Accordion;