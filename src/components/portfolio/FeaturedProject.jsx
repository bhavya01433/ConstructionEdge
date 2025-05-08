import React from "react";
import "./FeaturedProject.css";
import { Link } from "react-router-dom";

const FeaturedProject = () => {
  return (
    <div className="featured-project">
      <div className="project-image">
        <img src="images/skyline.jpeg" alt="Skyline Towers" />
      </div>

      <div className="project-content">
        <h2>Skyline Towers</h2>
        <p className="tagline">Commercial Marvel in the Heart of the City</p>
        <p className="description">
          Skyline Towers is an architectural icon located in the city's most
          bustling zone. Designed for innovation and sustainability, this
          commercial complex redefines modern workspace culture with futuristic
          aesthetics and green engineering.
        </p>
        <ul className="project-highlights">
          <li>
            <strong>Location:</strong> Downtown Business Street
          </li>
          <li>
            <strong>Completed:</strong> 2024
          </li>
          <li>
            <strong>Scope:</strong> Architecture + Project Management
          </li>
        </ul>
        <Link to="/portfolio/skyline" className="view-project-btn">
          View Full Project
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProject;
