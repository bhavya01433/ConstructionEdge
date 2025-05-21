import { useEffect } from "react";
import FeaturedProject from "../portfolio/FeaturedProject";
import { Link } from "react-router-dom";
import portfolioData from "../../data/portfolioData"; //
import "./Portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    const container = document.getElementById("scrollContainer");
    let scrollAmount = 0;

    const autoScroll = setInterval(() => {
      if (container) {
        scrollAmount += 1;
        container.scrollLeft += 1;

        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
          container.scrollLeft = 0;
        }
      }
    }, 30);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">Our Featured Projects</h2>

      <FeaturedProject />

      {/* Horizontal Scroll Project Showcase */}
      <div id="scrollContainer" className="horizontal-scroll-container">
        {portfolioData.map((project, index) => (
          <div className="scroll-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="card-overlay">
              <h4>{project.title}</h4>
              <p>{project.type}</p>
              <Link to={`/portfolio/${project.slug}`}>
                <button className="btn">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <p className="swipe-indicator">← Swipe to explore →</p>
    </section>
  );
};

export default Portfolio;
