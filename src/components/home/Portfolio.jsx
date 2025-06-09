import { useEffect } from "react";
import Masterpiece from "../portfolio/Masterpiece";
import { Link } from "react-router-dom";
import portfolioData from "../../data/portfolioData";
import "./Portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    const container = document.getElementById("scrollContainer");
    if (!container) return;

    let scrollAmount = 0;
    const speed = 1;

    const autoScroll = () => {
      container.scrollLeft += speed;
      scrollAmount += speed;

      // Reset smoothly after scrolling through the first set
      if (scrollAmount >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
        scrollAmount = 0;
      }

      requestAnimationFrame(autoScroll);
    };

    let animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const duplicatedData = [...portfolioData, ...portfolioData];

  return (
    <section className="portfolio-section">
      <Masterpiece />
      <h3 className="portfolio-heading">Portfolio</h3>
      <p className="portfolio-desc">
        A showcase of purposeful design and expert craftsmanship. <br />
        Where vision becomes structure — and ideas become icons.
      </p>

      {/* Horizontal Scroll Section */}
      <div id="scrollContainer" className="horizontal-scroll-container">
        {duplicatedData.map((project, index) => (
          <div className="scroll-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="card-overlay">
              <h4>{project.title}</h4>
              <p>{project.type}</p>
              <Link to={`/portfolio/${project.slug}`}>
                <button className="btn view-btn">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Mobile Hint */}
      <p className="swipe-indicator">← Swipe to explore →</p>
    </section>
  );
};

export default Portfolio;
