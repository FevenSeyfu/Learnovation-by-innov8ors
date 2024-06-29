import React, { useState, useEffect } from "react";
import { useOnboardingFormContext } from "../../Context/OnboardingFormContext";
import FormProgress from "../../components/Onboarding/FormProgress";
import FormStep from "../../components/Onboarding/FormStep";
import stepsData from "../../utils/onbaordingSteps";
import ButtonCTA from "../../components/utility/ButtonCTA";

const Onboarding = () => {
  const { state, dispatch } = useOnboardingFormContext();
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    setSteps(stepsData);
    
  }, []);

  const currentStepIndex = steps.findIndex(step => step.name === state.step);
  const isLastStep = currentStepIndex === steps.length - 1;
  const isSelected = state.formData[state.step] !== undefined;
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center pt-24">
      <FormProgress />
      {steps.map((step) => (
        <FormStep key={step.id} step={step} />
      ))}
      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
        Back
      </button>
      {isLastStep ? (
        <ButtonCTA onClick={() => dispatch({ type: "FINISH_ONBOARDING" })}  disabled={!isSelected}>Finish</ButtonCTA>
      ) : (
        <button onClick={() => dispatch({ type: "NEXT_STEP" })}
        disabled={!isSelected}>Continue</button>
      )}
    </div>
  );
};

export default Onboarding;
