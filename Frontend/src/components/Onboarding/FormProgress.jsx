import React from "react";
import { useOnboardingFormContext } from "../../Context/OnboardingFormContext";
import ProgressBar from "../utility/ProgressBar/ProgressBar";

const FormProgress = () => {
  const { state } = useOnboardingFormContext();
  const stepOrder = [
    "courseCategory",
    "SkillLevel",
    "progressTrackingFrequency",
    "courseGoal",
  ];
  const currentStepIndex = stepOrder.indexOf(state.step);
  const progressPercentage = (currentStepIndex / (stepOrder.length - 1)) * 100;
  return (
    <div className="w-full flex flex-row justify-center gap-4 items-center">
      <div className="w-[868px] h-4 bg-[#F4F4F4] rounded-full overflow-hidden">
        <ProgressBar progressPercentage={progressPercentage} />
      </div>
      <p>{progressPercentage.toFixed(0)}%</p>
    </div>
  );
};

export default FormProgress;
