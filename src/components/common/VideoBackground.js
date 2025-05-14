import React from "react";
import "./VideoBackground.css";

const VideoBackground = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/construction.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
        <div className="overlay-content">
          <h1>Building Dreams, One Brick at a Time</h1>
          <p>Construct Edge - Elevating Excellence in Construction</p>
          <div className="hero-cta-buttons">
            {/* Start Building With Us button */}
            <button
              className="hero-cta-btn"
              onClick={() => scrollToSection("services")}
            >
              Let’s Build Something Great Together
            </button>

            {/* Explore Our Projects button */}
            <button
              className="hero-cta-btn secondary"
              onClick={() => scrollToSection("portfolio")}
            >
              See What We've Built
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
