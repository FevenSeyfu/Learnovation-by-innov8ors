import React from 'react';

function RecommendationCard({ recommendation }) {
  return (
    <div className="recommendation-card">
      <div className="recommendation-info">
        <span className="course-category">Business</span>
        <h3>{recommendation.name}</h3>
        <p>
          <span>{recommendation.learners} Active Learners</span>
          <span>{recommendation.hours} hrs</span>
        </p>
      </div>
    </div>
  );
}

export default RecommendationCard;