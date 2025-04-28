import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceDetail.css";

const Renovation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="service-detail-wrapper">
      {/* Hero Banner */}
      <div className="hero-banner">
        <img
          src="/images/renovation-hero.jpeg"
          alt="Renovation"
          className="banner-img"
        />
        <div className="banner-overlay">
          <h1>Renovation & Remodeling</h1>
          <p>Reimagine your space — with purpose, precision, and passion.</p>
        </div>
      </div>

      {/* Back Button */}
      <div className="service-detail-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back to Services
        </button>

        {/* Intro Section */}
        <section className="intro-section">
          <h2>Transformation You Can Feel</h2>
          <p>
            Whether it's a fresh look or a full-scale structural makeover, our
            renovation and remodeling services breathe new life into residential
            and commercial spaces. We combine creative flair with technical
            expertise to upgrade, optimize, and modernize environments — without
            losing their soul.
          </p>
          <p>
            From kitchens and bathrooms to entire buildings, our team ensures
            every detail reflects your style and elevates your comfort. We
            manage every step — design, materials, execution — to ensure smooth
            delivery and stunning results.
          </p>
        </section>

        {/* Offerings Section */}
        <section className="offerings-section">
          <h2>What We Offer</h2>
          <div className="offering-grid">
            <div className="offering-card">
              <h3>🛠️ Full Home Renovation</h3>
              <p>Complete home transformations with minimal disruption.</p>
            </div>
            <div className="offering-card">
              <h3>🚿 Kitchen & Bath Remodeling</h3>
              <p>Modern, stylish upgrades that enhance daily living.</p>
            </div>
            <div className="offering-card">
              <h3>🎨 Interior Redesign</h3>
              <p>Fresh layouts, new finishes, and a cohesive look & feel.</p>
            </div>
            <div className="offering-card">
              <h3>🏚️ Structural Improvements</h3>
              <p>Safe, code-compliant modifications that last for decades.</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <h2>Elegance in Every Detail</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/images/reno1.jpeg" alt="Living Room Transformation" />
              <p className="image-caption">
                A stunning living room transformation with modern touches.
              </p>
            </div>
            <div className="gallery-item">
              <img src="/images/reno2.jpeg" alt="Kitchen Revamp" />
              <p className="image-caption">
                A bathroom makeover that combines luxury and functionality.
              </p>
            </div>
            <div className="gallery-item">
              <img src="/images/reno3.jpeg" alt="Living Room Remodel" />
              <p className="image-caption">
                Innovative wall designs that bring personality and charm to any
                room.
              </p>
            </div>
            <div className="gallery-item">
              <img src="/images/reno4.jpeg" alt="Bathroom Makeover" />
              <p className="image-caption">
                Living room remodel that redefines comfort
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Let’s Redefine Your Space</h2>
          <p>Schedule a consultation and start your transformation today.</p>
          <button className="cta-btn">Book a Free Assessment</button>
        </section>
      </div>
    </section>
  );
};

export default Renovation;
