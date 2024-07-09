import React from "react";
import GradientPurpleHeading from "../../components/utility/Heading/GradientPurpleHeading";
import CourseCard from "../../components/Dashboard/CourseCard/Card";
import RecommendationCard from "../../components/Dashboard/Recommendation/RecommendationCard";
import Typography from "../../components/utility/Typography/Typography";
import StreakTracker from "../../components/Dashboard/StreakTracker/StreakTracker";
import { useDarkMode } from "usehooks-ts";

const DashboardPage = () => {
  const isDarkMode = useDarkMode();
   const courses = [
    {id:1, name: 'Course Name', lesson: 'Name of Lesson', progress: 36,category: 'Business' },
    {id:2, name: 'Course Name', lesson: 'Name of Lesson', progress: 4 ,category: 'Business'},
    {id:3, name: 'Course Name', lesson: 'Name of Lesson', progress: 50,category: 'Business' },
  ];

  const recommendations = [
    {id:4, name: 'Course Name', learners: 20, hours: 5,category: 'Business' },
    {id:5, name: 'Course Name', learners: 20, hours: 5,category: 'Business' },
  ];
  return (
    <div className="flex flex-col  items-start p-10">
      <header>
        <GradientPurpleHeading size={"bold"}>
          Welcome Sarah, to Learnovation
        </GradientPurpleHeading>
        <p className="font-inter font-bold text-lg text-[#344054] dark:text-white">
          Continue Learning
        </p>
      </header>
     <div className="w-full flex flex-row items-start justify-between">
     <div className="py-4 w-full flex flex-col gap-6">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
      </div>
      <StreakTracker />
     </div>
      <div className="flex flex-col items-start gap-4 pt-4">
      <Typography
          tag={"h2"}
          weight={"regular"}
          size={"lg"}
          type={"text"}
          color={isDarkMode ? "#fff" : "#000"}
        >
          Recommendations for you
        </Typography>
      <div className="flex flex-row gap-6">
        {recommendations.map((rec, index) => (
          <RecommendationCard key={index} recommendation={rec} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default DashboardPage;
