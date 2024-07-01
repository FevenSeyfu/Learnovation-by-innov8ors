import React from "react";
import { useOnboardingFormContext } from "../../Context/OnboardingFormContext";

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
        <div
          style={{ 
            width: `${progressPercentage}%`, 
            background: 'linear-gradient(150.09deg, #8B15BD 0.04%, #F7936F 100.04%)'
          }}
          className="h-full  rounded-full"
        ></div>
      </div>
      <p>{progressPercentage.toFixed(0)}%</p>
    </div>
  );
};

export default FormProgress;