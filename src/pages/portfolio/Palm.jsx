import React from "react";
import { Link } from "react-router-dom";
import "./portfolioDetailed.css";

const PalmGroove = () => {
  return (
    <div className="portfolio-detailed-container">
      <section className="portfolio-hero">
        <img
          src="/images/grove.jpg"
          alt="The Palm Groove"
          className="portfolio-hero-image"
        />
        <div className="portfolio-hero-overlay">
          <h1 className="portfolio-title">The Palm Groove</h1>
          <p className="portfolio-subtitle">
            Where Every Home Is a Dream Realized
          </p>
        </div>
      </section>

      <section className="zigzag-section">
        <div className="zigzag-row">
          <div className="zigzag-text">
            <h2>Project Overview</h2>
            <p>
              The Palm Groove is a luxury residential community tucked among
              lush palms and quiet breezes. With tailored architecture and lush
              landscaping, each villa is a personal paradise built for comfort,
              style, and serenity.
            </p>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/palm2.jpeg"
              alt="Palm Groove Overview"
              className="image"
            />
          </div>
        </div>
      </section>

      <section className="zigzag-section">
        <div className="zigzag-row reverse">
          <div className="zigzag-text">
            <h2>Highlights</h2>
            <ul>
              <li>Private plunge pools and rooftop terraces</li>
              <li>Eco-conscious construction with thermal insulation</li>
              <li>Smart home automation and biometric access</li>
              <li>Walkable community with gardens, cafés, and yoga zones</li>
            </ul>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/premium3.jpeg"
              alt="Palm Groove Highlights"
              className="image"
            />
          </div>
        </div>
      </section>

      <section className="zigzag-section">
        <div className="zigzag-row">
          <div className="zigzag-text">
            <h2>Client Testimonial</h2>
            <p>
              “The Palm Groove is the definition of luxury meets peace.
              Construct Edge gave us not just a house, but a home that hugs the
              soul.” <br />— <em>Serenity Estates Pvt Ltd</em>
            </p>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/client5.jpeg"
              alt="Client Testimonial"
              className="image"
            />
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to design your dream villa?</h2>
        <p>Let’s turn your vision into a peaceful retreat.</p>
        <Link to="/" className="cta-button">
          ← Back to Home
        </Link>
      </section>
    </div>
  );
};

export default PalmGroove;
