import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./masterpiece.css";

const Masterpiece = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const [titleHidden, setTitleHidden] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  const handleScroll = () => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (!section || !image || !content) return;

    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollProgress = Math.min(
      1,
      Math.max(0, 1 - rect.top / windowHeight)
    );

    // Zoom image
    const scale = scrollProgress * 1;
    image.style.transform = `scale(${scale})`;

    // Fade out title when scrolling down, fade in when scrolling up
    // const titleThreshold = 0.9;
    // const isScrollingDown = window.scrollY > window.lastScrollY;
    // setTitleHidden(isScrollingDown && scrollProgress > titleThreshold);

    // Fade in content after zoom
    setContentVisible(scrollProgress > 0.35);

    // Store current scroll position for next comparison
    window.lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="masterpiece-section" ref={sectionRef}>
      <div className="masterpiece-title-wrapper">
        <div className={`masterpiece-title ${titleHidden ? "hidden" : ""}`}>
          <span>MASTER</span>
          <span>PIECE</span>
        </div>
        <img
          ref={imageRef}
          src="/images/farm.jpg"
          alt="Zoom"
          className="title-image"
        />

        <div
          ref={contentRef}
          className={`masterpiece-content ${contentVisible ? "visible" : ""}`}
        >
          <h2>Farmhouse Project</h2>
          <p className="project-desc">
            A modern farmhouse where elegance meets sustainability. Crafted for
            timeless comfort and contemporary living.
          </p>

          <div className="tag-grid">
            <div className="tag">
              🏡 <span>4,500 sq ft</span>
            </div>
            <div className="tag">
              🌿 <span>Sustainable</span>
            </div>
            <div className="tag">
              ✨ <span>Smart tech</span>
            </div>
            <div className="tag">
              🪵 <span>Premium finish</span>
            </div>
          </div>

          <Link to="portfolio/MasterpieceDetail" className="btn featured-btn">
            View Full Project Details
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Masterpiece;
