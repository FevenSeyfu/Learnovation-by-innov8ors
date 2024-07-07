import React from 'react';

function RecommendationCard({ recommendation }) {
  return (
    <div className="recommendation-card">
      <div className="recommendation-info">
        <span className="course-category">Business</span>
        <h3 id='course-name'>{recommendation.name}</h3>
        <p>
          <span id='active-learners'>{recommendation.learners} Active Learners</span>
          <br></br>
          <span>{recommendation.hours} hrs</span>
        </p>
      </div>
    </div>
  );
}

export default RecommendationCard;