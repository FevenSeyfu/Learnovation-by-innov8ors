import React, { useState, useEffect } from "react";
import { useOnboardingFormContext } from "../../Context/OnboardingFormContext";
import FormProgress from "../../components/Onboarding/FormProgress";
import FormStep from "../../components/Onboarding/FormStep";
import stepsData from "../../utils/onbaordingSteps";
import ButtonCTA from "../../components/utility/Button/ButtonCTA";
import ButtonPrimary from "../../components/utility/Button/ButtonPrimary";
import ButtonSecondary from "../../components/utility/Button/ButtonSecondary";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useOnboardingFormContext();
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    setSteps(stepsData);
  }, [dispatch]);

  const currentStepIndex = steps.findIndex((step) => step.name === state.step);
  const isLastStep = currentStepIndex === steps.length - 1;
  const isSelected = state.formData[state.step] !== undefined;

  const handleFinish = () => {
    dispatch({ type: "FINISH_ONBOARDING" });
    navigate("/dashboard");
  };
  return (
    <div className="w-full h-screen flex flex-col items-center py-4 justify-evenly px-[23%]">
      <FormProgress />
      {steps.map((step) => (
        <FormStep key={step.id} step={step} />
      ))}
      <div className="flex flex-row gap-3 pt-">
        <ButtonSecondary
          onClick={() => dispatch({ type: "PREVIOUS_STEP" })}
          color={"gray"}
          size={"2xl"}
        >
          Back
        </ButtonSecondary>
        {isLastStep ? (
          <ButtonCTA
            onClick={handleFinish}
            disabled={!isSelected}
          >
            Finish
          </ButtonCTA>
        ) : (
          <ButtonPrimary
            onClick={() => dispatch({ type: "NEXT_STEP" })}
            disabled={!isSelected}
            size={"2xl"}
          >
            Continue
          </ButtonPrimary>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
