import React from "react";
import { useOnboardingFormContext } from "../../Context/OnboardingFormContext";
import Heading from "../utility/Onboarding/Heading";

const FormStep = ({ step }) => {
  const { state, dispatch } = useOnboardingFormContext();
  if (state.step !== step.name) return null;

  const handleOptionChange = (e) => {
    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: { [step.name]: e.target.value },
    });
  };

  return (
    <div>
      <Heading>{step.question}</Heading>
      {Object.entries(step.options).map(([key, value]) => (
        <label key={key}>
          <input
            type="radio"
            name={step.name}
            value={key}
            checked={state.formData[step.name] === key}
            onChange={handleOptionChange}
          />
          {value}
        </label>
      ))}
    </div>
  );
};

export default FormStep;
