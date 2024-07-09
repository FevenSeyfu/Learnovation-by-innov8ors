import React from 'react';

function CourseCard({ course }) {
  return (
    <div className="flex justify-between p-5 border border-gray-300 my-2.5">
      <div className="flex">
        <div className="w-12 h-12 bg-gray-400 mr-5">Image</div>
        <div>
          <span className="bg-gray-300 py-1.25 px-1.25 rounded-md">Business</span>
          <h3>{course.name}</h3>
          <p>{course.lesson}</p>
          <div className="bg-gray-200 h-1 w-25 my-2.5 relative">
            <div className="bg-purple-700 h-full absolute" style={{ width: `${course.progress}%` }}></div>
          </div>
          <span>{course.progress}%</span>
        </div>
      </div>
      <div className="flex flex-col">
        <button className="mb-2.5">View Syllabus</button>
        <button>Resume</button>
      </div>
    </div>
  );
}

export default CourseCard;