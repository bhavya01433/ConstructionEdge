import React from "react";
import { Link } from "react-router-dom";
import "./portfolioDetailed.css";

const NovaOffices = () => {
  return (
    <div className="portfolio-detailed-container">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <img
          src="/images/nova.jpg"
          alt="Nova Offices"
          className="portfolio-hero-image"
        />
        <div className="portfolio-hero-overlay">
          <h1 className="portfolio-title">Nova Offices</h1>
          <p className="portfolio-subtitle">
            Redefining the Modern Workspace with Style and Efficiency
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="zigzag-section">
        <div className="zigzag-row">
          <div className="zigzag-text">
            <h2>Project Overview</h2>
            <p>
              Nova Offices is a cutting-edge commercial development designed to
              inspire productivity and professionalism. Located in the heart of
              the business district, Nova combines elegant design, sustainable
              practices, and tech-integrated solutions to offer the ultimate
              office environment for the modern workforce.
            </p>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/nova2.jpeg"
              alt="Nova Overview"
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
                <strong>Energy-Efficient Smart Infrastructure:</strong> Fully
                automated lighting, HVAC, and access systems.
              </li>
              <li>
                <strong>Collaborative Workspaces:</strong> Open-plan floors,
                breakout zones, and innovation labs.
              </li>
              <li>
                <strong>High-Speed Connectivity:</strong> Enterprise-grade fiber
                internet and secure networking.
              </li>
              <li>
                <strong>Built for Balance:</strong> Rooftop lounges, wellness
                centers, and soundproof meditation pods.
              </li>
            </ul>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/nova3.jpeg"
              alt="Nova Highlights"
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
              “Nova Offices was a game changer for our corporate presence. The
              space reflects our brand values—sophisticated, smart, and
              future-ready.”
            </p>
            <p>
              From the glass façade to the air-purifying interiors, every detail
              is tailored for excellence. It’s more than a building—it’s a
              culture shift. <br /> — <em>Vertex Group</em>
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

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Envision Your Business in Nova?</h2>
        <p>
          Let’s collaborate to create a workspace that inspires innovation and
          drives growth.
        </p>
        <Link to="/" className="cta-button">
          ← Back to Home
        </Link>
      </section>
    </div>
  );
};

export default NovaOffices;
