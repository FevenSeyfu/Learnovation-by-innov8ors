import React from "react";
import features from "../../../utils/FeaturesData";
import getImageURL from "../../../utils/getImages-utils";
const Features = () => {
  return (
    <div>
      <div id="title">
        <div id="feature">Features</div>
        <h1>Powerful features to boost your productivity</h1>
      </div>
      <ul id="feature-list">
        {features.map((feature) => (
          <li key={feature.id}>
            <section id="feature-description">
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </section>
            <img src={getImageURL(feature.imageUrl)} alt={feature.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
