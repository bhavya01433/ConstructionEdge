import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceDetail.css";

const Architectural = () => {
  const navigate = useNavigate();

  return (
    <section className="service-detail-wrapper">
      {/* Hero Banner */}
      <div className="hero-banner">
        <img
          src="/images/Carpenter.jpeg"
          alt="Architecture"
          className="banner-img"
        />
        <div className="banner-overlay">
          <h1>Architecture & Planning</h1>
          <p>Turning visions into blueprints, and blueprints into reality.</p>
        </div>
      </div>

      {/* Back Button */}
      <div className="service-detail-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back to Services
        </button>

        {/* Intro Section */}
        <section className="intro-section">
          <h2>Design That Speaks Purpose</h2>
          <p>
            At Construct Edge, architecture is not merely about constructing
            buildings — it's about shaping environments that inspire. Our
            architectural and planning services are rooted in a deep
            understanding of form, function, and future-readiness. We blend
            cutting-edge design with environmental responsibility and strict
            regulatory alignment to deliver spaces that are as sustainable as
            they are striking.
          </p>
          <p>
            From refined residential dwellings to complex commercial
            developments, we partner with clients to translate their visions
            into enduring architectural statements — thoughtfully designed,
            expertly executed, and built to last for generations.
          </p>
        </section>

        {/* Offerings Section */}
        <section className="offerings-section">
          <h2>What We Offer</h2>
          <div className="offering-grid">
            <div className="offering-card">
              <h3>🏗️ Custom Building Plans</h3>
              <p>
                Tailored blueprints that reflect your vision and meet every
                code.
              </p>
            </div>
            <div className="offering-card">
              <h3>🏙️ Urban Design</h3>
              <p>Smart layouts for residential and mixed-use urban zones.</p>
            </div>
            <div className="offering-card">
              <h3>📝 Regulatory Compliance</h3>
              <p>
                All our designs align with local laws and construction
                standards.
              </p>
            </div>
            <div className="offering-card">
              <h3>📀 3D Visualization</h3>
              <p>
                See your project before it’s built — with immersive 3D modeling.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <h2>Visualize the Possibilities</h2>
          <div className="gallery-grid">
            <img src="/images/arch1.jpeg" alt="Design 1" />
            <img src="/images/arch2.jpeg" alt="Design 2" />
            <img src="/images/arch3.jpeg" alt="Design 3" />
            <img src="/images/arch4.jpeg" alt="Design 4" />
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Ready to Build the Future?</h2>
          <p>Let’s turn your vision into an actionable architectural plan.</p>
          <button className="cta-btn">Request a Free Consultation</button>
        </section>
      </div>
    </section>
  );
};

export default Architectural;
