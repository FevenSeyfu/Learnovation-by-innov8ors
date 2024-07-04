import React from "react";
import { useOnboardingFormContext } from "../../Context/OnboardingFormContext";
import GradientPurpleHeading from "../utility/Heading/GradientPurpleHeading";
import checkedIcon from "../../assets/images/icons/icon-checkmark.svg";

const FormStep = ({ step }) => {
  const { state, dispatch } = useOnboardingFormContext();
  if (state.step !== step.name) return null;

  const handleOptionChange = (value) => {
    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: { [step.name]: value },
    });
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <GradientPurpleHeading size={'semiBold'}>{step.question}</GradientPurpleHeading>
      {Object.entries(step.options).map(([key, value]) => (
        <div
          key={key}
          className={`flex items-center space-x-2 flex-row-reverse justify-between border border-[#8482ED] rounded-lg py-4 px-6 ${
            state.formData[step.name] === key ? "bg-[#EBE7FF]" : ""
          }`}
          onClick={() => handleOptionChange(key)}
          role="button" 
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleOptionChange(key)} 
        >
          <input
            type="radio"
            id={`radio-${step.id}-${key}`}
            name={step.name}
            value={key}
            checked={state.formData[step.name] === key}
            onChange={() => handleOptionChange(key)}
            className="hidden"
          />
          <label
            htmlFor={`radio-${step.id}-${key}`}
            className={`w-[33.33px] h-[33.33px] rounded-full flex items-center justify-center cursor-pointer ${
              state.formData[step.name] === key ? "bg-transparent" : "border-2 border-[#D0D5DD]"
            }`}
          >
            {state.formData[step.name] === key && (
              <img src={checkedIcon} alt="Checked" className="w-[33.33px] h-[33.33px]" />
            )}
          </label>
          <span className="font-inter font-medium text-xl leading-[30px] text-[#344054]">
            {value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FormStep;