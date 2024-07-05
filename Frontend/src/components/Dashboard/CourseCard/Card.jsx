import React from 'react';

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-info">
        <div className="course-image">Image</div>
        <div>
          <span className="course-category">Business</span>
          <h3>{course.name}</h3>
          <p>{course.lesson}</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${course.progress}%` }}></div>
          </div>
          <span>{course.progress}%</span>
        </div>
      </div>
      <div className="course-actions">
        <button>View Syllabus</button>
        <button>Resume</button>
      </div>
    </div>
  );
}

export default CourseCard;