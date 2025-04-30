import React, { useEffect } from "react";
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

      {/* Featured Project */}
      <div className="featured-project">
        <img
          src="images/skyline-hero.jpg"
          alt="featured project"
          className="featured-image"
        />
        <div className="featured-overlay">
          <h3>Skyline Towers</h3>
          <p>Commercial Marvel in the Heart of the City</p>
          <button className="view-btn">View Details</button>
        </div>
      </div>

      {/* Horizontal Scroll Project Showcase */}
      <div id="scrollContainer" className="horizontal-scroll-container">
        {[
          {
            title: "Eden Residence",
            type: "Luxury Living",
            img: "images/eden.jpg",
          },
          {
            title: "Apex Industrial Park",
            type: "Smart Industrial Zone",
            img: "images/apex.jpg",
          },
          {
            title: "Nova Offices",
            type: "Modern Workspace",
            img: "images/nova.jpg",
          },
          {
            title: "Horizon Villas",
            type: "Premium Residentials",
            img: "images/premium.jpg",
          },
          {
            title: "Temple Restoration",
            type: "Historic Preservation",
            img: "images/temple.jpg",
          },
          {
            title: "GreenTech Towers",
            type: "Eco-friendly Skyscraper",
            img: "images/greentech.jpg",
          },
          {
            title: "Mercy Hospital",
            type: "Public Service Building",
            img: "images/hospital.jpg",
          },
          {
            title: "The Palm Groove",
            type: "Dream home",
            img: "images/grove.jpg",
          },
        ].map((project, index) => (
          <div className="scroll-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="card-overlay">
              <h4>{project.title}</h4>
              <p>{project.type}</p>
              <button className="view-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>

      <p className="swipe-indicator">← Swipe to explore →</p>
    </section>
  );
};

export default Portfolio;
