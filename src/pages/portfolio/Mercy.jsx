import React from "react";
import { Link } from "react-router-dom";
import "./portfolioDetailed.css";

const MercyHospital = () => {
  return (
    <div className="portfolio-detailed-container">
      <section className="portfolio-hero">
        <img
          src="/images/hospital.jpg"
          alt="Mercy Hospital"
          className="portfolio-hero-image"
        />
        <div className="portfolio-hero-overlay">
          <h1 className="portfolio-title">Mercy Hospital</h1>
          <p className="portfolio-subtitle">
            Healing Infrastructure, Designed to Serve
          </p>
        </div>
      </section>

      <section className="zigzag-section">
        <div className="zigzag-row">
          <div className="zigzag-text">
            <h2>Project Overview</h2>
            <p>
              Mercy Hospital was built with compassion and care at its core.
              This cutting-edge public healthcare facility is designed to
              support the well-being of communities, incorporating seamless
              patient flow, natural light, and critical care technologies.
            </p>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/hospital2.jpeg"
              alt="Hospital Overview"
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
              <li>Modular design for scalable expansion</li>
              <li>Negative pressure isolation rooms for infection control</li>
              <li>Child and elder care units with smart monitoring</li>
              <li>
                LEED Silver Certified with green zones and healing gardens
              </li>
            </ul>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/hospital3.jpeg"
              alt="Hospital Highlights"
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
              “Construct Edge didn’t just construct a hospital, they created a
              safe haven for thousands. Every brick breathes compassion.” <br />
              — <em>City Health Trust</em>
            </p>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/client4.jpeg"
              alt="Client Testimonial"
              className="image"
            />
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Got a vision for public health infrastructure?</h2>
        <p>We’ll help you make it real—down to every healing detail.</p>
        <Link to="/" className="cta-button">
          ← Back to Home
        </Link>
      </section>
    </div>
  );
};

export default MercyHospital;
