const steps = [
  {
    id: 1,
    name: "courseCategory",
    question: "Which course are you interested in??",
    options: {
      business: "Business",
      computerScience: "Computer Science",
      it: "IT",
      health: "Health",
      artAndDesign: "Art & Design",
    },
  },
  {
    id: 2,
    name: "SkillLevel",
    question: "What is your current skill level in this area?",
    options: {
      beginner: "Beginner: I have little to no experience in this field.",
      intermediate:
        "Intermediate: I have some knowledge and experience, but I am looking to deepen my understanding.",
      advanced:
        "Advanced: I have significant experience and am looking to master my skills.",
    },
  },
  {
    id: 3,
    name: "progressTrackingFrequency",
    question: "How would you like to track progress?",
    options: {
      weekly: "Weekly basis",
      monthly: "Monthly basis",
      yearly: "Yearly basis",
    },
  },
  {
    id: 4,
    name:"courseGoal",
    question: "What is your top goal for taking this course?",
    options: {
      careerAdvancement:
        "Career advancement: I want to gain skills to move forward in my current career.",
      careerChange:
        "Career change: I want to learn new skills to transition to a different field.",
      personalGrowth:
        "Personal growth: I want to improve my knowledge and skills for personal satisfaction.",
      certification:
        "Certification: I want to earn a certification to validate my skills.",
      entrepreneurship:
        "Entrepreneurship: I want to gain skills to start or grow my own business.",
    },
  },
];

export default steps