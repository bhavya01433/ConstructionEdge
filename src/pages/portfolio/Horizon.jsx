import React from "react";
import { Link } from "react-router-dom";
import "./portfolioDetailed.css";

const HorizonVillas = () => {
  return (
    <div className="portfolio-detailed-container">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <img
          src="/images/premium.jpg"
          alt="Horizon Villas"
          className="portfolio-hero-image"
        />
        <div className="portfolio-hero-overlay">
          <h1 className="portfolio-title">Horizon Villas</h1>
          <p className="portfolio-subtitle">
            Where Luxury Meets Lifestyle at Every Sunset
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="zigzag-section">
        <div className="zigzag-row">
          <div className="zigzag-text">
            <h2>Project Overview</h2>
            <p>
              Horizon Villas is a statement in premium residential living—an
              enclave of thoughtfully crafted villas perched amidst scenic
              surroundings. With panoramic views, smart-home automation, and
              resort-style amenities, Horizon is the gold standard for upscale
              suburban life.
            </p>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/premium2.jpeg"
              alt="Horizon Villas Overview"
              className="image"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="zigzag-section">
        <div className="zigzag-row reverse">
          <div className="zigzag-text">
            <h2>Highlights</h2>
            <ul>
              <li>
                <strong>Smart Villas:</strong> App-controlled lighting, HVAC,
                and security in every home.
              </li>
              <li>
                <strong>Resort Amenities:</strong> Infinity pool, clubhouse,
                fitness center, and spa zones.
              </li>
              <li>
                <strong>Panoramic Design:</strong> Floor-to-ceiling windows and
                open-plan living with views to the horizon.
              </li>
              <li>
                <strong>Green Living:</strong> Solar-ready roofs, EV charging
                ports, and eco-friendly construction materials.
              </li>
            </ul>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/palm3.jpeg"
              alt="Horizon Villas Highlights"
              className="image"
            />
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="zigzag-section">
        <div className="zigzag-row">
          <div className="zigzag-text">
            <h2>Client Testimonial</h2>
            <p>
              “Living at Horizon Villas is like being on vacation—every single
              day. The design, the amenities, the vibe—it’s unmatched.”
            </p>
            <p>
              Our residents love the balance of tranquility and tech-savvy
              living. Construct Edge truly redefined premium for us. <br /> —{" "}
              <em>SilverLine Properties</em>
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

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Dreaming of Elevated Living?</h2>
        <p>Let’s create your signature luxury villa with timeless elegance.</p>
        <Link to="/" className="cta-button">
          ← Back to Home
        </Link>
      </section>
    </div>
  );
};

export default HorizonVillas;
