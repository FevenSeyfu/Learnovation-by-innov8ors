import React from "react";
import GradientPurpleHeading from "../../components/utility/Heading/GradientPurpleHeading";
import CourseCard from "../../components/Dashboard/CourseCard/Card";
import RecommendationCard from "../../components/Dashboard/Recommendation/RecommendationCard";
import Typography from "../../components/utility/Typography/Typography";

const DashboardPage = () => {
   const courses = [
    { name: 'Course Name', lesson: 'Name of Lesson', progress: 36 },
    { name: 'Course Name', lesson: 'Name of Lesson', progress: 4 },
    { name: 'Course Name', lesson: 'Name of Lesson', progress: 50 },
  ];

  const recommendations = [
    { name: 'Course Name', learners: 20, hours: 5 },
    { name: 'Course Name', learners: 20, hours: 5 },
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
      <div className="py-4">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
      </div>
      <div className="flex flex-col items-start gap-4 pt-4">
      <Typography
          tag={"h2"}
          weight={"regular"}
          size={"lg"}
          type={"text"}
          color="#000"
          className="dark:text-white"
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
