import React from 'react';
import image44 from 'src/assets/images/image44.png';

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-info">
        <div className="course-image">
            <img src={image44} alt="emptyimage"/>
        </div>
        <div>
          <span className="course-category">Business</span>
          <br/>
          <p id='course-card-name'>{course.name}</p>
          <p id='course-lesson'>{course.lesson}</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${course.progress}%` }}></div>
          </div>
        </div>
      </div>
      <div className="course-actions">
        <button className='syllabus-button'>View Syllabus</button>
        <button className='resume-button'>Resume</button>
      </div>
    </div>
  );
}

export default CourseCard;