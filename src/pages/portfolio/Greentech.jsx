import React from "react";
import { Link } from "react-router-dom";
import "./portfolioDetailed.css";

const GreenTech = () => {
  return (
    <div className="portfolio-detailed-container">
      <section className="portfolio-hero">
        <img
          src="/images/greentech.jpg"
          alt="GreenTech Towers"
          className="portfolio-hero-image"
        />
        <div className="portfolio-hero-overlay">
          <h1 className="portfolio-title">GreenTech Towers</h1>
          <p className="portfolio-subtitle">Eco-Conscious Living in the Sky</p>
        </div>
      </section>

      <section className="zigzag-section">
        <div className="zigzag-row">
          <div className="zigzag-text">
            <h2>Project Overview</h2>
            <p>
              GreenTech Towers blend innovation with sustainability, offering
              energy-efficient residential and office spaces. Rising tall in the
              heart of the city, this green marvel harnesses renewable energy
              and sets new standards in sustainable design.
            </p>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/greentech2.jpeg"
              alt="GreenTech Overview"
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
              <li>
                Solar-paneled façade generating 30% of the building’s power
              </li>
              <li>Rainwater harvesting and greywater recycling</li>
              <li>Passive cooling architecture reducing HVAC costs</li>
              <li>Built with recycled and locally sourced materials</li>
            </ul>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/gallery3.jpeg"
              alt="GreenTech Highlights"
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
              “GreenTech Towers is more than a structure—it’s a statement.
              Construct Edge brought our green vision to life with precision,
              care, and futuristic flair.” <br />— <em>EcoCore Group</em>
            </p>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/client3.jpeg"
              alt="Client Testimonial"
              className="image"
            />
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Want to build your own sustainable skyline?</h2>
        <p>Let's build a future that breathes green.</p>
        <Link to="/" className="cta-button">
          ← Back to Home
        </Link>
      </section>
    </div>
  );
};

export default GreenTech;
