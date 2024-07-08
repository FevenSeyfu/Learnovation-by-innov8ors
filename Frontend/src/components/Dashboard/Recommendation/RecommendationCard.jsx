import React from 'react';
import access_time from '../../assets/images/access_time.png';
import people from '../../assets/images/people.png';

function RecommendationCard({ recommendation }) {
  return (
    <div className="recommendation-card">
      <div className="recommendation-info">
        <span className="course-category">Business</span>
        <p id='course-card-name'>{recommendation.name}</p>
        <p id='course-lesson'>Name of Lesson</p>
        <p>
          <img src={people} alt='people' width="18" height="18"/>
          <span id='active-learners'>{recommendation.learners} Active Learners</span>
          <br></br>
          <img src={access_time} alt='time' width="18" height="18"/>
          <span id='recommendation-hours'>{recommendation.hours} hrs</span>
        </p>
      </div>
    </div>
  );
}

export default RecommendationCard;