import { useState } from 'react'
import React from 'react';
import CourseCard from './components/Coursecard/CourseCard';
import RecommendationCard from './components/Recommendation/RecommendationCard';

function Dashboard() {
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
    <div>
        <div className="welcome">
            <h1 id='welcome'>Welcome Sarah, to Learnovation</h1>
        </div>
        <div className="dashboard">
            <p>Continue Learning</p>
            {courses.map((course, index) => (
                <CourseCard key={index} course={course} />
            ))}
            <h2>Recommendations for you</h2>
            <div className="recommendations">
                {recommendations.map((rec, index) => (
                <RecommendationCard key={index} recommendation={rec} />
                ))}
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
