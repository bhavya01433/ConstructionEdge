import React from "react";
import "./VideoBackground.css";

const VideoBackground = () => {
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
          <div className="cta-buttons">
            <button className="cta-btn">Start Building With Us</button>
            <button className="cta-btn secondary">Explore Our Projects</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
