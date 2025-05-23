import "./FeaturedProject.css";
import { Link } from "react-router-dom";

const FeaturedProject = () => {
  return (
    <div className="featured-project">
      <div className="featured-content">
        <div className="featured-image">
          <img src="images/skyline.jpeg" alt="Skyline Towers" />
        </div>
        <div className="featured-details">
          <h2 className="featured-name">Skyline Towers</h2>
          <p className="featured-description">
            Skyline Towers is an architectural icon located in the city's most bustling zone. Designed for innovation and sustainability, this commercial complex redefines modern workspace culture with futuristic aesthetics and green engineering.<br /><br />
            <strong>Why it stands out:</strong> The project features smart building technology, energy-efficient systems, and collaborative workspaces that foster creativity and productivity. Our team managed every aspect from concept to completion, ensuring seamless delivery and client satisfaction.
          </p>
          <div className="featured-tags">
            <span className="featured-tag">Smart Building</span>
            <span className="featured-tag">Sustainable Design</span>
            <span className="featured-tag">LEED Gold</span>
            <span className="featured-tag">Project Management</span>
          </div>
          <ul className="project-highlights">
            <li><strong>Location:</strong> Downtown Business Street</li>
            <li><strong>Completed:</strong> 2024</li>
            <li><strong>Scope:</strong> Architecture + Project Management</li>
            <li><strong>Key Features:</strong> Rooftop gardens, smart lighting, flexible office layouts, and a wellness center for employees.</li>
          </ul>
          <Link to="/portfolio/skyline" className="featured-link">
            View Full Project →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
