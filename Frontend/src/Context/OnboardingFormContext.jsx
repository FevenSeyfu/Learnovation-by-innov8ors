import React, { createContext, useContext, useReducer } from "react";

const OnboardingFormContext = createContext();
const stepOrder = [
  "courseCategory",
  "SkillLevel",
  "progressTrackingFrequency",
  "courseGoal",
];

const initialState = {
  step: "courseCategory",
  formData: {
    courseInterest: "",
  },
};

const onboardingFormReducer = (state, action) => {
  const currentStepIndex = stepOrder.indexOf(state.step);
  switch (action.type) {
    case "NEXT_STEP":
      const nextStep =
        currentStepIndex < stepOrder.length - 1
          ? stepOrder[currentStepIndex + 1]
          : state.step;
      return { ...state, step: nextStep };
    case "PREVIOUS_STEP":
      const prevStep =
        currentStepIndex > 0 ? stepOrder[currentStepIndex - 1] : state.step;
      return { ...state, step: prevStep };
    case "UPDATE_FORM_DATA":
      return { ...state, formData: { ...state.formData, ...action.payload } };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

const OnboardingFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(onboardingFormReducer, initialState);

  return (
    <OnboardingFormContext.Provider value={{ state, dispatch }}>
      {children}
    </OnboardingFormContext.Provider>
  );
};

const useOnboardingFormContext = () => {
  const context = useContext(OnboardingFormContext);
  if (!context) {
    throw new Error("useOnboardingFormContext must be used within a OnboardingFormProvider");
  }
  return context;
};


export { OnboardingFormProvider, useOnboardingFormContext };